class SearchResultPage {
    
    get header(){
        return cy.get('#content h2')
        }

        headerShouldHaveContain(searchData){
            this.header.should('have.contain', searchData)
        }

    
}

export default SearchResultPage
