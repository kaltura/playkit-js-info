const MANIFEST = `#EXTM3U
#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",LANGUAGE="en",NAME="English",AUTOSELECT=YES,DEFAULT=YES,URI="${location.origin}/media/index_1.m3u8",SUBTITLES="subs"

#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=509496,RESOLUTION=480x272,AUDIO="audio",SUBTITLES="subs"
${location.origin}/media/index.m3u8`;

describe('Info plugin', () => {
  beforeEach(() => {
    // manifest
    cy.intercept('GET', '**/a.m3u8*', MANIFEST);
    // thumbnails
    cy.intercept('GET', '**/width/164/vid_slices/100', {fixture: '100.jpeg'});
    cy.intercept('GET', '**/height/360/width/640', {fixture: '640.jpeg'});
    // kava
    cy.intercept('GET', '**/index.php?service=analytics*', {});
  });

  it('should open and close Info plugin', () => {
    cy.intercept('POST', 'http://mock-api/service/multirequest', {fixture: 'without-description.json'});
    cy.visit('./index.html');
    cy.get('.playkit-pre-playback-play-button').click({force: true});
    cy.get('[data-testid="infoPluginButton"]').click({force: true});
    cy.get('[data-testid="infoRoot"]').should('exist');
    cy.get('.playkit-close-overlay').click({force: true});
    cy.get('[data-testid="infoRoot"]').should('not.exist');
  });

  it('should render entry name without description', () => {
    cy.intercept('POST', 'http://mock-api/service/multirequest', {fixture: 'without-description.json'});
    cy.visit('./index.html');
    cy.get('.playkit-pre-playback-play-button').click({force: true});
    cy.get('[data-testid="infoPluginButton"]').click({force: true});
    cy.get('[data-testid="entryDescription"]').should('not.exist');
    cy.get('[data-testid="entryName"]').should($div => {
      expect($div.text()).to.eq('MPEG Dash with MultiAudio New Transcoding');
    });
  });

  it('should render entry description', () => {
    cy.intercept('POST', 'http://mock-api/service/multirequest', {fixture: 'with-description.json'});
    cy.visit('./index.html');
    cy.get('.playkit-pre-playback-play-button').click({force: true});
    cy.get('[data-testid="infoPluginButton"]').click({force: true});
    cy.get('[data-testid="entryDescription"]').should($div => {
      expect($div.text()).to.eq(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
      );
    });
  });
});
