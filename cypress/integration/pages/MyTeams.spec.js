describe('MyTeams page integration tests', () => {
  it('should find page title', () => {
    cy.visit('/');
    cy.get('#my-teams-title-1').should('contain', 'Hello World !');
  });
});
