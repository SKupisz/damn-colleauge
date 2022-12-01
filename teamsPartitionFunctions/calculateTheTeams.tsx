import EmployeeType from "components/teamsPartition/EmployeeType";

const calculateNewTeams = (employeesList: EmployeeType[], conflictTypes: number[][]):EmployeeType[][] => {
    const finalTeams:EmployeeType[][] = [];

    let globalInd:number = 0;//, localInd:number = 0;

    const haveATeam:boolean[] = [];

    const conflictTypesOperand:number[][] = [...conflictTypes];

    for(let i:number = 0 ; i < employeesList.length; i++) haveATeam.push(false);

    while(globalInd < employeesList.length){
        if(haveATeam[globalInd]){
            globalInd++;
        }
        else{
            //localInd = globalInd;
            const newEmployees:EmployeeType[] = [employeesList[globalInd]];
            const newEmployeesInds:[number, boolean][] = [[globalInd, true]]; // [index, isQualified for the Team]
            for(let i:number = globalInd+1; i < employeesList.length; i++){
                if(haveATeam[i] === false && conflictTypes[i].filter((elem: number) => elem === globalInd).length === 0){
                    newEmployees.push(employeesList[i]);
                    newEmployeesInds.push([i, true]);
                }
            }
            for(let i = 1; i < newEmployeesInds.length - 1; i++){
                if(newEmployeesInds[i][1]){
                    for(let j = i+1; j < newEmployeesInds.length; j++){
                        if(conflictTypes[newEmployeesInds[j][0]].indexOf(newEmployeesInds[i][0]) !== -1){
                            newEmployeesInds[j][1] = false;
                            break;
                        }
                    }
                }
            }
            for(let i = 0 ; i < newEmployeesInds.length; i++){
                if(newEmployeesInds[i][1]){
                    haveATeam[newEmployeesInds[i][0]] = true;
                }
            }
            finalTeams.push(newEmployees.filter((elem: EmployeeType, index: number) => 
            newEmployeesInds[index][1] === true));
            globalInd++;
        }
    }

    return finalTeams;
}

export default calculateNewTeams;