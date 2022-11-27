import styled from "styled-components";

export const ErrorContainer = styled.section`
    width: 100%;
    padding: 10px 0px;
    text-align: center;
    padding-top: 4vh;
    margin-bottom: 2vh;
    color: ${(props) => props.theme.color.regular};
    font-family: ${(props) => props.theme.fontFamily};
    letter-spacing: 0.03em;

    @media screen and (min-width: 375px){
        width: calc(100% - 20px);
        padding: 10px;
    }

    @media screen and (min-width: 1024px){
        width: calc(95% - 20px);
    }

    @media screen and (min-width: 1440px){
        width: calc(90% - 20px);
    }
`;

export const ErrorHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    background: linear-gradient(180deg, ${(props) => props.theme.color.title} 20%, #027830 40%, #05ab45 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.1em;
    margin-bottom: 5vh;
    padding-top: 4vh;
    text-shadow: ${(props) => props.theme.textShadow};

    @media screen and (min-width: 425px){
        font-size: 2.4em;
        padding-top: 2vh;
        margin-bottom: 3vh;
    }

    @media screen and (min-width: 768px){
        font-size: 2.9em;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 10px);
        font-size: 3.2em;
    }
`;

export const ErrorContent = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 0.85em;
    padding-top: 1vh;
    margin-bottom: 4vh;

    @media screen and (min-width: 375px){
        font-size: 0.95em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.15em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 1.45em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 1.7em;
    }
`;

export const ErrorButtonsSection = styled.section`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    padding-top: 4vh;
    margin-bottom: 6vh;

    @media screen and (min-width: 1440px){
        width: calc(90% - 10px);
    }
`;

export const ErrorButton = styled.button`
    width: calc(100% - 30px);
    padding: 30px 10px;
    border: none;
    border-radius: 10px;
    background: rgba(40,40,40,.35);
    box-shadow: ${(props) => props.theme.boxShadow};
    color: ${(props) => props.theme.color.regular};
    font-family: ${(props) => props.theme.fontFamily};
    text-shadow: ${(props) => props.theme.textShadow};
    font-size: 1.2em;
    letter-spacing: 0.04em;
    display: inline-block;
    margin: 0px 5px 20px;
    cursor: pointer;
    transition: filter 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 30px);
        font-size: 1.4em;
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 30px);
        font-size: 1.6em;
        margin: 5px;
    }

    @media screen and (min-width: 1024px){
        width: calc(40% - 30px);
        font-size: 1.7em;
    }

    @media screen and (min-width: 1440px){
        font-size: 2.1em;
    }
`;
