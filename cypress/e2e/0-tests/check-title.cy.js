/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://docs.cypress.io/api/commands/title')
  })

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Documentation')
  })
})
