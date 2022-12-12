import React, {useEffect, useState} from "react";
import Head from "next/head";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import EmployeeType from "components/teamsPartition/EmployeeType";

import { TeamsPartitionHeader, TeamsPartitioningCard,
    TeamsPartitioningHeader, TeamsPartitioningEmployeesContainer, 
    TeamsPartitioningButtonsContainer, TeamsPartitioningNextPhaseButton} from "styled/teamsPartition/teamsPartition";
import { TeamsPartitioningEmployeeCard,
    TeamsPartitioningEmployeeCardHeader, TeamsPartitioningAddEmployeeButton } from "styled/teamsPartition/teamsPartitionEmployeeCard";

import { TeamsPartitioningConflictCard, TeamsPartitioningConflictHeader, TeamsPartitioningConflictUsersList, TeamsPartitioningConflictUsersListWrapper } from "styled/teamsPartition/teamsPartitionConflictCard";
import { addNewUnprocessedConflict, checkIfNextConflictCanBeAdded, conflictsInputFilter, initializeNewConflictList, isListFulfilled, updateUnprocessedConflict } from "teamsPartitionFunctions/manageConflicts";

import {deleteGivenEmployee, initializeNewEmployee, modifyCurrentEmployee} from "teamsPartitionFunctions/manageEmployee";
import calculateNewTeams from "teamsPartitionFunctions/calculateTheTeams";
import EmployeeCard from "components/teamsPartition/EmployeeCard";
import { TeamsPartitioningResultsBanner, TeamsPartitioningResultsEmployee, TeamsPartitioningResultsGoingBackBtn, TeamsPartitioningResultsInfo, TeamsPartitioningResultsTeamWrapper } from "styled/teamsPartition/teamsPartitionResults";
import Navigation from "components/teamsPartition/navigation";

const TeamsPartition:React.FC = () => {

    const [employeesList, setEmployeesList] = useState<EmployeeType[]>([]);

    const [employeesConflicts, setEmployeesConflicts] = useState<number[][]>([[],[],[]]);
    const [unprocessedConflicts, setUnprocessedConflicts] = useState<[EmployeeType, EmployeeType][]>([]);
    const [calculatedTeams, setCalculatedTeams] = useState<EmployeeType[][]>([]);

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
        const employee:EmployeeType = employeeData.split(" ")[0] === "Select" ? {
            name: "",
            surname: ""
        } : employeesList.filter((elem: EmployeeType) => elem.name + " " +elem.surname === employeeData)[0];
        const newList:[EmployeeType, EmployeeType][] = updateUnprocessedConflict(unprocessedConflicts, globalIndex, localIndex, employee);
        setUnprocessedConflicts(newList);
    }

    const goToNextPhase = ():void => {
        const newPhase = phase +1;
        setPhase(newPhase);
    }

    const goToPreviousPhase = ():void => {
        const newPhase = phase - 1;
        if(newPhase >= 0) setPhase(newPhase);
    }

    const resetTheApp = ():void => {
        setCalculatedTeams([]);
        setUnprocessedConflicts([]);
        setEmployeesList([]);
        setEmployeesConflicts([]);
        toggleIsAddingOrBondsPhaseAvailable(true);
        setPhase(0);
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
            setCalculatedTeams(teams);
        }
    }, [phase]);

    return <>
        <Head>
            <title>Calculating teams - damn colleauge</title>
        </Head>
        <TeamsPartitionHeader className="block-center">
            {phase < 2 ? "Teams partitioning" : "Partitioning results"}
        </TeamsPartitionHeader>
        <TeamsPartitioningCard className="block-center">
            <TeamsPartitioningHeader className="block-center">
                {phase === 0 ? "Team members" : phase === 1 ? "Team conflicts" : "Teams"}
            </TeamsPartitioningHeader>
            {phase === 0 ? <TeamsPartitioningEmployeesContainer className="block-center">
                {
                    employeesList.map((employee: EmployeeType, index: number) => <EmployeeCard
                    employee={employee}
                    index={index}
                    deleteCallback={deleteAnEmployee}
                    updateCallback={updateAnEmployee} />)
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
                            value={elem[0].name + " " +elem[0].surname}
                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => modifyAConflict(index, 0, event.currentTarget.value)}>
                                <option>Select 1st employee:</option>
                                {
                                    (elem[0].name + " " +elem[0].surname).length > 1 ? <option>{elem[0].name + " " +elem[0].surname}</option> : null
                                }
                                {
                                    employeesList.filter((elem: EmployeeType) => conflictsInputFilter(unprocessedConflicts, index, 1, elem, unprocessedConflicts[index][1])).map((elem: EmployeeType) => <option>
                                        {`${elem.name} ${elem.surname}`}
                                    </option>)
                                }
                            </TeamsPartitioningConflictUsersList>
                            <TeamsPartitioningConflictUsersList className="block-center"
                            value={elem[1].name + " " +elem[1].surname}
                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => modifyAConflict(index, 1, event.currentTarget.value)}>
                                <option>Select 2nd employee:</option>                               
                                {
                                    (elem[1].name + " " +elem[1].surname).length > 1 ? <option>{elem[1].name + " " +elem[1].surname}</option> : null
                                }
                                {
                                    employeesList.filter((elem: EmployeeType) => conflictsInputFilter(unprocessedConflicts, index, 0, elem, unprocessedConflicts[index][0])).map((elem: EmployeeType) => <option>
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
                    <TeamsPartitioningResultsInfo className="block-center">
                        After concerning both your employees and the conflicts among them, for the effective completion of the work you need at least {calculatedTeams.length} {calculatedTeams.length > 1 ? "teams" : "team"}.
                    </TeamsPartitioningResultsInfo>
                    {
                        calculatedTeams.map((elem: EmployeeType[], index: number) => (<TeamsPartitioningResultsTeamWrapper className="block-center">
                        <TeamsPartitioningResultsBanner className="block-center">
                            Team {index+1}
                        </TeamsPartitioningResultsBanner>
                        {
                            elem.map((employee: EmployeeType) =>
                                <TeamsPartitioningResultsEmployee className="block-center">
                                    {employee.name + " " + employee.surname}
                                </TeamsPartitioningResultsEmployee>
                            )
                        }
                    </TeamsPartitioningResultsTeamWrapper>))
                    }
                    </TeamsPartitioningEmployeesContainer>}
                    <Navigation 
                        phase={phase}
                        goToNextPhase={goToNextPhase}
                        goToPreviousPhase={goToPreviousPhase}
                        employeesList={employeesList}
                        unprocessedConflicts={unprocessedConflicts}
                        bondsStatus={isAddingOrBondsPhaseAvailable}
                    />
        </TeamsPartitioningCard>
        {
            phase === 2 && calculatedTeams.length > 0 ? <TeamsPartitioningResultsGoingBackBtn className="block-center"
                onClick={resetTheApp}>
                Go back
            </TeamsPartitioningResultsGoingBackBtn> : null
        }
    </>
};

export default TeamsPartition;