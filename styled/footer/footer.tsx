import styled from "styled-components";

export const FooterContainer = styled.section`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    border-top: 2px solid ${(props) => props.theme.color.title};
    color: ${(props) => props.theme.color.regular};
`;

export const FooterHeader = styled.header`
    width: calc(100% - 10px);
    padding: 10px 5px;
    text-align: center;
    font-size: 1.4em;
    letter-spacing: 0.02em;
    position: relative;
    top: 2vh;
    transition: all 0.4s;
    background: linear-gradient(135deg, ${(props) => props.theme.color.title} 20%, #027830 40%, #05ab45 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    & > a {
        text-decoration: underline !important;
        cursor: pointer;
        transition: all 0.4s;
        background: linear-gradient(135deg, ${(props) => props.theme.color.title} 20%, #027830 40%, #05ab45 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & > a:hover {
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.7em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        font-size: 2.1em;
    }
`;
