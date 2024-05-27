export class searchResultPage{

    weblocators={
        searchText: "div[id='content'] h1"
    }

    verifySearchText(){
        cy.get(this.weblocators.searchText).should('be.visible')
    }

}