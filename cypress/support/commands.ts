Cypress.Commands.add('login', (email: any, password: any) => {})
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
    }
  }
}

export {};
