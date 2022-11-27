import styled from "styled-components";

export const GraphicalData = {
    color: {
        title: "#048f29",
        regular: "#08bcbf"
    },
    textShadow: {
        title: "5px 5px 9px rgba(4, 143, 41,.4)",
        regular: "3px 3px 4px rgba(0, 0, 0,.4)",
    },
    boxShadow: "3px 3px 4px rgba(0,0,0,.25)",
    fontFamily: "Roboto Mono, sans-serif"
};

export const WelcomeHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.1em;
    letter-spacing: 0.03em;
    background: linear-gradient(180deg, ${(props) => props.theme.color.title} 20%, #027830 40%, #05ab45 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: ${(props) => props.theme.fontFamily};
    text-shadow: ${(props) => props.theme.textShadow.title};
    font-weight: 700;
    position: relative;
    top: 6vh;
    margin-bottom: 6vh;

    @media screen and (min-width: 425px){
        font-size: 2.9em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 3.7em;
        top: 9vh;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 4.2em;
    }
`;

export const WelcomeSubTitle = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.3em;
    background: linear-gradient(180deg, ${(props) => props.theme.color.title} 20%, #027830 40%, #05ab45 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: ${(props) => props.theme.fontFamily};
    text-shadow: ${(props) => props.theme.textShadow.title};
    position: relative;
    top: 9vh;
    margin-bottom: 4vh;

    @media screen and (min-width: 425px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 630px){
        font-size: 1.8em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 2em;
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
        font-size: 2.2em;
    }
`;

export const WelcomeCheckButton = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 20px 40px;
    background: rgba(20,20,20,.9);
    border: none;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.boxShadow};
    color: ${(props) => props.theme.color.title};
    font-size: 1.3em;
    letter-spacing: 0em;
    font-family: ${(props) => props.theme.fontFamily};
    position: relative;
    top: 14vh;
    transition: all 0.4s;
    cursor: pointer;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.1em;
        padding: 40px 80px;
    }

    @media screen and (min-width: 1024px){
        font-size: 2.4em;
    }

`;
