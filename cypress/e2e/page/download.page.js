class DownloadPage {
    
    get header(){
        return cy.get('.wiki-page h1')
        }

        headerShouldHaveContain(){
            this.header.should('have.contain', 'Download')
        }

    get dowloadLink(){
        return cy.get('[href="/releases/redmine-4.2.7.zip"]')
    }

        clickDowloadLink(){
            this.dowloadLink.click()
        }

        

    
}

export default DownloadPage
