/// <reference types="cypress" />

before(() => {
  cy.firebaseReset();
});

it("User can login.", () => {
  cy.firebaseLogin();
});
