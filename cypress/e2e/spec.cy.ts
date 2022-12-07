describe('empty spec', () => {
  it('should test info plugin', done => {
    cy.visit('index.html');
    cy.get('.playkit-pre-playback-play-button').click({force: true});
    cy.get('[data-cy="infoPluginButton"]').click({force: true});
    cy.get('[data-cy="entryName"]').should($p => {
      expect($p.text()).to.eq('MPEG Dash with MultiAudio New Transcoding');
      done();
    });
  });
});
