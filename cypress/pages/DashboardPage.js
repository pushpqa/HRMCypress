export class DashboardPage{
weblocators={
myAccountText:"h2:nth-child(1)",
searchBox:"input[placeholder='Search']",
searchIcon: "button[class='btn btn-default btn-lg']",
cartBox: ".btn.btn-inverse.btn-block.btn-lg.dropdown-toggle"

}


searchProduct(product){
    cy.get(this.weblocators.searchBox).type(product) 
}

 clickOnSearchIcon(){
    cy.get(this.weblocators.searchIcon).click()
 }
 verifyMyAccountText(){
    cy.get(this.weblocators.myAccountText).should('be.visible')
 }
    
}