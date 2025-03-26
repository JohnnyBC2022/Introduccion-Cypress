/// <reference types="cypress" />

describe("Funciones para type", () => {
  it("Type --> enter ", () => {
    cy.visit("https://www.google.es/");
    cy.title().should("eq", "Google");
    cy.wait(1500);
    cy.get('[name="q"]').type("cypress io {enter}");
    cy.wait(1000);
    cy.get(
      "#rso > div.hlcw0c > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div > span > a > h3"
    ).click();
  });
});
