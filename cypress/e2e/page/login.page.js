class LoginPage {
    
    get userNameInput(){
        return cy.get('#username')
    }

        typeNameInput(username){
            this.userNameInput.type(username)
        }

    get passwordInput(){
        return cy.get('#password')
    }

        typePasswordInput(pass){
            this.passwordInput.type(pass)
        }

    get submitInput(){
        return cy.get('input[type="submit"]')
    }

        clickSubmitInput(){
            this.submitInput.click()
        }

    get errorForValidData(){
        return cy.get('#flash_error')
    }

        errorForValidDataShouldBeVisible(){
            this.errorForValidData.should('be.visible')
        }

    
}

export default LoginPage
