describe('the user is visiting the article list page', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('articles')
    })
  })
  it('articles are loaded', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })
})
