/// <reference types="cypress" />

before(() => {
  cy.firebaseReset();
  cy.firebaseLogin();
});

it("User can create & delete feedback.", () => {
  const timestamp = new Date().getTime();
  const testComment = `Cypress E2E test comment ${timestamp}`;

  /** Navigate to feedback page */
  cy.visit("/");

  /** Leave feedback with dialog */
  cy.get("button[name=leave-feedback]").click();
  cy.get("button[name=rating]").click().type("{downarrow}{enter}");

  cy.get("textarea[name=description]").type(testComment);

  cy.get("button[type=submit]").click();

  /** Feedback is visible */
  cy.contains("p", testComment).should("be.visible");

  /** Can delete own comment */
  cy.get("button[name=delete]").first().click();

  /** Feedback is no longer visible */
  cy.contains("p", testComment).should("not.exist");
});
