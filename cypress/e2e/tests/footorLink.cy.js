
describe('Test',()=>{

    it('Test',()=>{

      cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57")  
      cy.get(".dropdown-menu").should('have.length', 7)
      cy.get(".dropdown-menu").contains('Monitors').click({force: true})

    })

})