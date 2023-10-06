class RepositoryPage {
    
    get header(){
        return cy.get('#content h2 a')
        }

        headerShouldHaveText(){
            this.header.should('have.text', 'root')
        }

    
}

export default RepositoryPage
