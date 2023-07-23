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
  it('and seeing the list of recommendation', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })
  it('and send comments', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('text')
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })
  it('and set rate', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 4)
  })
})
