describe('Mortgage approval', () => {
  it('can be requested', () => {
    // Navigate to Mortage Approval request via the button on the home screen
    cy.visit('/');
    cy.get('#goToApproval').click();
    
    // We should be redirected to the login page, so let's log in
    cy.url().should('include', '/login');
    cy.get('#email').type('siguser@synopsys.com');
    cy.get('#password').type('password{enter}');
    cy.url().should('include', '/approval');

    // Fill in address details
    cy.get('#address1').type('11 Park Plein');
    cy.get('#address2').type('Lower Voorburg');
    cy.get('#zip').type('12345');
    cy.get('#state').type('California');
    cy.get('#purchasePrice').type('655000');
    cy.get('#amountToBorrow').type('255000');
    cy.get('#iUnderstand').click();
    cy.get('#nextButton').click();

    // Fill in payment details
    cy.get('#cardName').type('Mr Scott Tolley');
    cy.get('#cardNumber').type('1111222233331234');
    cy.get('#expDate').type('02/23');
    cy.get('#cvv').type('999');
    cy.get('#iAgree').click();
    cy.get('#nextButton').click();

    // And submit
    cy.get('#nextButton').click();

    // We need to wait because if we head to My Mortgages too quickly, the 
    // new mortgage will not appear yet.
    cy.wait(5000);
    
    // Navigate to My Mortgages via the menu
    cy.get('#menuIcon').click();
    cy.get('#myMortgagesMenuItem').click();    
    
    // Make sure we can see the seeded mortage details
    cy.get('.mortgageAddress').contains('1 Alabaster Avenue');
    cy.get('.mortgageAddress').contains('35 Broad Street');
    cy.get('.mortgageAddress').contains('11 Park Plein');    

    // Log out again
    cy.get('#logoutButton').click();

    // And make sure that we are indeed logged out
    cy.get('#loginButton').should('contain', 'Login');
  });
  
})