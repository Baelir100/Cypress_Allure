class RegistrationPage {
    
    get submitInput(){
        return cy.get('input[type="submit"]')
    }

        clickSubmitInput(){
            this.submitInput.click()
        }

    get errorForm(){
        return cy.get('#errorExplanation')
    }

        errorFormShouldBeVisible(){
            this.errorForm.should('be.visible')
        }

    
}

export default RegistrationPage
