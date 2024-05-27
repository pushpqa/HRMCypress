describe('Test',()=>{

    it('Test',()=>{

        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
        // cy.title().should('contain','Google')
        // cy.title().should('eq','Google')
        cy.url().should('contain','google.com').and('eq', 'https://www.google.com/').and('include','www.google')
        cy.xpath("//textarea[@id='APjFqb']").type('macbook')
        cy.xpath("//div[@id='Alh6id']//li").should('have.length',10)
        cy.get('#hplogo').should('be.visible')

        cy.xpath("//textarea[@id='APjFqb']").clear().type('macbook')

        cy.wait(3000)

       // cy.xpath("//div[@id='Alh6id']//li").contains('MacBook Air').click() //Static options to select the text

        cy.xpath("//div[@id='Alh6id']//li").each(($el, index, $list)=>{  // dynamic options to select
           // cy.log($el.text)
            if($el.text()=='MacBook'){
                cy.wrap($el).click()
            }

        })
        

    })
})