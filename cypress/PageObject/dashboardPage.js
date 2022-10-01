import Dashboard from "../Locators/dashboard";

const dashboard = new Dashboard();

class DashboardPage {

    bookAppointment () {
        return dashboard.bookAppointment().click();
    }
    hoverSidebar () {
        return dashboard.sidebar().invoke('mouseover').then(()=>{
            dashboard.profile().invoke('mouseover').click();
        })
    }

    viewProfile () {
        return dashboard.profile().invoke('mouseover').click();
    }

    logout () {
        return dashboard.logout().click();
    }
}

export default DashboardPage