import userData from '../fixtures/data.json'
import LoginPage from '../PageObject/loginPage'
import Login from "../Locators/login";


const loginPage = new LoginPage ();
const loginLocator =  new Login();
const validUserData  = userData.validData
const invalidUserData = userData.inValidData
const inCorrectData = userData.incorrectData

describe('#INDIGO_TS01_Login - Sign in TestSuite', () => {
    before(()=>{
      cy.resetSession()
    }
    )
    beforeEach (()=>{
      cy.reload();
    })

    it('- To verify that signin fields are visible', () => {

        loginPage.navigate();
    
        loginLocator.email()
          .should('have.attr','name','email')
          .and('have.attr','placeholder','johndoe@gmail.com')
    
        loginLocator.password()
          .should('have.attr','name','password')
          .and('have.attr','placeholder','********')

        loginLocator.forgotPassword()
          .should('have.attr','href','/reset')
          .and('contain.text','Forgot Password?')
    
        loginLocator.loginButton()
          .should('contain.text',"Login")
    })

    it("- To verify that a user can not login with empty email",()=>{
    
        loginPage.enterPassword(validUserData)
        loginPage.login()
        loginPage.getErrorMessage()
          .should('contain',"Empty email address")
          cy.url().should('contain','login');
    
      })
    
      it("- To verify that a  user can not login with empty password",()=>{
        loginPage.enterEmail(validUserData)
        loginPage.login()
        loginPage.getErrorMessage()
          .should('contain',"Empty password")
          cy.url().should('contain','login');
    
      })
    
       
      it("- To verify that the email field is validated against wrong email type",()=>{
    
        loginPage.enterEmail(inCorrectData)
        loginPage.login()
        loginPage.getErrorMessage()
          .should('eql',"Email is incorrect") ;
      })
    
    
      it("- To confirm that view password eye icon displays password in clear on click",()=>{
        //hide password state
        loginLocator.password().type( validUserData.password +"{enter}");
        loginLocator.password().invoke('attr','type')
          .should('eql','password')
          
    
        //view password state
        loginPage.clickViewPassword();
        loginLocator.password().invoke('attr','type')
          .should('eql','text')
      
      })
    
      it("- To confirm that when user does not fill the login form with valid credential, invalid credential response is gotten",()=>{
        
        loginPage.enterEmail(invalidUserData)
        loginPage.enterPassword(invalidUserData)
        loginPage.login()        
        loginPage.getErrorMessage()
          .should('eql','Invalid email or password')
      }) 
     
      it('- To verify that a User can login successfully', () => {
         
        cy.login(validUserData)
          cy.url().should('contain','/select-branch')
      })
})


