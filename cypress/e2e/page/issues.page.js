class IssuesPage {
    
    get header(){
        return cy.get('#content h2')
        }

        headerShouldHaveText(){
            this.header.should('have.text', 'Issues')
        }

    
}

export default IssuesPage
