describe('Blog', () => {
  it('can be viewed without authentication', () => {
    // Navigate to the blog page
    cy.visit('/');
    cy.get('#menuIcon').click();
    cy.get('#blogMenuItem').click();
    cy.url().should('include', '/blog');

    // Now check that we have the 3 lead stories we are expecting
    cy.contains('Boiling hot house prices in the Netherlands may be a sign of things to come in rich, densely populated countries.');
    cy.contains('A small country estate nestled');
    cy.contains('Are you thinking of moving this year?');

    cy.get('a[href*="/blog/"]').should('have.length', 3);
    cy.get('a[href*="/blog/"]').each((item, index) => {
      if (index === 0) {
        // Then drill down into the first story
        cy.wrap(item).click();
        cy.url().should('include', 'blog/');

        // Check that the two existing comments are there
        cy.contains("I could not disagree more. So I won't!");
        cy.contains("Je suis entièrement d'accord avec ce sentiment.");

        // And that there is no comment UI
        cy.get('#comment').should('not.exist');
      }
    })
  });

  it('can be subscribed to', () => {
    // Navigate to the blog page
    cy.visit('/');
    cy.get('#menuIcon').click();
    cy.get('#blogMenuItem').click();
    cy.url().should('include', '/blog');

    // Now check that we have the 3 lead stories we are expecting
    cy.contains('Subscribe').click();
    cy.get('#email').type('siguser@synopsys.com');
    cy.get('#includePartners').click();
    cy.get('#subscribeButton').click();
  });
  
  it('can be commented on once authenticated', () => {
    // Navigate to the blog page
    cy.visit('/');
    cy.get('#loginButton').should('contain', 'Login');
    cy.get('#loginButton').click();
    cy.url().should('include', '/login');

    // Sign in with email and password
    cy.get('#email').type('siguser@synopsys.com');
    cy.get('#password').type('password{enter}');

    // Check that we are now logged in
    cy.get('#logoutButton').should('contain', 'Logout');

    // Go to the blog
    cy.get('#menuIcon').click();
    cy.get('#blogMenuItem').click();
    cy.url().should('include', '/blog');

    // Then drill down into the first story
    cy.contains('Continue reading...').click();
    cy.url().should('include', 'blog/');
    
    // Leave a comment
    cy.get('#comment').type('I should think so!{enter}');
    cy.contains('I should think so!');
  });
})

it('will not allow rude words in the comments', () => {
  // Navigate to the blog page
  cy.visit('/');
  cy.get('#loginButton').should('contain', 'Login');
  cy.get('#loginButton').click();
  cy.url().should('include', '/login');

  // Sign in with email and password
  cy.get('#email').type('siguser@synopsys.com');
  cy.get('#password').type('password{enter}');

  // Check that we are now logged in
  cy.get('#logoutButton').should('contain', 'Logout');

  // Go to the blog
  cy.get('#menuIcon').click();
  cy.get('#blogMenuItem').click();
  cy.url().should('include', '/blog');

  // Then drill down into the first story
  cy.contains('Continue reading...').click();
  cy.url().should('include', 'blog/');
  
  // Leave a comment including a rude word ("idiot")
  cy.get('#comment').type('What an idiot!{enter}');

  // The "Keep it clean" modal should pop up.
  cy.contains('Keep it clean');

  // Now send a justification
  cy.get('#justification').type("This is not a rude word in English");
  cy.get("#justificationButton").click();
})