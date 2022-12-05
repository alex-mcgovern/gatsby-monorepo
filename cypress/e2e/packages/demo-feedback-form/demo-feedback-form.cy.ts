/// <reference types="cypress" />

const TIMESTAMP = new Date().getTime();
const EMAIL = `${TIMESTAMP}@test.com`;
const TEST_COMMENT = `Cypress E2E test comment ${TIMESTAMP}`;

/**
 * Clear auth state from previous test runs
 */
before(() => {
  cy.firebaseDeleteLocalStorageDb();
});

describe("Feedback form works E2E", () => {
  it("(Smoke test) User can navigate to all important routes ", () => {
    cy.visit("/");

    cy.visit("/login");

    cy.visit("/register");
  });

  it("User can register/log out/log in", () => {
    cy.firebaseRegister({ email: EMAIL, password: TIMESTAMP, name: TIMESTAMP });

    cy.firebaseLogOut();

    cy.firebaseLogIn({ email: EMAIL, password: TIMESTAMP });
  });

  it("User can create & delete feedback.", () => {
    /** Navigate to feedback page */
    cy.visit("/");

    /** Leave feedback with dialog */
    cy.get("button[name=leave-feedback]").click();

    /** Use slider */
    cy.get("span[role=slider]").click().type("{rightarrow}{enter}");

    /** Type comment */
    cy.get("textarea[name=description]").type(TEST_COMMENT);

    /** Submit comment */
    cy.get("button[type=submit]").click();

    /** Feedback is visible */
    cy.contains("p", TEST_COMMENT).should("be.visible");

    /** Can delete own comment */
    cy.get("button[name=delete]").first().click();

    /** Feedback is no longer present */
    cy.contains("p", TEST_COMMENT).should("not.exist");
  });
});
