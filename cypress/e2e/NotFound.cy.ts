import { hasOperationName, aliasQuery } from '../utils/graphql-test-utils';

describe('Not Found URL', () => {
    // It looks like this reloads the NotFound page like it does in development, so I wonder if we need to be mindful of that while testing this page. If you comment out the clicking of the Link the behavior is demonstrated.

    it.skip('Displays an error message when an invalid url path is entered and a link to redirect the user.', () => {
        cy.request({url: '/404', failOnStatusCode: false}).its('status').should('equal', 404);
        cy.visit('/404', {failOnStatusCode: false});
        cy.get('[data-cy="error-message"]').contains('There was a problem.');
        cy.get('[data-cy="error-message-description"]').contains('Sorry! We could not find the page you were looking for.');
        cy.get('[data-cy="redirect-link"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });
});