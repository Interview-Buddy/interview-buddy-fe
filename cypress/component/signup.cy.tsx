import SignUp from "@components/signup";
import { useRouter } from "next/navigation";
import MockNextRouter from "../utils/router";

describe('signup component', () => {
  const modalHandler = ():null => {
    return null
  }

  it('Mounts an input with label for the user\'s first name.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="first-name-label"]').contains('First Name')
    cy.get('[data-cy="first-name"]').type("Leroy")
  })

  it('Mounts an input with label for the user\'s last name.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="last-name-label"]').contains('Last Name')
    cy.get('[data-cy="last-name"]').type("Jenkins")
  })

  it('Mounts an input with label for the user\'s email.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="email-label"]').contains('Email')
    cy.get('[data-cy="email"]').type("name@test.com")
  })

  it('Mounts an input with label for the user\'s password.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="password-label"]').contains('Password')
    cy.get('[data-cy="password"]').type("SuP3rS3cr3tPassw0rd!")
  })

  it('Mounts an input with label for the user\'s password confirmation.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="confirm-password-label"]').contains('Confirm Password')
    cy.get('[data-cy="confirm-password"]').type("SuP3rS3cr3tPassw0rd!")
  })

  it('Mounts an input with label for the user\'s user type selection.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="user-type-label"]').contains('User Type')
    cy.get('[data-cy="select"]').select('student')
    cy.get('[data-cy="select"]').select('alum')
  })
})