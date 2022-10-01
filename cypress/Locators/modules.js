class Modules {

    frontDeskModule () {
        return cy.get(':nth-child(1) > a > .card > .details');
    }

}

export default Modules