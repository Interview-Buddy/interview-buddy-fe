import Header from "@components/header";

describe('Header component', () => {
  it('Mounts a Header tag.', () => {
    cy.mount(<Header />);
    cy.get('header').should('be.visible');
  });

  it.skip('Contains an h1 tag that contains an img tag that is the application logo with a proper alt attribute for accessibility. This title img is also a link to the root URL.', () => {
    cy.mount(<Header />);
  });

  it.skip('Does not display a Logout Button when a user is not logged in.', () => {
    cy.mount(<Header />);
  });

  it.skip('Displays a Logout Button when a user is logged in.', () => {
    cy.mount(<Header />);
  });
});