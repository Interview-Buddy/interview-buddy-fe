import Header from "@components/header";

describe('Header component', () => {
  it('Mounts a Header tag.', () => {
    cy.mount(<Header />);
    cy.get('header').should('be.visible');
  });

  it('Contains an h1 tag that is the name of the application. This h1 is also a link to the root URL.', () => {
    cy.mount(<Header />);
    cy.get('h1').contains('Interview Buddy').should('be.visible');
    cy.get('h1 > a').should('have.attr', 'href', '/');
  });

  it.skip('Does not display a Logout Button when a user is not logged in.', () => {
    cy.mount(<Header />);
  });

  it.skip('Displays a Logout Button when a user is logged in.', () => {
    cy.mount(<Header />);
  });
});