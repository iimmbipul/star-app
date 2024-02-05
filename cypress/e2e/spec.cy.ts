
/// <reference types="cypress" />
var url = "http://localhost:3000/"
describe('Character List Page', () => {
  it('loads the character list page', () => {
    cy.visit(url); 
    cy.contains('Star Wars Characters');
  });

  it('displays a list of characters', () => {
    cy.visit(url);
    cy.get('.container a').should('have.length.gt', 0); // Ensure there are characters displayed
  });

  it('navigates to character details page', () => {
    cy.visit(url);
    cy.get('.container a').first().click();
    cy.url().should('include', '/characters'); // Ensure navigation to character details page
  });
});