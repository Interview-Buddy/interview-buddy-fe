describe('Home page', () => {
  it('Visits baseUrl, which contains a welcome message to the user.', () => {
    cy.visit('/')
    
  });

  it('Visits baseUrl, which contains a form to login.', () => {
    cy.visit('/')
  });

  it('Visits baseUrl, which contains a button to sign up.', () => {
    cy.visit('/')
  });
});