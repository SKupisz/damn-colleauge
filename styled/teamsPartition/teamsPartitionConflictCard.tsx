import styled from "styled-components";

export const TeamsPartitioningConflictCard = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 1440px){
        width: calc(70% - 20px);
    }
`;

export const TeamsPartitioningConflictHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.15em;
    letter-spacing: 0.04em;
    text-shadow: ${(props) => props.theme.textShadow};
    padding-top: 2vh;
    margin-bottom: 4vh;

    @media screen and (min-width: 768px){
        font-size: 1.4em;
    }
`;

export const TeamsPartitioningConflictUsersListWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 2vh;
`;

export const TeamsPartitioningConflictUsersList = styled.select`
    width: calc(100% - 30px);
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 5px 5px 10px;
    border: none;
    border-radius: 10px;
    color: ${(props) => props.theme.color.regular};
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: 600;
    font-size: 0.95em;
    letter-spacing: 0.04em;
    background: rgba(30,30,30,.3);

    @media screen and (min-width: 425px){
        width: calc(90% - 30px);
    }

    @media screen and (min-width: 525px){
        width: calc(70% - 30px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 30px);
        margin: 5px;
        font-size: 1.05em;
    }

    @media screen and (min-width: 1024px){
        width: calc(40% - 30px);
    }

    @media screen and (min-width: 1440px){
        font-size: 1.1em;
    }
`;