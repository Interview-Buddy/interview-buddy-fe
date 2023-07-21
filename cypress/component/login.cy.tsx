import Login from "@/components/login";
import { useRouter } from "next/navigation";
import MockNextRouter from "../utils/router";

describe('login component', () => {
  it('Mounts an input with label for the user\'s email.', () => {
    cy.mount(<MockNextRouter><Login/></MockNextRouter>)
    cy.get('label').contains('User Name');
  })

  it('Mounts an input with label for the user\'s password.', () => {
    // cy.mount()
  })

  it('Has a button to submit the user\'s email and password.', () => {
    // cy.mount()
  })

  it('Disables the submit button until the user enters a valid email address.', () => {
    // cy.mount()
  })
})