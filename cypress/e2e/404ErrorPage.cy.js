/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Verify 404 Error Page", () => {
  let inputData;
  before(function () {
    cy.fixture("data-input").then((fixture) => {
      inputData = fixture;
    });
  });

  it("Verify 404 error page should display.", () => {
    cy.visit("/" + Cypress.env("error404Page"), { failOnStatusCode: false });
    //Assertion
    cy.title().should("eq", Cypress.env("error404PageTitle"));
  });
});
