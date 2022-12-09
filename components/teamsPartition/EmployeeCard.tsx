import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { TeamsPartitioningAddEmployeeButton, TeamsPartitioningEmployeeCard, TeamsPartitioningEmployeeCardHeader, TeamsPartitioningEmployeeInput, TeamsPartitioningEmployeeInputsContainer } from "styled/teamsPartition/teamsPartitionEmployeeCard";
import EmployeeType from "./EmployeeType";

interface EmployeeCardInterface {
    employee: EmployeeType,
    index: number,
    updateCallback: (index: number, name: string, surname: string) => void,
    deleteCallback: (index: number) => void,
}

const EmployeeCard:React.FC<EmployeeCardInterface> = ({
    employee,
    index,
    updateCallback,
    deleteCallback
}:EmployeeCardInterface) => {
    return <TeamsPartitioningEmployeeCard style={{
        backgroundColor: index % 2 === 0 ? "rgba(50,50,50,.6)" : "rgba(40,40,40,.6)"
    }}>
        <TeamsPartitioningEmployeeCardHeader className="block-center">
            Employee {index+1}
        </TeamsPartitioningEmployeeCardHeader>
        <TeamsPartitioningEmployeeInputsContainer className="block-center">
            <TeamsPartitioningEmployeeInput type="text" placeholder="Name..."
                value={employee.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateCallback(index, e.currentTarget.value, employee.surname)}/>
            <TeamsPartitioningEmployeeInput type="text" placeholder="Surname..."
                value={employee.surname} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateCallback(index, employee.name, e.currentTarget.value)} />
        </TeamsPartitioningEmployeeInputsContainer>
        <TeamsPartitioningAddEmployeeButton className="block-center">
            <DeleteForeverIcon
                style={{ color: "inherit", fontSize: "inherit" }}
                onClick={() => deleteCallback(index)}
            />
        </TeamsPartitioningAddEmployeeButton>
    </TeamsPartitioningEmployeeCard>
}

export default EmployeeCard;