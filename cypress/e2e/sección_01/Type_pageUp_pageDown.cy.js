/// <reference types="cypress" />

describe("Ejemplo de Type pageUp, pageDown  ", () => {
  // Necesario para que nos de un error
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })
  
  it("Type pageUp ", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get('#userName').type('{pageup}')
    cy.wait(2000)
  });

  it.only("Type pageDown ", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get('#userName').type('{pagedown}')
    cy.wait(2000)
  });
});
