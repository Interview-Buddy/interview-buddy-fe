import dayjs from 'dayjs';
import { hasOperationName } from '../utils/graphql-test-utils';

describe('Dashboard Page', () => {
  beforeEach(() => {
    cy.intercept('POST', "https://interview-buddy-be.onrender.com/graphql*", (req) => {
      if (hasOperationName(req, 'user')) {
        req.reply(
          {
            statusCode: 200,
            body: {
              data: {
                user: {
                  company: "Student",
                  displayName: "Student User",
                  email: "student@student.com",
                  firstName: "Student",
                  lastName: "User",
                  pronouns: "he/him",
                  userType: "student",
                  uuid: Cypress.env('TEST_UID')
                }
              }
            }
          }
        )
      }
    }).as("gqluserQuery");
    cy.intercept('POST', "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCPsDywdGHulSwvPzOhLnT1mG7ErfrcATM").as("login");
    cy.intercept('POST', "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCPsDywdGHulSwvPzOhLnT1mG7ErfrcATM").as("loginlookup")
    
    
  });

  afterEach(() => {
    cy.logout();
  });

  it.only('When a user is logged in as a student: their name and timezone are displayed.', () => {
    cy.login();
    cy.visit('/dashboard');
    cy.wait('@login');
    cy.wait('@loginlookup');
    cy.wait('@gqluserQuery')
    cy.get('[data-cy="user-displayName"]').contains('Student User');
    cy.get('[data-cy="user-timezone"]').contains('PST 00:00');
    cy.logout();
  });

  it('When a user is logged in as a student: the user has the ability to select between behavioral or technical interviews to be displayed.', () => {
    cy.visit('/dashboard');
    cy.wait('@gqluserQuery');
    cy.get('[data-cy="interview-type-label"]').contains('Interview Type')
    cy.get('[data-cy="select-interview-type"]').select('behavioral')
    cy.get('[data-cy="select-interview-type"]').select('technical')
  });

  it('When a user is logged in as a student: the user can see a calendar where interview availability is displayed.', () => {
    cy.visit('/dashboard');
    cy.wait('@gqluserQuery');
    cy.get('.fc-dayGridMonth-view').should('be.visible');
  });

  it('When a user is logged in as a student: the user can see the current month and year which is displayed on the calendar. The user can select to view the previous month, today - current month, or next month. The month and year displayed changes accordingly.', () => {
    cy.visit('/dashboard');
    cy.wait('@gqluserQuery');
    cy.get('[data-cy="date-title"]').contains(dayjs().format("MMMM YYYY"));
    cy.get('[data-cy="prev"]').click();
    cy.get('[data-cy="date-title"]').contains(dayjs().subtract(1, 'months').format("MMMM YYYY"));
    cy.get('[data-cy="today"]').click();
    cy.get('[data-cy="date-title"]').contains(dayjs().format("MMMM YYYY"));
    cy.get('[data-cy="next"]').click();
    cy.get('[data-cy="date-title"]').contains(dayjs().add(1, 'months').format("MMMM YYYY"));
  });

  it('When a user is logged in as a student: the user can select to view the calendar as a month, week, or day.', () => {
    cy.visit('/dashboard');
    cy.wait('@gqluserQuery');
    cy.get('.fc-dayGridMonth-view').should('be.visible');
    cy.get('[data-cy="date-title"]').contains(dayjs().format("MMMM YYYY"));
    cy.get('[data-cy="select-view-type"]').select('Week');
    cy.get('.fc-timeGridWeek-view').should('be.visible');
    cy.get('[data-cy="select-view-type"]').select('Day');
    cy.get('.fc-timeGridDay-view').should('be.visible');
    cy.get('[data-cy="date-title"]').contains(dayjs().format("MMMM D, YYYY"));
    cy.get('[data-cy="select-view-type"]').select('Month');
    cy.get('.fc-dayGridMonth-view').should('be.visible');
    cy.get('[data-cy="date-title"]').contains(dayjs().format("MMMM YYYY"));
  });

  it.skip('When a user is logged in as a student: the user has the ability to select the date for when they are looking for an interview.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as a student: the user can see time slots for the selected date.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as a student: the user can select a time slot from the provided availability and confirm they would like to sign up.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as an alumni: their name and timezone are displayed.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as an alumni: the user has the ability to select the date for when the interviews are to be created.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as an alumni: the user has the ability to select between behavioral or technical interviews as the type of interviews created.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as an alumni: the user has the ability to select the length of the interviews created.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as an alumni: the user has the ability to select the availability in which they are open for interviews.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as an alumni: the user can see a calendar where their interview availability is displayed.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as an alumni: the user can only select to find times when all parameters are input.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as an alumni: when the user selects to find times, a list of possible interview time slots are displayed.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as an alumni: the user can select from the generated time slots and confirm those times to be created.', () => {
    cy.visit('/dashboard')
  });

  it.skip('When a user is logged in as an alumni: the user can clear the parameters for creating interview slots. The clear parameters button is only enabled when any of the parameters has a value.', () => {
    cy.visit('/dashboard')
  });
});