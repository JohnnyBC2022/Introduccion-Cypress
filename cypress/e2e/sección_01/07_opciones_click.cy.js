/// <reference types="cypress" />

describe("Opciones de click  ", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it("Click sencillo", () => {
    cy.visit("https://demoqa.com/buttons");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get('button[type="button"]')
      .should("be.visible")
      .eq(3)
      .click();
  });
});
