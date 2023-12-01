import { counter, positive, negative } from './buttons.fixture';

describe('Simple React Counter tests', () => {
 
  beforeEach(() => {
    cy.visit("/")
    cy.contains('React Simple Counter').should('be.visible') 
    cy.get(counter).should('be.visible').should('have.text', '0');
    cy.get('.counter:eq(0) .btn').contains('+').should('be.visible'); 
    cy.get('.counter:eq(0) .btn').contains('-').should('be.visible'); 
}),    

  it(' Increase Number', () => {

    cy.get('.counter:eq(0) .btn').contains('+').click();
    cy.get(counter).should('have.text', '1');
    cy.get(counter).should('have.class', positive);
   
  }),

  it('Decrease number', () => {
  
    cy.get('.counter:eq(0) .btn').contains('-').click();
    cy.get(counter).should('have.text', '-1');
    cy.get(counter).should('have.class', negative);
    
  }),
  
  it('Should handle multiple operations and color changes', () => {

    cy.get('.counter:eq(0) .btn').contains('-').click().click();
    cy.get(counter).should('have.text', '-2')
    cy.get(counter).should('have.class', negative);
    cy.get('.counter:eq(0) .btn').contains('+').click().click();
    cy.get(counter).should('have.text', '0');
    cy.get(counter).should('have.class', positive);
  }) 
  
  
  })

  
  
  