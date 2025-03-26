/// <reference types="cypress" />

describe("Primer test con Cypress", () => {
  it("Esto es un hola mundo desde Cypress", () => {
    cy.log("Hola, bienvenido a Cypress");
    cy.visit("https://play2.automationcamp.ir/");

    cy.wait(2000);
    cy.get("#fname").type("Jonathan");
    cy.get("#lname").type("Cypress");
  });
});
