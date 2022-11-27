import EmployeeType from "components/teamsPartition/EmployeeType";

export const initializeNewEmployee = (employees: EmployeeType[]) : EmployeeType[] => {
    const newEmployee:EmployeeType = {
        name: "",
        surname: ""
    }

    const newEmployeesArr = [...employees, newEmployee];
    return newEmployeesArr;
}

export const modifyCurrentEmployee = (employees: EmployeeType[], modifiedEmployeeID: number, newName: string, newSurname: string) : EmployeeType[] => {
    
    const operandOfEmployees = [...employees];
    
    if(modifiedEmployeeID >= 0 && modifiedEmployeeID < employees.length){

        const newEmployeeData:EmployeeType = {
            name: newName,
            surname: newSurname
        };

        operandOfEmployees[modifiedEmployeeID] = newEmployeeData;
    }
    return operandOfEmployees;
};

export const deleteGivenEmployee = (employees: EmployeeType[], deletedEmployeeID: number) : EmployeeType[] => {
    const operandOfEmployees = [...employees];

    if(deletedEmployeeID >= 0 && deletedEmployeeID <= employees.length){
        operandOfEmployees.splice(deletedEmployeeID, 1);
    }

    return operandOfEmployees;

}