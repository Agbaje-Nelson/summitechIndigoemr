import userData from '../fixtures/data.json'

import DashboardPage from "../PageObject/dashboardPage";
import ScheldueAppointmentModal from "../PageObject/scheldueAppointmentModal";

const appointmentInfo = userData.appointment
const validUserData  = userData.validData

const dashboardPage = new DashboardPage();
const scheldueAppointmentModal = new ScheldueAppointmentModal() ;


describe('#INDIGO_TS01_BookAppointment - BookAppointment TestSuite', () => {
    before(()=>{
      cy.resetSession()
    }
    )
    beforeEach (()=>{
      cy.reload();
    })
  
    it('- To verify that a user can book an appoinment successfully', () => {
  
      cy.login(validUserData) ;
      cy.navigateDashboard() ;
      dashboardPage.bookAppointment();
      cy.fillAppointmentForm(appointmentInfo) ;
      scheldueAppointmentModal.bookAppointment()
        .should('be.enabled')
      ;
    })
  })
