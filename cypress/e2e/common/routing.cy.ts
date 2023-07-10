describe('routing', () => {
  it('navigate to the main page', () => {
    cy.visit('/');
    cy.get('[data-testid=MainPage]').should('exist')
  })
})
