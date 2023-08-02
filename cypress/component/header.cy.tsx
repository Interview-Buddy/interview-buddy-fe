import Header from "@components/header";


describe('header component', () => {
  it('Mounts with a banner message', () => {
    cy.mount(<Header />)
    cy.get('[data-cy="header"]')
    .get('[data-cy="banner"]')
    .contains('Welcome to Interview Buddy!')
  })
})