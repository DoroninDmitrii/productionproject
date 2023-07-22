let currentArticleId = ''

describe('the user is visiting to article page', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      currentArticleId = article.id
      cy.visit(`articles/${article.id}`)
    })
  })
  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })
  it('and seeing the content', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })
})
