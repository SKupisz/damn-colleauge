import React from "react";

import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

import { TeamsPartitioningButtonsContainer, TeamsPartitioningNextPhaseButton } from "styled/teamsPartition/teamsPartition";

import { isListFulfilled } from "teamsPartitionFunctions/manageConflicts";
import EmployeeType from "./EmployeeType";

interface NavigationInterface {
    phase: number,
    goToPreviousPhase: () => void,
    goToNextPhase: () => void,
    bondsStatus: boolean,
    employeesList: EmployeeType[],
    unprocessedConflicts: [EmployeeType, EmployeeType][],
}

const Navigation:React.FC<NavigationInterface> = ({
    phase,
    goToPreviousPhase,
    goToNextPhase,
    bondsStatus,
    employeesList,
    unprocessedConflicts,
}:NavigationInterface) => {
    return <TeamsPartitioningButtonsContainer className="block-center">
        {phase === 1
        ? <TeamsPartitioningNextPhaseButton className="block-center">
            <SkipPreviousIcon style={{color: "inherit", fontSize: "inherit"}}
                onClick={goToPreviousPhase} />
        </TeamsPartitioningNextPhaseButton> : null}
    {(phase === 0 && bondsStatus && employeesList.length > 1) ||
    (phase === 1 && isListFulfilled(unprocessedConflicts))
    ? <TeamsPartitioningNextPhaseButton className="block-center">
        <SkipNextIcon style={{color: "inherit", fontSize: "inherit"}}
            onClick={goToNextPhase} />
    </TeamsPartitioningNextPhaseButton> : null}
    </TeamsPartitioningButtonsContainer>
};

export default Navigation;
