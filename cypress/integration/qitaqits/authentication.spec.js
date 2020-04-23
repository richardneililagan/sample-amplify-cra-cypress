const SELECTORS = {
  username: '[data-test="username-input"]',
  password: '[data-test="sign-in-password-input"]',
  signinButton: '[data-test="sign-in-sign-in-button"]',
  signOutButton: '[data-test="sign-out-button"]',
}

describe('Authenticator', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('allows a user to sign in', () => {
    // :: perform the signin
    cy.get(SELECTORS.username).type('cardingggg')
    cy.get(SELECTORS.password).type('q1w2e3r4t5y6u7i8o9')
    cy.get(SELECTORS.signinButton).contains('Sign In').click()

    // :: check that we actually got signed in
    cy.get(SELECTORS.signOutButton).contains('Sign Out')
  })
})
