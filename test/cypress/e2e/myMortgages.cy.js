// homepage.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My Mortages', () => {
  it('can be displayed', () => {
    // Navigate to My Mortgages via the menu
    cy.visit('/');
    cy.get('#menuIcon').click();
    cy.get('#myMortgagesMenuItem').click();

    // We should be redirected to the login page, so let's log in
    cy.url().should('include', '/login');
    cy.get('#email').type('siguser@synopsys.com');
    cy.get('#password').type('password{enter}');
    cy.url().should('include', '/myMortgages');

    // Make sure we can see the seeded mortage details
    cy.get('.mortgageAddress').contains('1 Alabaster Avenue');
    cy.get('.mortgageAddress').contains('35 Broad Street');
        
    // Log out again
    cy.get('#logoutButton').click();

    // And make sure that we are indeed logged out
    cy.get('#loginButton').should('contain', 'Login');
  });
  
})