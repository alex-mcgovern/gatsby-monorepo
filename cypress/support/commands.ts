/// <reference types="cypress" />

/** -----------------------------------------------------------------------------
 * Reset Firebase by clearing Firebase indexedDb
 * ------------------------------------------------------------------------------- */

Cypress.Commands.add("firebaseDeleteLocalStorageDb", async () => {
  return new Cypress.Promise((resolve) => {
    const req = indexedDB.deleteDatabase("firebaseLocalStorageDb");
    req.onsuccess = () => {
      resolve();
    };
  });
});

/** -----------------------------------------------------------------------------
 * Register account by navigating to register and completing form
 * ------------------------------------------------------------------------------- */

interface FirebaseRegisterArgs {
  email: string;
  password: string;
  name: string;
}

Cypress.Commands.add(
  "firebaseRegister",
  ({ email, password, name }: FirebaseRegisterArgs) => {
    cy.visit("/register");

    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get("button[type=submit]").click();

    cy.get("button[type=submit]").should("be.disabled");

    /** Should redirect to update profile page */
    cy.location("pathname").should("eq", "/update-profile/");

    /** Update display name */
    cy.get("input[name=displayName]").type(name);
    cy.get("button[type=submit]").click();

    /** Should redirect to home page */
    cy.location("pathname").should("eq", "/");
  }
);

/** -----------------------------------------------------------------------------
 * Login by navigating to login and completing form
 * ------------------------------------------------------------------------------- */

interface FirebaseLogInArgs {
  email: string;
  password: string;
}

Cypress.Commands.add(
  "firebaseLogIn",
  ({ email, password }: FirebaseLogInArgs) => {
    cy.visit("/login");

    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get("button[type=submit]").click();

    cy.get("button[type=submit]").should("be.disabled");
  }
);

/** -----------------------------------------------------------------------------
 * Log out using UI
 * ------------------------------------------------------------------------------- */

Cypress.Commands.add("firebaseLogOut", () => {
  cy.get("button[name=log-out]").click();
});
