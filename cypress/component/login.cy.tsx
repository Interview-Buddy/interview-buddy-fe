import Login from "@components/login";
import MockNextRouter from "../utils/router";

describe('login component', () => {
  it('Mounts an input with label for the user\'s email.', () => {
    cy.mount(<MockNextRouter><Login/></MockNextRouter>)
    cy.get('[data-cy="email-label"]').contains('Email')
    cy.get('[data-cy="user-email"]').type("name@test.com")
  })

  it('Mounts an input with label for the user\'s password.', () => {
    cy.mount(<MockNextRouter><Login/></MockNextRouter>)
    cy.get('[data-cy="password-label"]').contains('Password');
    cy.get('[data-cy="user-password"]').type("Op3NSezM3!!")
  })

  it('Has a button to submit the user\'s email and password.', () => {
    cy.mount(<MockNextRouter><Login/></MockNextRouter>)
    cy.get('[data-cy="signin"]').should('have.value', 'Sign In');
  })

  it.skip('Disables the submit button until the user enters a valid email address.', () => {
    // cy.mount()
  })

  it.skip('Should be able to log in', () => {
    // Mock/stub and intercept needed, or is mirroring AuthProvider setup in header.cy.tsx sufficient?
    // "Sign In" button value changes to "Loading ..." as part of this action (subject to change)
    // Buttons should be disabled
  })
})