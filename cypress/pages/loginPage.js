export class loginPage{
weblocators={
userName:"input[placeholder='Username']",
password:"input[placeholder='Password']",
loginBtn: ".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button",
HRMLogo: "img[alt='company-branding']"

}

openBrowser(){
  cy.visit(Cypress.env('URL'))
 
}

enterUserName(userName){
    cy.get(this.weblocators.userName).type(userName) 
}
 enterPassword(password){
    cy.get(this.weblocators.password).type(password)
 }

 selectLoginBtn(){
    cy.get(this.weblocators.loginBtn).click()
 }
 verifyHRMLogo(){
    cy.get(this.weblocators.HRMLogo).should('be.visible')
 }
    
}