
describe('Radiobutton',()=>{

    it.skip('Radiobutton',()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
        cy.get("input[value='1'][name='newsletter']").should('be.visible')
        cy.get("input[value='1'][name='newsletter']").check().should('be.checked')
        cy.get("input[value='0'][name='newsletter']").should('not.be.checked')
        cy.get("input[value='0'][name='newsletter']").check().should('be.checked')
        cy.get("input[value='1'][name='newsletter']").should('not.be.checked')
        cy.xpath("//input[@name='agree']").should('not.be.checked')
        cy.xpath("//input[@name='agree']").check().should('be.checked')
    
    })

})

    describe('Radiobutton',()=>{

    it('Radiobutton',()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
        cy.get("input[value='Continue']").click()
        cy.xpath("//input[@name='agree']").should('not.be.checked')
        cy.get('.alert.alert-danger.alert-dismissible').should('contain', 'Warning: You must agree')
        
        cy.xpath("//input[@name='agree']").check().should('be.checked')

    })
})