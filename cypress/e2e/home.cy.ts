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

  it.skip('Should be able to Sign In', () => {
    // Need to stub/mock and intercept GraphQL query
  })

  it.skip('Should be able to Sign Up', () => {
    // Need to stub/mock and intercept GraphQL mutation
  })
});