import SignUp from "@/components/signup";
import { useRouter } from "next/navigation";
import MockNextRouter from "../utils/router";
import { useState, MouseEvent } from "react";


describe('signup component', () => {
  const [modalShow, setModalShow] = useState(false);
  const modalHandler = (e: MouseEvent<HTMLButtonElement>):void => {
    e.preventDefault()
    setModalShow(!modalShow)
  }

  it('Mounts an input with label for the user\'s display name.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="display-name-label"]').contains('Display Name')
  })

  it('Mounts an input with label for the user\'s email.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="email-label"]').contains('Email')
  })

  it('Mounts an input with label for the user\'s password.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="password-label"]').contains('Password')
  })

  it('Mounts an input with label for the user\'s password confirmation.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="confirm-password-label"]').contains('Confirm Password')
  })

  it('Mounts an input with label for the user\'s user type selection.', () => {
    cy.mount(<MockNextRouter><SignUp modalHandler={modalHandler}/></MockNextRouter>)
    cy.get('[data-cy="user-type-label"]').contains('User Type')
  })
})