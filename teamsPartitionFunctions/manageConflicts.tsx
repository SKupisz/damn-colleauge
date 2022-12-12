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

export const binomial = (n: number):number => {
    let result:number = n*(n-1);
    return result/2;
}

export const isListFulfilled = (
    currentConflicts: [EmployeeType, EmployeeType][]
):boolean => currentConflicts.filter((elem: [EmployeeType, EmployeeType]) => elem[0].name === "" || elem[0].surname === "" || elem[1].name === "" || elem[1].surname === "").length === 0;

export const conflictsInputFilter = (
    currentConflicts: [EmployeeType, EmployeeType][],
    pairPosition: number,
    pairIndex: number,
    baseEmployee: EmployeeType,
    comparingEmployee?: EmployeeType,
):boolean => currentConflicts[pairPosition][pairIndex] !== baseEmployee && (comparingEmployee === undefined || (
    comparingEmployee !== undefined && currentConflicts.filter((elem: [EmployeeType, EmployeeType]) => (elem[0] === baseEmployee && elem[1] === comparingEmployee) || (elem[1] === baseEmployee && elem[0] == comparingEmployee)).length === 0
));

export const checkIfNextConflictCanBeAdded = (
    employeesList: EmployeeType[],
    currentConflicts: [EmployeeType, EmployeeType][]
):boolean => currentConflicts.length+1 <= binomial(employeesList.length) && isListFulfilled(currentConflicts);