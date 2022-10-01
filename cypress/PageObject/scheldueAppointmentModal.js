import ScheldueAppointment from "../Locators/scheldueAppointment";

const scheldueAppointment = new  ScheldueAppointment();


class ScheldueAppointmentModal{

    mrn (dataValue) {

       return scheldueAppointment.mrn().type(dataValue.MRN) ;
    }
    mrnSelection () {
        return scheldueAppointment.mrnSelection().click();
    }
    specialty () {
        return scheldueAppointment.specialty().click();
        }
    
    specialtyOption (dataValue) {
        return scheldueAppointment.specialtyOptions(dataValue.specialty).click();
    }
    
    dateOfAppointment () {
        return scheldueAppointment.dateOfAppointment().click()
    }
    pickYear (dataValue) {
        return scheldueAppointment.yearPicker().select(dataValue.year);
    }
    pickMonth (dataValue) {
        return scheldueAppointment.monthPicker().select(dataValue.month);
    }
    pickDay (dataValue) {
        return scheldueAppointment.dayPicker().contains(dataValue.day).click({force:true});
    }
    reasonForVisit () {
        return scheldueAppointment.reasonForVisit().click();
        }
    reasonForVisitOption (dataValue) {
        return scheldueAppointment.reasonForVisitOptions(dataValue.reason).click();
    }
    bookAppointment () {
        return scheldueAppointment.bookAppointment().click();
    }
}

export default ScheldueAppointmentModal