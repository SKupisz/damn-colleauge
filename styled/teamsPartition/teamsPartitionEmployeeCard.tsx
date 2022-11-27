import styled from "styled-components";

export const TeamsPartitioningEmployeeCard = styled.div`
    width: calc(25% - 30px);
    height: calc(40vh - 30px);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    margin: 5px;
`;  

export const TeamsPartitioningEmployeeCardHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.4em;
    padding-top: 2vh;
    margin-bottom: 4vh;
`;

export const TeamsPartitioningAddEmployeeButton = styled.div`
    width: fit-content;
    height: fit-content;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.4s;
    font-size: 1.6em;

    &:hover{
        filter: brightness(70%);
    }
`;  

export const TeamsPartitioningEmployeeInput = styled.input`
    width: calc(100% - 20px);
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: rgba(20,20,20,.8);
    text-indent: 0.3em;
    font-size: 1.1em;
    letter-spacing: 0.04em;
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.color.regular};
    text-shadow: ${(props) => props.theme.textShadow};
    margin-bottom: 2vh;
`;
