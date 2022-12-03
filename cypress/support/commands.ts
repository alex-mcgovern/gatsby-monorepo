/// <reference types="cypress" />

/** -----------------------------------------------------------------------------
 * Reset Firebase by clearing Firebase indexedDb
 * ------------------------------------------------------------------------------- */

Cypress.Commands.add("firebaseReset", () => {
  return new Cypress.Promise(async (resolve) => {
    const req = indexedDB.deleteDatabase("firebaseLocalStorageDb");
    req.onsuccess = () => {
      resolve();
    };
  });
});

/** -----------------------------------------------------------------------------
 * Login to firebase by navigating to login and completing form
 * ------------------------------------------------------------------------------- */

Cypress.Commands.add("firebaseLogin", () => {
  cy.visit("/login");

  cy.get("input[name=email]").type(Cypress.env("CYPRESS_LOGIN_EMAIL"));
  cy.get("input[name=password]").type(Cypress.env("CYPRESS_LOGIN_PASSWORD"));
  cy.get("button[type=submit]").click();

  cy.get("button[type=submit]").should("be.disabled");
});
