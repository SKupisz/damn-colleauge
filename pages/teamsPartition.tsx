import React, {useEffect, useState} from "react";
import Head from "next/head";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { TeamsPartitionHeader, TeamsPartitioningCard, 
    TeamsPartitioningHeader, TeamsPartitioningEmployeesContainer, TeamsPartitioningNextPhaseButton} from "styled/teamsPartition/teamsPartition";
import { TeamsPartitioningEmployeeCard, 
    TeamsPartitioningEmployeeCardHeader, TeamsPartitioningAddEmployeeButton, TeamsPartitioningEmployeeInput, TeamsPartitioningEmployeeInputsContainer } from "styled/teamsPartition/teamsPartitionEmployeeCard";

import EmployeeType from "components/teamsPartition/EmployeeType";
import {deleteGivenEmployee, initializeNewEmployee, modifyCurrentEmployee} from "teamsPartitionFunctions/manageEmployee";
import calculateNewTeams from "teamsPartitionFunctions/calculateTheTeams";

const TeamsPartition:React.FC = () => {

    const [employeesList, setEmployeesList] = useState<EmployeeType[]>([{
        name: "alfa",
        surname: "alfa2"
    },{
        name: "beta",
        surname: "beta2"
    },{
        name: "gamma",
        surname: "alfa2"
    },{
        name: "delta",
        surname: "alfa2"
    },{
        name: "theta",
        surname: "alfa2"
    }]);

    const [employeesConflicts, setEmployeesConflicts] = useState<number[][]>([[2,3],[3,4],[0],[0,4],[1,3]]);

    const [isAddingOrBondsPhaseAvailable, toggleIsAddingOrBondsPhaseAvailable] = useState<boolean>(false);
    const [phase, setPhase] = useState<number>(1);

    const addEmptyEmployee = ():void => {
        const newList:EmployeeType[] = initializeNewEmployee(employeesList);
        setEmployeesList(newList);
    };

    const updateAnEmployee = (ind: number, name: string, surname: string):void => {
        const newList:EmployeeType[] = modifyCurrentEmployee(employeesList, ind, name, surname);
        setEmployeesList(newList);
    }

    const deleteAnEmployee = (ind: number):void => {
        const newList:EmployeeType[] = deleteGivenEmployee(employeesList, ind);
        setEmployeesList(newList)
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
        console.log(calculateNewTeams(employeesList, employeesConflicts));
    }, []);

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
            </TeamsPartitioningEmployeesContainer> : <TeamsPartitioningEmployeesContainer className="block-center">
                </TeamsPartitioningEmployeesContainer>}
            {phase === 0 && isAddingOrBondsPhaseAvailable && employeesList.length > 1 ? <TeamsPartitioningNextPhaseButton className="block-center">
                <SkipNextIcon style={{color: "inherit", fontSize: "inherit"}}
                    onClick={goToNextPhase} />
            </TeamsPartitioningNextPhaseButton> : null}
        </TeamsPartitioningCard>
    </>
};

export default TeamsPartition;