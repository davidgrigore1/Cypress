/// <reference types="cypress" />

describe ('My First Test Suite', function(){
    it('My First Test Case', function() {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product:visible').should('have.length',4)

    

})

})