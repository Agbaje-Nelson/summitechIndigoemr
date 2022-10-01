class SelectBranch {
 
    continueButton (){

        //return cy.get('.btn__secondary')
        return cy.contains('Continue')
    }
}
export default SelectBranch