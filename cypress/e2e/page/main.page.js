class MainPage {
    
    get review(){
        return cy.get('[href="/projects/redmine"]')
        }

        clickReviewLink(){
            this.review.click()
        }
    
    get download(){
        return cy.get('.download')
    }

        clickDownloadLink(){
            this.download.click()
        }

    get activity(){
        return cy.get('.activity')
    }

        clickActivityLink(){
            this.activity.click()
        }

    get roadmap(){
        return cy.get('.roadmap')
    }

        clickRoadmapLink(){
            this.roadmap.click()
        }

    get issues(){
        return cy.get('.issues')
    }

        clickIssuesLink(){
            this.issues.click()
        }

    get news(){
        return cy.get('.news')
    }

        clickNewsLink(){
            this.news.click()
        }

    get wiki(){
        return cy.get('[href="/projects/redmine/wiki"]')
    }
    
        clickWikiLink(){
            this.wiki.click()
        }

    get header(){
        return cy.get('#content h1')
        }

        headerShouldHaveContain(){
            this.header.should('have.contain', 'Redmine')
        }

    get boards(){
        return cy.get('.boards')
    }
        
        clickBoardsLink(){
            this.boards.click()
        }

    get repository(){
        return cy.get('.repository')
    }
        
        clickRepositoryLink(){
            this.repository.click()
        }

    get searchInput(){
        return cy.get('#q')
    }

        typeSearchInput(searchData){
            this.searchInput.type(searchData)
        }

        searchInputShouldHaveValue(searchData){
            this.searchInput.should('have.value', searchData)
        }

        searchInputPressEnterKey(){
            this.searchInput.type('{enter}')
        }

    get registrationLink(){
        return cy.get('.register')
    }

        clickRegistrationLink(){
            this.registrationLink.click()
        }

    get loginLink(){
        return cy.get('.login')
    }

        clickLoginLink(){
            this.loginLink.click()
        }
    
}

export default MainPage
