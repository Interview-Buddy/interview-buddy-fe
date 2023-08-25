import SignUp from "@components/signup";
import MockNextRouter from "../utils/router";
import QueryProvider from "../../app/query-provider";

describe('signup component', () => {
  const modalHandler = ():null => {
    return null
  }
  beforeEach(() => {
    cy.mount(
      <QueryProvider>
        <MockNextRouter>
          <SignUp modalHandler={modalHandler}/>
        </MockNextRouter>
      </QueryProvider>
    )
  })

  it('Mounts an input with label for the user\'s first name.', () => {
    cy.get('[data-cy="first-name-label"]').contains('First Name')
    cy.get('[data-cy="first-name"]').type("Leroy")
  })

  it('Mounts an input with label for the user\'s last name.', () => {
    cy.get('[data-cy="last-name-label"]').contains('Last Name')
    cy.get('[data-cy="last-name"]').type("Jenkins")
  })

  it('Mounts an input with label for the user\'s email.', () => {
    cy.get('[data-cy="email-label"]').contains('Email')
    cy.get('[data-cy="email"]').type("name@test.com")
  })

  it('Mounts an input with label for the user\'s password.', () => {
    cy.get('[data-cy="password-label"]').contains('Password')
    cy.get('[data-cy="password"]').type("SuP3rS3cr3tPassw0rd!")
  })

  it('Mounts an input with label for the user\'s password confirmation.', () => {
    cy.get('[data-cy="confirm-password-label"]').contains('Confirm Password')
    cy.get('[data-cy="confirm-password"]').type("SuP3rS3cr3tPassw0rd!")
  })

  it('Mounts an input with label for the user\'s user type selection.', () => {
    cy.get('[data-cy="user-type-label"]').contains('User Type')
    cy.get('[data-cy="select"]').select('student')
    cy.get('[data-cy="select"]').select('alum')
  })

  it('Displays a message when a password match is detected', () => {
    cy.get('[data-cy="password"]').type("SuP3rS3cr3tPassw0rd!")
    cy.get('[data-cy="confirm-password"]').type("SuP3rS3cr3tPassw0rd!")
    cy.get('[data-cy="password-match-message"]').should('have.text', 'Password matches!')
  })

  it('Displays a message when a password mismatch is detected', () => {
    cy.get('[data-cy="password"]').type("00psT#!$Passw0rd")
    cy.get('[data-cy="confirm-password"]').type("D0e$N0tM4tc#")
    cy.get('[data-cy="password-match-message"]').should('have.text', 'Password does not match')
  })
})
