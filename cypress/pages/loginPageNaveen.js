export class loginPageNaveen{
weblocators={
userName:"#input-email",
password:"#input-password",
loginBtn: "input[value='Login']",
NaveenLogo: "img[title='naveenopencart']"

}

openBrowser(){
    cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
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
 verifyNaveenLogo(){
    cy.get(this.weblocators.NaveenLogo).should('be.visible')
 }
    
}