// homepage.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Login', () => {
  it('is possible from the homepage', () => {
    // Click on "login" from the homepage
    cy.visit('/');
    cy.get('#loginButton').should('contain', 'Login');
    cy.get('#loginButton').click();
    cy.url().should('include', '/login');

    // Sign in with email and password
    cy.get('#email').type('siguser@synopsys.com');
    cy.get('#password').type('password{enter}');

    // Check that we are now logged in
    cy.get('#logoutButton').should('contain', 'Logout');

    // Log out again
    cy.get('#logoutButton').click();

    // And make sure that we are indeed logged out
    cy.get('#loginButton').should('contain', 'Login');
  });
  
})