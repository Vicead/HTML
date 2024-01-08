/* eslint-disable no-undef */
describe('recipe project', () => {
  it('login', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', '/')
    cy.get('[data-test="loginHeader"]').contains("<Clarusway/>").should('be.visible')
    cy.get('[data-test="loginName"]').should('be.visible').type("asp")
    cy.get('[data-test="loginPassword"]').should('be.visible').type("Clarusway7")
    cy.get('[data-test="loginSbmt"]').should('be.visible').click({force: true})
    cy.url().should('include', '/home')
  })
 
})