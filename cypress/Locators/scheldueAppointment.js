class ScheldueAppointment {

    mrn () {
        return cy.get('#mrn');
    }
    mrnSelection() {
        return cy.get('.suggestion') ;

    }
    name () {
        return cy.get('#name');
    }
    prefferedBranch () {
        return cy.get(':nth-child(3) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container');

    }
    specialty () {
        return cy.get(':nth-child(4) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container');
    }
 
    specialtyOptions (optionID) {
        return cy.get ('.modal-select__menu-list > :nth-child('+optionID+')')        
    }
    reasonForVisit () {
        return cy.get(':nth-child(8) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container');
    }
    reasonForVisitOptions (optionID) {
        return cy.get ('.modal-select__menu-list > :nth-child('+optionID+')')
    }
    dateOfAppointment () {
        return cy.get('.DayPickerInput > input');
    }
    monthPicker () {
        return cy.get ('[name=month]');
    }
    yearPicker () {
        return cy.get ('[name=year]')
    }
    dayPicker () {
        return cy.get ('.DayPicker-Body')
    }
    bookAppointment () {
        return cy.get('.form__settings-button > .btn__secondary')
    }
    closeBookAppointment () {
        return cy.get('.feather')
    }
}

export default ScheldueAppointment