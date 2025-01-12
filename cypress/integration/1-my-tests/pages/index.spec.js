/// <reference types="cypress" />

let TOTAL_USERS = 10;

describe("Test de endpoints", () => {
  it("Endpoint to check index title", () => {
    cy.visit("/");
    cy.title().should("eq", "Javier Tomás Tormo - Portfolio");
  });
});
