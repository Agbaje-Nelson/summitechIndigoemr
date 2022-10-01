import Login from '../Locators/login'

const loginLocator =  new Login();

class LoginPage {

    navigate() {
        return cy.visit('login',{failOnStatusCode:false});
     }

    enterEmail(userData) {
        return loginLocator.email().clear().type(userData.email);
    }
    enterPassword(userData) {
        return loginLocator.password().clear().type(userData.password);
    }
    clickViewPassword(){
        return loginLocator.viewPassword().click();
    }
    login () {
        return loginLocator.loginButton().click();
    }

    clickForgotPassword () {
        return loginLocator.forgotPassword().click();
    }
    getErrorMessage () {
        return loginLocator.errorMessage().invoke('text');

    }
}

export default LoginPage