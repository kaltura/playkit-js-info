const MANIFEST = `#EXTM3U
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="English",DEFAULT=NO,AUTOSELECT=YES,FORCED=NO,LANGUAGE="en",URI="${location.origin}/media/index_1.m3u8"

#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=504265,RESOLUTION=640x360,AUDIO="audio",SUBTITLES="subs"
${location.origin}/media/index.m3u8`



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
    cy.intercept('POST', 'http://mock-api/service/multirequest', {fixture: 'vod-without-description.json'});
    cy.visit('index.html');
    cy.get('.playkit-pre-playback-play-button').click({force: true});
    cy.get('[data-testid="infoPluginButton"]').click({force: true});
    cy.get('[data-testid="infoRoot"]').should('exist');
    cy.get('.playkit-close-overlay').click({force: true});
    cy.get('[data-testid="infoRoot"]').should('not.exist');
  });

  it('should render entry name without description and broadcast date', () => {
    cy.intercept('POST', 'http://mock-api/service/multirequest', {fixture: 'vod-without-description.json'});
    cy.visit('index.html');
    cy.get('.playkit-pre-playback-play-button').click({force: true});
    cy.get('[data-testid="infoPluginButton"]').click({force: true});
    cy.get('[data-testid="entryDescription"]').should('not.exist');
    cy.get('[data-testid="broadcastedDate"]').should('not.exist');
    cy.get('[data-testid="entryName"]').should($div => {
      expect($div.text()).to.eq('MPEG Dash with MultiAudio New Transcoding');
    });
  });

  it('should render entry description', () => {
    cy.intercept('POST', 'http://mock-api/service/multirequest', {fixture: 'vod-with-description.json'});
    cy.visit('index.html');
    cy.get('.playkit-pre-playback-play-button').click({force: true});
    cy.get('[data-testid="infoPluginButton"]').click({force: true});
    cy.get('[data-testid="entryDescription"]').should($div => {
      expect($div.text()).to.eq(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
      );
    });
  });

  it('should render entry broadcast date', () => {
    cy.intercept('POST', 'http://mock-api/service/multirequest', {fixture: 'live.json'});
    cy.visit('index.html');
    cy.get('.playkit-pre-playback-play-button').click({force: true});
    cy.get('[data-testid="infoPluginButton"]').click({force: true});
    cy.get('[data-testid="broadcastedDate"]').should($div => {
      expect($div.text()).to.eq('Live Now');
    });
  });

  it('should sanitize and render discription with html tags inside', () => {
    const result = `line one<br>line two<br>line three<br>Praesent sapien massa, convallis a <u>pellentesque nec, egest</u>as non nisi. Mauris blandit aliquet elit, eget <a target="_blank" href="http://google.com">tincidunt</a> nibh pulvinar a. <b>Curabitur arcu erat, accumsan </b>id imperdiet et, <span>porttitor</span> at sem.<i> Vestibulum ante ipsum prim</i>is in faucibus;<br><blockquote><ul><li>one</li><li>two</li></ul></blockquote>Last line<br><br>`;
    cy.intercept('POST', 'http://mock-api/service/multirequest', {fixture: 'vod-with-html-tags.json'});
    cy.visit('index.html');
    cy.get('.playkit-pre-playback-play-button').click({force: true});
    cy.get('[data-testid="infoPluginButton"]').click({force: true});
    cy.get('[data-testid="entryDescription"]').should($div => {
      expect($div.html()).to.eq(result);
    });
  });
});
