import styled from "styled-components";

export const TeamsPartitionHeader = styled.header`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.8em;
    letter-spacing: 0.04em;
    background: linear-gradient(180deg, ${(props) => props.theme.color.title} 20%, #027830 40%, #05ab45 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: ${(props) => props.theme.fontFamily};
    text-shadow: ${(props) => props.theme.textShadow};
    padding-top: 4vh;
    margin-bottom: 6vh;
`;

export const TeamsPartitioningCard = styled.section`
    width: calc(90% - 20px);
    height: calc(80vh - 20px);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    box-shadow: ${(props) => props.theme.boxShadow};
    text-shadow: ${(props) => props.theme.textShadow};
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.color.regular};
    background: rgba(40,40,40,.4);
    margin-bottom: 6vh;
`;

export const TeamsPartitioningHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 4vh;
    font-size: 1.8em;
    letter-spacing: 0.03em;
    text-align: center;
`;

export const TeamsPartitioningEmployeesContainer = styled.main`
    width: calc(95% - 10px);
    height: fit-content;
    max-height: calc(60vh - 10px);
    padding: 5px;
    text-align: center;
    overflow-x: hidden;
    overflow-y: scroll;
`;
