class ReviewPage {
    
    get header(){
        return cy.get('#content h2')
        }

        headerShouldHaveText(){
            this.header.should('have.text', 'Overview')
        }

    
}

export default ReviewPage
