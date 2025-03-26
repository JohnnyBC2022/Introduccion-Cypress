/// <reference types="cypress" />

require("cypress-plugin-tab");

describe("Ejemplo funcion Tab", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it("Type con Tab ", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get("#userName")
      .type("Jonathan BC")
      .tab()
      .type("example@example.com")
      .tab()
      .type("Mi casa, teléfono");
    cy.wait(2000);
  });
});
