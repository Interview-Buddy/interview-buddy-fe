import Login from "@components/login";
import { useRouter } from "next/navigation";
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

  it('Disables the submit button until the user enters a valid email address.', () => {
    // cy.mount()
  })
})