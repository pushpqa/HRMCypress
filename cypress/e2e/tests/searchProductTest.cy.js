import { DashboardPage } from '../../pages/DashboardPage'
const dashboardOBJ = new DashboardPage
import { searchResultPage } from '../../pages/searchResultPage'
const searchResultOBJ = new searchResultPage
import loginDataNaveen from '../../fixtures/loginDataNaveen.json'
describe('loginNaveen', () => {

    before (()=> {
        cy.searchProduct(loginDataNaveen.userName, loginDataNaveen.password)

    })

    it('searchProduct',()=>{
        dashboardOBJ.verifyMyAccountText();
        dashboardOBJ.searchProduct(loginDataNaveen.product);
        dashboardOBJ.clickOnSearchIcon();
        searchResultOBJ.verifySearchText();
        cy.get(".dropdown-toggle[href='https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34']").click();
        cy.get("a[href='https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34_43']").click();
        cy.go('back');
        cy.get(".dropdown-toggle[href='https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25']").click();
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li.dropdown.open > div > div > ul > li:nth-child(2) > a').click()
        cy.get("#content > div:nth-child(5) > div:nth-child(1) > div > div.image > a > img").click()
        cy.get('h1').then((x)=>{
            let actualText = x.text()
            let expectedText = 'Apple Cinema 30"'
            assert.equal(actualText,expectedText)
        })
        // const TotalProduct = cy.xpath("//li//a[1]//img[1]")
        // TotalProduct.should('have.length, 6')
        cy.get("li:nth-child(2) a:nth-child(1) img:nth-child(1)").click()
    

    })  

})
