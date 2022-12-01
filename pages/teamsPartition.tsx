import React, {useEffect, useState} from "react";
import Head from "next/head";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import EmployeeType from "components/teamsPartition/EmployeeType";

import { TeamsPartitionHeader, TeamsPartitioningCard, 
    TeamsPartitioningHeader, TeamsPartitioningEmployeesContainer, TeamsPartitioningNextPhaseButton} from "styled/teamsPartition/teamsPartition";
import { TeamsPartitioningEmployeeCard, 
    TeamsPartitioningEmployeeCardHeader, TeamsPartitioningAddEmployeeButton, TeamsPartitioningEmployeeInput, TeamsPartitioningEmployeeInputsContainer } from "styled/teamsPartition/teamsPartitionEmployeeCard";

import { TeamsPartitioningConflictCard, TeamsPartitioningConflictHeader, TeamsPartitioningConflictUsersList, TeamsPartitioningConflictUsersListWrapper } from "styled/teamsPartition/teamsPartitionConflictCard";
import { addNewUnprocessedConflict, checkIfNextConflictCanBeAdded, initializeNewConflictList, isListFulfilled, updateUnprocessedConflict } from "teamsPartitionFunctions/manageConflicts";

import {deleteGivenEmployee, initializeNewEmployee, modifyCurrentEmployee} from "teamsPartitionFunctions/manageEmployee";
import calculateNewTeams from "teamsPartitionFunctions/calculateTheTeams";

const TeamsPartition:React.FC = () => {

    const [employeesList, setEmployeesList] = useState<EmployeeType[]>([{
        name: "alfa",
        surname: "alfa2",
    }, {
        name: "beta",
        surname: "beta2",
    }, {
        name: "gamma",
        surname: "gamma2",
    }]);

    const [employeesConflicts, setEmployeesConflicts] = useState<number[][]>([[],[],[]]);
    const [unprocessedConflicts, setUnprocessedConflicts] = useState<[EmployeeType, EmployeeType][]>([]);
    const [calcultedTeams, setCalculatedTeams] = useState<EmployeeType[][]>([]);

    const [isAddingOrBondsPhaseAvailable, toggleIsAddingOrBondsPhaseAvailable] = useState<boolean>(false);
    const [phase, setPhase] = useState<number>(0);

    const addEmptyEmployee = ():void => {
        const newList:EmployeeType[] = initializeNewEmployee(employeesList);
        const newConflictList:number[][] = initializeNewConflictList(employeesConflicts);
        setEmployeesList(newList);
        setEmployeesConflicts(newConflictList);
    };

    const updateAnEmployee = (ind: number, name: string, surname: string):void => {
        const newList:EmployeeType[] = modifyCurrentEmployee(employeesList, ind, name, surname);
        setEmployeesList(newList);
    }

    const deleteAnEmployee = (ind: number):void => {
        const newList:EmployeeType[] = deleteGivenEmployee(employeesList, ind);
        setEmployeesList(newList)
    }

    const addEmptyConflict = (): void => {
        const newList:[EmployeeType, EmployeeType][] = addNewUnprocessedConflict(unprocessedConflicts);
        setUnprocessedConflicts(newList);
    }

    const modifyAConflict = (globalIndex: number, localIndex: number, employeeData: string):void => {
        const employee:EmployeeType = employeesList.filter((elem: EmployeeType) => elem.name + " " +elem.surname === employeeData)[0];
        const newList:[EmployeeType, EmployeeType][] = updateUnprocessedConflict(unprocessedConflicts, globalIndex, localIndex, employee);
        setUnprocessedConflicts(newList);
    }

    const goToNextPhase = ():void => {
        const newPhase = phase +1;
        setPhase(newPhase);
    }

    useEffect(() => {
        const newState:boolean = employeesList.length === 0 || !(employeesList.length > 0 && (
            employeesList.filter((elem: EmployeeType) => elem.name.trim() === "" || elem.surname.trim() === "").length > 0
         ));
        toggleIsAddingOrBondsPhaseAvailable(newState);
    }, [employeesList]);

    useEffect(() => {
        const operand:number[][] = [...employeesConflicts];
        unprocessedConflicts.forEach((elem: [EmployeeType, EmployeeType]) => {
            const ind1:number = employeesList.indexOf(elem[0]), ind2:number = employeesList.indexOf(elem[1]);
            if(ind1 !== -1 && ind2 !== -1){
                operand[ind1] = [...operand[ind1], ind2];
                operand[ind2] = [...operand[ind2], ind1];
            }
        });

        setEmployeesConflicts(operand);
    }, [unprocessedConflicts]);

    useEffect(() => {
        if(phase === 2){
            const teams:EmployeeType[][] = calculateNewTeams(employeesList, employeesConflicts);
            console.log(teams);
            setCalculatedTeams(teams);
        }
    }, [phase]);

    return <>
        <Head>
            <title>Calculating teams - damn colleauge</title>
        </Head>
        <TeamsPartitionHeader className="block-center">
            Teams partitioning
        </TeamsPartitionHeader>
        <TeamsPartitioningCard className="block-center">
            <TeamsPartitioningHeader className="block-center">
                {phase === 0 ? "Team members" : "Team conflicts"}
            </TeamsPartitioningHeader>
            {phase === 0 ? <TeamsPartitioningEmployeesContainer className="block-center">
                {
                    employeesList.map((employee: EmployeeType, index: number) => <TeamsPartitioningEmployeeCard style={{
                        backgroundColor: index % 2 === 0 ? "rgba(50,50,50,.6)" : "rgba(40,40,40,.6)"
                    }}>
                        <TeamsPartitioningEmployeeCardHeader className="block-center">
                            Employee {index+1}
                        </TeamsPartitioningEmployeeCardHeader>
                        <TeamsPartitioningEmployeeInputsContainer className="block-center">
                            <TeamsPartitioningEmployeeInput type="text" placeholder="Name..."
                                value={employee.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                    updateAnEmployee(index, e.currentTarget.value, employee.surname)}/>
                            <TeamsPartitioningEmployeeInput type="text" placeholder="Surname..."
                                value={employee.surname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                    updateAnEmployee(index, employee.name, e.currentTarget.value)} />
                        </TeamsPartitioningEmployeeInputsContainer>
                        <TeamsPartitioningAddEmployeeButton className="block-center">
                            <DeleteForeverIcon 
                                style={{ color: "inherit", fontSize: "inherit" }}
                                onClick={() => deleteAnEmployee(index)}
                            />
                        </TeamsPartitioningAddEmployeeButton>
                    </TeamsPartitioningEmployeeCard>)
                }
                {
                    !isAddingOrBondsPhaseAvailable ?
                    null : <TeamsPartitioningEmployeeCard style={{
                        backgroundColor: "rgba(40,40,40,.6)"
                    }}>
                    <TeamsPartitioningEmployeeCardHeader className="block-center">
                        Add employee
                    </TeamsPartitioningEmployeeCardHeader>
                    <TeamsPartitioningAddEmployeeButton className="block-center">
                        <AddCircleOutlineIcon 
                            style={{ color: "inherit", fontSize: "inherit" }}
                            onClick={addEmptyEmployee}
                         />
                    </TeamsPartitioningAddEmployeeButton>
                </TeamsPartitioningEmployeeCard>}
            </TeamsPartitioningEmployeesContainer> : 
            phase === 1 ? <TeamsPartitioningEmployeesContainer className="block-center">
                {
                    unprocessedConflicts.map((elem: [EmployeeType, EmployeeType], index: number) => <TeamsPartitioningConflictCard className="block-center">
                        <TeamsPartitioningConflictHeader className="block-ceter">
                            Conflict {index+1}
                        </TeamsPartitioningConflictHeader>
                        <TeamsPartitioningConflictUsersListWrapper className="block-center">
                            <TeamsPartitioningConflictUsersList className="block-center"
                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => modifyAConflict(index, 0, event.currentTarget.value)}>
                                <option>Select 1st employee:</option>
                                {
                                    employeesList.map((elem: EmployeeType) => <option>
                                        {`${elem.name} ${elem.surname}`}
                                    </option>)
                                }
                            </TeamsPartitioningConflictUsersList>
                            <TeamsPartitioningConflictUsersList className="block-center"
                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => modifyAConflict(index, 1, event.currentTarget.value)}>
                                <option>Select 2nd employee:</option>
                                {
                                    employeesList.map((elem: EmployeeType) => <option>
                                        {`${elem.name} ${elem.surname}`}
                                    </option>)
                                }
                            </TeamsPartitioningConflictUsersList>
                        </TeamsPartitioningConflictUsersListWrapper>
                    </TeamsPartitioningConflictCard>)
                }
                {unprocessedConflicts.length === 0 || (unprocessedConflicts.length > 0 
                && checkIfNextConflictCanBeAdded(employeesList, unprocessedConflicts))
                ? <TeamsPartitioningConflictCard className="block-center">
                    <TeamsPartitioningConflictHeader className="block-center">
                        Add new conflict
                    </TeamsPartitioningConflictHeader>
                    <TeamsPartitioningAddEmployeeButton className="block-center">
                        <AddCircleOutlineIcon 
                            style={{ color: "inherit", fontSize: "inherit" }}
                            onClick={addEmptyConflict}
                         />
                    </TeamsPartitioningAddEmployeeButton>
                </TeamsPartitioningConflictCard> : null}
                </TeamsPartitioningEmployeesContainer> : <TeamsPartitioningEmployeesContainer className="block-center">
                    
                    </TeamsPartitioningEmployeesContainer>}
            {(phase === 0 && isAddingOrBondsPhaseAvailable && employeesList.length > 1) ||
            (phase === 1 && isListFulfilled(unprocessedConflicts)) ? <TeamsPartitioningNextPhaseButton className="block-center">
                <SkipNextIcon style={{color: "inherit", fontSize: "inherit"}}
                    onClick={goToNextPhase} />
            </TeamsPartitioningNextPhaseButton> : null}
        </TeamsPartitioningCard>
    </>
};

export default TeamsPartition;