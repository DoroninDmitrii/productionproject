let profileId = ''

describe('the user is visiting profile page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then((data) => {
      profileId = data.id
      cy.visit(`profile/${data.id}`)
    })
  })
  afterEach(() => {
    cy.resetProfile(profileId)
  })
  it('and profile is loaded', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test')
  })
  it('and update it', () => {
    const newName = 'new'
    const newLastname = 'lastname'
    cy.updateProfile(newName, newLastname)
    cy.getByTestId('ProfileCard.firstname').should('have.value', newName)
    cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname)
  })
})
