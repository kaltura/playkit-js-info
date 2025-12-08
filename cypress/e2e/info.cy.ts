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

  describe('entry name', () => {
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
  });

  describe('entry description', () => {
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

    it('should sanitize and render description with html tags inside', () => {
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

  describe('entry broadcast and creation date', () => {
    it('should test live entry', () => {
      mockKalturaBe('live.json');
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="createdAt"]').should($div => {
          expect($div.text()).to.eq('Live now');
        });
      });
    });
    it('should test entry created more than year ago', () => {
      cy.clock(new Date(2025, 6, 24), ['Date']);
      mockKalturaBe();
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="createdAt"]').should($div => {
          expect($div.text()).to.eq('More than a year ago');
        });
      });
    });
    it('should test entry created few months ago', () => {
      cy.clock(new Date(2022, 8, 10), ['Date']);
      mockKalturaBe();
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="createdAt"]').should($div => {
          expect($div.text()).to.eq('2 Months ago');
        });
      });
    });
    it('should test entry created few days ago', () => {
      cy.clock(new Date(2022, 6, 9), ['Date']);
      mockKalturaBe();
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="createdAt"]').should($div => {
          expect($div.text()).to.eq('3 days ago');
        });
      });
    });
    it('should test entry created today', () => {
      cy.clock(new Date(2022, 6, 5), ['Date']);
      mockKalturaBe();
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="createdAt"]').should($div => {
          expect($div.text()).to.eq('Today');
        });
      });
    });
    it('should not render entry creation date if showCreatedAt is false', () => {
      mockKalturaBe();
      loadPlayer({showCreatedAt: false}).then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="createdAt"]').should('not.exist');
      });
    });
  });

  describe('entry creator / owner', () => {
    it('should render entry creator by default', () => {
      mockKalturaBe();
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="creator"]').should($div => {
          expect($div.text()).to.eq('By Test Creator');
        });
      });
    });

    it('should render entry owner if creator id is false', () => {
      mockKalturaBe();
      loadPlayer({useCreatorId: false}).then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="creator"]').should($div => {
          expect($div.text()).to.eq('By Test Owner');
        });
      });
    });

    it('should not render entry owner if showUser is false', () => {
      mockKalturaBe();
      loadPlayer({showUser: false}).then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="creator"]').should('not.exist');
      });
    });
  });

  describe('entry plays', () => {
    it('should render entry plays', () => {
      mockKalturaBe();
      loadPlayer().then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="plays"]').should($div => {
          expect($div.text()).to.eq('19 plays');
        });
      });
    });

    it('should not render entry plays if showPlays is false', () => {
      mockKalturaBe();
      loadPlayer({showPlays: false}).then(() => {
        cy.get('[data-testid="infoPluginButton"]').click({force: true});
        cy.get('[data-testid="plays"]').should('not.exist');
      });
    });
  });
});
