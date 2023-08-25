import { hasOperationName, aliasQuery } from '../utils/graphql-test-utils';

describe('Not Found URL', () => {
    // It looks like this reloads the NotFound page like it does in development, so I wonder if we need to be mindful of that while testing this page. If you comment out the clicking of the Link the behavior is demonstrated.

    // I believe we also will need to stub the initial useUser query in AuthProvider because it calls each time the app is Rendered.
    beforeEach(() => {
        cy.intercept('POST', "https://interview-buddy-be.onrender.com/graphql*", (req) => {
            if (hasOperationName(req, 'user')) {
                req.reply(
                    {
                        statusCode: 200,
                        body: {
                            data: {
                                user: {
                                    company: "Bob's Burgers",
                                    displayName: "Bob Belch",
                                    email: "bob@burgers.com",
                                    firstName: "Bob",
                                    lastName: "Belcher",
                                    pronouns: "he/him",
                                    userType: 0,
                                    uuid: "1a1a1a"
                                }
                            }
                        }
                    }
                )
            }
        }).as("gqluserQuery");
        cy.visit('/');
        cy.wait('@gqluserQuery');
    });

    it('Displays an error message when an invalid url path is entered and a link to redirect the user.', () => {
        cy.request({url: '/404', failOnStatusCode: false}).its('status').should('equal', 404);
        cy.visit('/404', {failOnStatusCode: false});
        cy.get('[data-cy="error-message"]').contains('There was a problem.');
        cy.get('[data-cy="error-message-description"]').contains('Sorry! We could not find the page you were looking for.');
        cy.get('[data-cy="redirect-link"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });
});