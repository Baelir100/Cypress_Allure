class NewsPage {
    
    get header(){
        return cy.get('#content h2:nth-child(3)')
        }

        headerShouldHaveText(){
            this.header.should('have.text', 'News')
        }

    
}

export default NewsPage
