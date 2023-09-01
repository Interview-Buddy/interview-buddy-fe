import Header from "@components/Header";

describe('Header component', () => {
  it('Mounts a Header tag.', () => {
    cy.mount(<Header />);
  });

  it.skip('Contains an h1 tag that is the title of the application, this title is also a link to the root URL.', () => {
    cy.mount(<Header />);
  });

  it.skip('Contains an img tag that is the application logo with a proper alt attribute for accessibility.', () => {
    cy.mount(<Header />);
  });

  it.skip('Does not display a Logout Button when a user is not logged in.', () => {
    cy.mount(<Header />);
  });

  it.skip('Displays a Logout Button when a user is logged in.', () => {
    cy.mount(<Header />);
  });
});