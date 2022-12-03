/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    firebaseReset(): void;
    firebaseLogin(): void;
  }
}
