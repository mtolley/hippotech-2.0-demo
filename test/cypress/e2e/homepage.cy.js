// homepage.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Homepage', () => {
  it('Provides a link to Get Me A Mortgage', () => {
    cy.visit('/');
    cy.get('#goToApproval').should('contain', 'Get me a mortgage');
  });
  it('Is logged out by default', () => {
    cy.visit('/');
    cy.get('#loginButton').should('contain', 'Login');
  });
})