/// <reference types="cypress" />

describe("Sección 1 Validando el título  ", () => {
  it("Test Validar el título de la página ", () => {
    cy.visit("https://play2.automationcamp.ir/");
    cy.title().should("eq", "Try Testing This");

    cy.log("Ok, la función title funcionó bien");
  });
});
