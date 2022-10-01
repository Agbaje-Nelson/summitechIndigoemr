class Login {
    email () {
        return cy.get('#email') ;
    }

    password () {
        return cy.get('#password');
    }
    viewPassword(){
        return cy.get('.form__password > span');
    }

    loginButton () {
        return cy.get('.btn__secondary');
    }
    forgotPassword () {
        return cy.get('.auth__card--link');
    }
    
    errorMessage () { 
        return cy.get('.text > span')

    }
}

export default Login