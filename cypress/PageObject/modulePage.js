import Modules from "../Locators/modules";

const modules = new Modules();

class ModulesPage {

    selectFrontDesk () {
        return modules.frontDeskModule().click()
    }

}

export default ModulesPage