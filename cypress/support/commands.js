// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from '../PageObject/loginPage.js'
import ModulesPage from '../PageObject/modulePage.js';
import SelectBranchPage from '../PageObject/select-branchPage.js';
import DashboardPage from '../PageObject/dashboardPage.js';
import ScheldueAppointmentModal from "../PageObject/scheldueAppointmentModal";



const loginPage = new LoginPage ();
const selectBranchPage = new SelectBranchPage();
const modulePage = new ModulesPage();
const dashboardPage = new DashboardPage();
const scheldueAppointmentModal = new ScheldueAppointmentModal() ;




Cypress.Commands.add ('resetSession', () => {
    sessionStorage.clear()
    cy.clearLocalStorage()
    cy.clearCookies()
    })

Cypress.Commands.add ('login', (userData) => {

    loginPage.navigate() ;
    loginPage.enterEmail(userData) ;
    loginPage.enterPassword(userData) ;
    loginPage.login() ;

    })

Cypress.Commands.add ('logout', () => {

    dashboardPage.hoverSidebar();
    dashboardPage.viewProfile();
    dashboardPage.logout();
    })

Cypress.Commands.add ('navigateDashboard', () => {

    selectBranchPage.continue() ;
    cy.wait(3000)
    modulePage.selectFrontDesk();

    })

Cypress.Commands.add ('fillAppointmentForm', (appointmentInfo) => {

    scheldueAppointmentModal.mrn(appointmentInfo);
    scheldueAppointmentModal.mrnSelection();
    scheldueAppointmentModal.specialty();
    scheldueAppointmentModal.specialtyOption(appointmentInfo);
    scheldueAppointmentModal.dateOfAppointment();
    cy.pickDate(appointmentInfo);
    scheldueAppointmentModal.reasonForVisit();
    scheldueAppointmentModal.reasonForVisitOption(appointmentInfo);


    })



Cypress.Commands.add ('pickDate', (appointmentInfo) => {

   
    scheldueAppointmentModal.pickMonth(appointmentInfo);
    scheldueAppointmentModal.pickYear(appointmentInfo);
    scheldueAppointmentModal.pickDay(appointmentInfo);

    })