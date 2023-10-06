class BoardsPage {
    
    get header(){
        return cy.get('#content h2')
        }

        headerShouldHaveText(){
            this.header.should('have.text', 'Forums')
        }

    get firstItemInTable(){
        return cy.get('tr:first-child td:first-child a')
    }

        clickFirstItemInTable(){
            this.firstItemInTable.click()
        }

        notNullNameOfBoard(){
            this.header.should('not.have.value', ' ')         
        }
}

export default BoardsPage
