
describe('Alerts',()=>{

    it('Alerts 1, Smoke', {tags:'@Regression'},()=>{

        // Normal alert

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert', (t)=>{

            expect(t).contains('I am a JS Alert')
        })

        cy.get("#result").should('contain', 'You successfully clicked an alert') 

        //TDD assertion
        //     cy.get("#result").then((x)=>{

        //        let actMsg = x.text()
        //        let expMsg = 'You successfully clicked an alert'
        //        assert.equal(actMsg, expMsg)
            
        // })

    })

    // javaScript confirm alert : with text 'ok' and 'Cancel' options

    it('Alerts Confirm', {tags:['@Smoke','@Regression']},()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm', (t)=>{

        expect(t).contains('I am a JS Confirm')
        cy.on('window:alert',()=>"false")
    })

    cy.get('#result').should('contain', 'You clicked: Ok')

})

})