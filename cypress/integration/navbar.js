/// <reference types="Cypress" />

describe('Navbar', () => {
    
    it('User can see a navbar', () => {
        cy.visit('https://localhost:3000')
        cy.contains('Shop')
        cy.contains('My Cart')
    })
})
