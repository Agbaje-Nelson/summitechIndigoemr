class Dashboard {

    sidebar () {
        return cy.get ('.navigation-sidebar') ;
    }

    profile () {
        return cy.get('.avatar-text');

    }

    logout () {
       return cy.contains('Logout');
    }

    bookAppointment () {
        return cy.get('.btn__utility');
    }

}

export default Dashboard