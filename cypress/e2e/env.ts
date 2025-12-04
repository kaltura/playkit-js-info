export const preparePage = (pluginConf: Object, playbackConf: Object) => {
  cy.visit('index.html');
  return cy.window().then(win => {
    try {
      // @ts-ignore
      var kalturaPlayer = win.KalturaPlayer.setup({
        targetId: 'player-placeholder',
        provider: {
          partnerId: -1,
          env: {
            cdnUrl: 'http://mock-cdn',
            serviceUrl: 'http://mock-api'
          }
        },
        plugins: {
          'playkit-js-info': pluginConf,
          uiManagers: {}
        },
        playback: {muted: true, autoplay: true, ...playbackConf}
      });
      return kalturaPlayer.loadMedia({entryId: '0_wifqaipd'});
    } catch (e: any) {
      return Promise.reject(e.message);
    }
  });
};

export const getPlayer = () => {
  // @ts-ignore
  return cy.window().then($win => $win.KalturaPlayer.getPlayers()['player-placeholder']);
};

export const loadPlayer = (pluginConf = {}, playbackConf = {}) => {
  return preparePage(pluginConf, playbackConf).then(() => getPlayer().then(kalturaPlayer => kalturaPlayer));
};

const checkRequest = (reqBody: any, service: string, action: string) => {
  return reqBody?.service === service && reqBody?.action === action;
};

export const mockKalturaBe = (entryFixture = 'vod-without-description.json') => {
  cy.intercept('http://mock-api/service/multirequest', req => {
    if (checkRequest(req.body[2], 'baseEntry', 'list')) {
      return req.reply({fixture: entryFixture});
    }
  });
};
