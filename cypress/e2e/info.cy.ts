import {mockKalturaBe, loadPlayer} from './env';

const MANIFEST = `#EXTM3U
#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",LANGUAGE="en",NAME="English",AUTOSELECT=YES,DEFAULT=YES,URI="${location.origin}/media/index_1.m3u8",SUBTITLES="subs"
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=509496,RESOLUTION=480x272,AUDIO="audio",SUBTITLES="subs"
${location.origin}/media/index.m3u8`;

const MANIFEST_SAFARI = `#EXTM3U
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="English",DEFAULT=NO,AUTOSELECT=YES,FORCED=NO,LANGUAGE="en",URI="${location.origin}/media/index_1.m3u8"
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=504265,RESOLUTION=480x272,AUDIO="audio",SUBTITLES="subs"
${location.origin}/media/index.m3u8`;

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Info plugin', () => {
  beforeEach(() => {
    // manifest
    cy.intercept('GET', '**/a.m3u8*', Cypress.browser.name === 'webkit' ? MANIFEST_SAFARI : MANIFEST);
    // thumbnails
    cy.intercept('GET', '**/width/164/vid_slices/100', {fixture: '100.jpeg'});
    cy.intercept('GET', '**/height/360/width/640', {fixture: '640.jpeg'});
    // kava
    cy.intercept('POST', '**/index.php?service=analytics*', {});
  });

  it('should open and close Info plugin', () => {
    mockKalturaBe();
    loadPlayer().then(() => {
      cy.get('[data-testid="infoPluginButton"]').click({force: true});
      cy.get('[data-testid="infoRoot"]').should('exist');
      cy.get('.playkit-close-overlay').click({force: true});
      cy.get('[data-testid="infoRoot"]').should('not.exist');
    });
  });

  it('should render entry name without description and broadcast date', () => {
    mockKalturaBe();
    loadPlayer().then(() => {
      cy.get('[data-testid="infoPluginButton"]').click({force: true});
      cy.get('[data-testid="entryDescription"]').should('not.exist');
      cy.get('[data-testid="broadcastedDate"]').should('not.exist');
      cy.get('[data-testid="entryName"]').should($div => {
        expect($div.text()).to.eq('MPEG Dash with MultiAudio New Transcoding');
      });
    });
  });

  it('should render entry description', () => {
    mockKalturaBe('vod-with-description.json');
    loadPlayer().then(() => {
      cy.get('[data-testid="infoPluginButton"]').click({force: true});
      cy.get('[data-testid="entryDescription"]').should($div => {
        expect($div.text()).to.eq(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
        );
      });
    });
  });

  describe('should test entry broadcast and update date', () => {
    it('should test live entry', () => {
      mockKalturaBe('live.json');
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="updatedAt"]').should($div => {
          expect($div.text()).to.eq('Live now');
        });
      });
    });
    it('should test entry created more than year ago', () => {
      cy.clock(new Date(2020, 6, 24), ['Date']);
      mockKalturaBe();
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="updatedAt"]').should($div => {
          expect($div.text()).to.eq('More than a year ago');
        });
      });
    });
    it.skip('should test entry created few month ago', () => {
      // TODO: enable once UI-conf got updated
      cy.clock(new Date(2023, 10, 10), ['Date']);
      mockKalturaBe();
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="updatedAt"]').should($div => {
          expect($div.text()).to.eq('2 Months ago');
        });
      });
    });
    it.skip('should test entry created few days ago', () => {
      // TODO: enable once UI-conf got updated
      cy.clock(new Date(2023, 8, 20), ['Date']);
      mockKalturaBe();
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="updatedAt"]').should($div => {
          expect($div.text()).to.eq('3 days ago');
        });
      });
    });
    it.skip('should test entry created today', () => {
      // TODO: enable once UI-conf got updated
      cy.clock(new Date(2023, 8, 16), ['Date']);
      mockKalturaBe();
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="updatedAt"]').should($div => {
          expect($div.text()).to.eq('Today');
        });
      });
    });
  });

  it.skip('should render entry author', () => {
    // TODO: enable once UI-conf got updated
    mockKalturaBe();
    loadPlayer().then(() => {
      cy.get('[data-testid="infoPluginButton"]').click({force: true});
      cy.get('[data-testid="creator"]').should($div => {
        expect($div.text()).to.eq('Test User');
      });
    });
  });

  it.skip('should render entry views', () => {
    // TODO: enable once UI-conf got updated
    mockKalturaBe();
    loadPlayer().then(() => {
      cy.get('[data-testid="infoPluginButton"]').click({force: true});
      cy.get('[data-testid="views"]').should($div => {
        expect($div.text()).to.eq('101 views');
      });
    });
  });

  it('should sanitize and render discription with html tags inside', () => {
    const result = `line one<br>line two<br>line three<br>Praesent sapien massa, convallis a <u>pellentesque nec, egest</u>as non nisi. Mauris blandit aliquet elit, eget <a target="_blank" href="http://google.com">tincidunt</a> nibh pulvinar a. <b>Curabitur arcu erat, accumsan </b>id imperdiet et, <span>porttitor</span> at sem.<i> Vestibulum ante ipsum prim</i>is in faucibus;<br><blockquote><ul><li>one</li><li>two</li></ul></blockquote>Last line<br><br>`;
    mockKalturaBe('vod-with-html-tags.json');
    loadPlayer().then(() => {
      cy.get('[data-testid="infoPluginButton"]').click({force: true});
      cy.get('[data-testid="entryDescription"]').should($div => {
        expect($div.html()).to.eq(result);
      });
    });
  });
});
