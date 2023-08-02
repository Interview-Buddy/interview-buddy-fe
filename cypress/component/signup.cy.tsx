import SignUp from "@components/signup";
import { useRouter } from "next/navigation";
import MockNextRouter from "../utils/router";

describe('signup component', () => {
  const modalHandler = ():null => {
    return null
  }

  it('Mounts an input with label for the user\'s display name.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="display-name-label"]').contains('Display Name')
    cy.get('[data-cy="display-name"]').type("Display Name")
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