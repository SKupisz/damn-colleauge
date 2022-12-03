import styled from "styled-components";

export const TeamsPartitioningResultsInfo = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 0.85em;
    letter-spacing: 0.04em;
    text-shadow: ${(props) => props.theme.textShadow};
    margin-bottom: 5vh;
    padding-top: 2vh;

    @media screen and (min-width: 425px){
        font-size: 1.05em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 1.15em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 1.35em;
    }
`;

export const TeamsPartitioningResultsTeamWrapper = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    margin-bottom: 4vh;
    letter-spacing: 0.03em;
    text-shadow: ${(props) => props.theme.textShadow};
    box-shadow: ${(props) => props.theme.boxShadow};
    background: rgba(30,30,30,.6);
    border-radius: 10px;

    @media screen and (min-width: 375px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
    }
`;

export const TeamsPartitioningResultsBanner = styled.header`
    width: calc(100% - 10px);
    padding: 20px 5px;
    text-align: center;
    text-indent: 0.4em;
    font-size: 1.4em;
    margin-bottom: 2vh;
    background: linear-gradient(135deg, ${(props) => props.theme.color.title} 20%, #027830 40%, #05ab45 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (min-width: 425px){
        text-align: left;
        font-size: 1.5em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.8em;
        padding: 40px 5px;
    }
`;

export const TeamsPartitioningResultsEmployee = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 0.9em;
    margin-bottom: 1vh;

    @media screen and (min-width: 375px){
        font-size: 1em;
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 10px);
        text-align: left;
        font-size: 1.2em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.4em;
        margin-bottom: 2vh;
    }
`;

export const TeamsPartitioningResultsGoingBackBtn = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 20px 40px;
    box-shadow: ${(props) => props.theme.boxShadow};
    text-shadow: ${(props) => props.theme.textShadow};
    font-size: 1.45em;
    letter-spacing: 0.02em;
    border-radius: 10px;
    color: ${(props) => props.theme.color.title};
    background: rgba(40,40,40,.5);
    margin-bottom: 4vh;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.9em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.3em;
    }
`;