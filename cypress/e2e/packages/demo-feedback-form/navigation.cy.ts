/// <reference types="cypress" />

describe("All routes respond with a 200", () => {
  it("Navigates to home page.", () => {
    cy.visit("/");
  });

  it("Navigates to login page.", () => {
    cy.visit("/login");
  });

  it("Navigates to register page.", () => {
    cy.visit("/register");
  });
});
