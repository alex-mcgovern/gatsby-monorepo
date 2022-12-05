/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    firebaseDeleteLocalStorageDb(): void;
    firebaseRegister({ email, password, name }): void;
    firebaseLogIn({ email, password }): void;
    firebaseLogOut(): void;
  }
}
