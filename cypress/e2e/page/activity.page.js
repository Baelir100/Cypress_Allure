class ActivityPage {
    
    get header(){
        return cy.get('#content h2')
        }

        headerShouldHaveText(){
            this.header.should('have.text', 'Activity')
        }

    
}

export default ActivityPage
