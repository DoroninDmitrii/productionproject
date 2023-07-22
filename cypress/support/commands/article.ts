import { Article } from '../../../src/entities/Article'

const defaultArticle = {
  title: 'C++ news',
  subtitle: 'Что нового в C++ за 2022 год?',
  img: 'https://www.tadviser.ru/images/thumb/5/5e/ScreeJKnshot_82.png/840px-ScreeJKnshot_82.png',
  views: 50220,
  createdAt: '26.02.2022',
  userId: '1',
  type: [
    'IT'
  ],
  blocks: []
}

export const createArticle = (article?: Article) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'something' },
    body: article ?? defaultArticle
  }).then((resp) => resp.body)
}

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'something' }
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      removeArticle(articleId: string): Chainable<void>
    }
  }
}
