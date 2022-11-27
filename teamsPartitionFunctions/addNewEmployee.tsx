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
    return operandOfEmployees
};