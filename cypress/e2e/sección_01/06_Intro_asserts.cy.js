/// <reference types="cypress" />

describe("Introducción a los asserts", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it("Demo de los asserts", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get("#userName").should("be.visible").type("Jonathan");

    cy.get("#userEmail").should("be.visible").type("example@example.com");

    cy.get("#currentAddress")
      .should("be.visible")
      .should("be.enabled")
      .type("Mi casa de la playa");
  });
});
