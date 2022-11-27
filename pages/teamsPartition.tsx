import React, {useState} from "react";
import Head from "next/head";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { TeamsPartitionHeader, TeamsPartitioningCard, 
    TeamsPartitioningHeader, TeamsPartitioningEmployeesContainer} from "styled/teamsPartition/teamsPartition";
import { TeamsPartitioningEmployeeCard, 
    TeamsPartitioningEmployeeCardHeader, TeamsPartitioningAddEmployeeButton, TeamsPartitioningEmployeeInput } from "styled/teamsPartition/teamsPartitionEmployeeCard";

import EmployeeType from "components/teamsPartition/EmployeeType";
import {initializeNewEmployee, modifyCurrentEmployee} from "teamsPartitionFunctions/addNewEmployee";

const TeamsPartition:React.FC = () => {

    const [employeesList, setEmployeesList] = useState<EmployeeType[]>([]);

    const addEmptyEmployee = ():void => {
        const newList:EmployeeType[] = initializeNewEmployee(employeesList);
        setEmployeesList(newList);
    };

    const updateAnEmployee = (ind: number, name: string, surname: string):void => {
        const newList:EmployeeType[] = modifyCurrentEmployee(employeesList, ind, name, surname);
        setEmployeesList(newList);
    }

    return <>
        <Head>
            <title>Calculating teams - damn colleauge</title>
        </Head>
        <TeamsPartitionHeader className="block-center">
            Teams partitioning
        </TeamsPartitionHeader>
        <TeamsPartitioningCard className="block-center">
            <TeamsPartitioningHeader className="block-center">
                Team members
            </TeamsPartitioningHeader>
            <TeamsPartitioningEmployeesContainer className="block-center">
                {
                    employeesList.map((employee: EmployeeType, index: number) => <TeamsPartitioningEmployeeCard style={{
                        backgroundColor: "rgba(40,40,40,.6)"
                    }}>
                        <TeamsPartitioningEmployeeCardHeader className="block-center">
                            Employee {index+1}
                        </TeamsPartitioningEmployeeCardHeader>
                        <TeamsPartitioningEmployeeInput type="text" placeholder="Name..."
                            value={employee.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                updateAnEmployee(index, e.currentTarget.value, employee.surname)}/>
                        <TeamsPartitioningEmployeeInput type="text" placeholder="Surname..."
                            value={employee.surname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                updateAnEmployee(index, employee.name, e.currentTarget.value)} />
                    </TeamsPartitioningEmployeeCard>)
                }
                {
                    employeesList.length > 0 && (
                        employeesList[employeesList.length - 1].name === "" ||
                        employeesList[employeesList.length - 1].surname === ""
                     ) ?
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
            </TeamsPartitioningEmployeesContainer>
        </TeamsPartitioningCard>
    </>
};

export default TeamsPartition;