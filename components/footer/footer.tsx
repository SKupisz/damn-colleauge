import React from "react";
import Link from "next/link";

import { FooterContainer, FooterHeader } from "styled/footer/footer";

const Footer:React.FC = () => {
    return <FooterContainer className="block-center">
        <FooterHeader className="block-center">
            Made by <a href="https://github.com/SKupisz" target="_blank">
                Simon Kupisz
            </a>
        </FooterHeader>
    </FooterContainer>
};

export default Footer;
