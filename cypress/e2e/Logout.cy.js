import userData from '../fixtures/data.json'

const validUserData  = userData.validData


describe('#INDIGO_TS01_Logout - Logout TestSuite', () => {
  before(()=>{
    cy.resetSession()
  }
  )
  beforeEach (()=>{
    cy.reload();
  })

  it('- To test the logout functionality works', () => {

    cy.login(validUserData) ;
    cy.navigateDashboard() ;
    cy.logout() ;
    cy.url().should('contain','login') ;
    
  })
})