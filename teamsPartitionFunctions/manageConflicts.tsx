import EmployeeType from "components/teamsPartition/EmployeeType";

export const initializeNewConflictList = (currentConflicts: number[][]):number[][] => {
    const operand = [...currentConflicts, []];

    return operand;
}

export const addNewUnprocessedConflict = (curretConflicts: [EmployeeType, EmployeeType][]):[EmployeeType, EmployeeType][] => {
    const forAppending:[EmployeeType, EmployeeType] = [
        {
            name: "",
            surname: "",
        },
        {
            name: "",
            surname: ""
        }
    ];
    const operand = [...curretConflicts, forAppending];
    return operand;
}

export const updateUnprocessedConflict = (
    currentConflict: [EmployeeType, EmployeeType][], 
    conflictIndex: number, 
    employeeIndex: number,
    newEmployeeData: EmployeeType):[EmployeeType, EmployeeType][] => {

    const operand = [...currentConflict];
    operand[conflictIndex][employeeIndex] = newEmployeeData;
    return operand;
};