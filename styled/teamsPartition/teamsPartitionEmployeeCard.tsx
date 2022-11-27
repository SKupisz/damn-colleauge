import styled from "styled-components";

export const TeamsPartitioningEmployeeCard = styled.div`
    width: calc(100% - 30px);
    height: calc(40vh - 30px);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    margin: 5px;

    @media screen and (min-width: 375px){
        width: calc(90% - 30px);
    }

    @media screen and (min-width: 425px){
        width: calc(70% - 30px);
    }

    @media screen and (min-width: 575px){
        width: calc(50% - 30px);
    }

    @media screen and (min-width: 768px){
        width: calc(33% - 30px);
    }

    @media screen and (min-width: 1024px){
        width: calc(32% - 30px);
    }

    @media screen and (min-width: 1440px){
        width: calc(25% - 30px);
    }
`;  

export const TeamsPartitioningEmployeeCardHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.2em;
    padding-top: 2vh;
    margin-bottom: 4vh;

    @media screen ad (min-width: 375px){
        font-size: 1.3em;
    }

    @media screen and (min-width: 1440px){
        font-size: 1.4em;
    }
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

export const TeamsPartitioningEmployeeInputsContainer = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 1vh;

    @media screen and (min-width: 768px){
        margin-bottom: 3vh;
    }
`;

export const TeamsPartitioningEmployeeInput = styled.input`
    width: calc(100% - 20px);
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: rgba(20,20,20,.8);
    text-indent: 0.3em;
    font-size: 1em;
    letter-spacing: 0.04em;
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.color.regular};
    text-shadow: ${(props) => props.theme.textShadow};
    margin-bottom: 2vh;

    @media screen and (min-width: 1024px){
        font-size: 1.1em;
    }
`;
