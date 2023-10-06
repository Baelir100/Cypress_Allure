class RoadmapPage {
    
    get header(){
        return cy.get('#content h2')
        }

        headerShouldHaveText(){
            this.header.should('have.text', 'Roadmap')
        }

    
}

export default RoadmapPage
