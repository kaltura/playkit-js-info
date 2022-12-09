const MANIFEST = `#EXTM3U
#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",LANGUAGE="en",NAME="English",AUTOSELECT=YES,DEFAULT=YES,URI="${location.origin}/media/index_1.m3u8",SUBTITLES="subs"

#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=509496,RESOLUTION=480x272,AUDIO="audio",SUBTITLES="subs"
${location.origin}/media/index.m3u8`;

describe('empty spec', () => {
  it('should test info plugin', done => {
    // kaltura-BE
    cy.intercept('POST', 'http://mock-api/service/multirequest', {fixture: 'kaltura-be.json'});

    // manifest
    cy.intercept('GET', '**/a.m3u8*', MANIFEST);

    // assets
    cy.intercept('GET', '**/width/164/vid_slices/100', {fixture: '100.jpeg'});
    cy.intercept('GET', '**/height/360/width/640', {
      fixture: '640.jpeg'
    });

    // kava
    cy.intercept('GET', '**/index.php?service=analytics*', {
      time: 1670496876.551,
      viewEventsEnabled: true
    });

    cy.visit('index.html');

    cy.get('.playkit-pre-playback-play-button').click({force: true});
    cy.get('[data-cy="infoPluginButton"]').click({force: true});
    cy.get('[data-cy="entryName"]').then($p => {
      expect($p.text()).to.eq('MPEG Dash with MultiAudio New Transcoding');
      done();
    });
  });
});
