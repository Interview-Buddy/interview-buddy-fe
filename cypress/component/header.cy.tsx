import { FC, ReactNode, useState } from "react";
import { AuthContext } from "../../app/auth-provider";
import Header from "@components/header";
import MockNextRouter from "../utils/router";

interface AuthProviderProps {
  isLoggedIn: boolean;
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = (props) => {
  const [uuid, setUuid] = useState<string | undefined>("");

  return (
      <AuthContext.Provider value={{
          company: "test",
          displayName: "test",
          email: "test@test.com",
          firstName: "test",
          isLoggedIn: props.isLoggedIn,
          uuid: uuid,
          lastName: "test",
          pronouns: "test",
          userType: "student",
          setUuid: setUuid,
      }}>
          {props.children}
      </AuthContext.Provider>
  )
};

describe('Header component', () => {
  it('Mounts a Header tag.', () => {
    cy.mount(<Header />);
    cy.get('header').should('be.visible');
  });

  it('Contains an h1 tag that is the name of the application. This h1 is also a link to the root URL.', () => {
    cy.mount(<Header />);
    cy.get('h1').contains('Interview Buddy').should('be.visible');
    cy.get('h1 > a').should('have.attr', 'href', '/');
  });

  it('Does not display a Logout Button when a user is not logged in.', () => {
    cy.mount(<MockNextRouter><AuthProvider isLoggedIn={false}><Header /></AuthProvider></MockNextRouter>);
    cy.get('[data-cy="log-out-button"]').should('not.exist');
  });

  it('Displays a Logout Button when a user is logged in.', () => {
    cy.mount(<MockNextRouter><AuthProvider isLoggedIn={true}><Header /></AuthProvider></MockNextRouter>);
    cy.get('[data-cy="log-out-button"]').should("be.visible");
  });

  it.skip('Should be able click Logout Button to log out', () => {
    // Utilize AuthProvider mock from above to test?
    // Basically the reverse of line 49?
  })
});