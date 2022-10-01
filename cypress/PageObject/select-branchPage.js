import SelectBranch from "../Locators/select-branch"

const selectBranch = new SelectBranch();

class SelectBranchPage  {

    continue () {
        return selectBranch.continueButton().click()
    }

}

export default SelectBranchPage