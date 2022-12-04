/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    firebaseDeleteLocalStorageDb(): void;
    firebaseRegister({ email, password }): void;
    firebaseLogIn({ email, password }): void;
    firebaseLogOut(): void;
  }
}
