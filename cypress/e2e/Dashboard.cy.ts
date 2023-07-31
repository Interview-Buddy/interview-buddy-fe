describe('Dashboard Page', () => {
    it('Visits the Dashboard Page when a user is logged in.', () => {
      cy.visit('/dashboard');
    });

    it('When a user is logged in as a student: their name and timezone are displayed.', () => {
      cy.visit('/dashboard');
      cy.get('[data-cy="user-displayName"]').contains('Mock Student');
      cy.get('[data-cy="user-timezone').contains('PST 00:00');
    });

    it('When a user is logged in as a student: the user has the ability to select between behavioral or technical interviews to be displayed.', () => {
      cy.visit('/dashboard');
      cy.get('[data-cy="interview-type-label"]').contains('Interview Type')
      cy.get('[data-cy="select"]').select('behavioral')
      cy.get('[data-cy="select"]').select('technical')
    });

    it.skip('When a user is logged in as a student: the user can see a calendar where interview availability is displayed.', () => {
      cy.visit('/dashboard')
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