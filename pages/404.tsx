import Head from "next/head";
import React from "react";
import Link from "next/link";

import { ErrorContainer, ErrorHeader, ErrorContent, ErrorButtonsSection, ErrorButton } from "styled/errors/errors";

const Error404:React.FC = () => {
    return <ErrorContainer className="block-center">
        <Head>
            <title>Damn colleauge - Error 404</title>
        </Head>
        <ErrorHeader className="block-center">
            Oops!...
        </ErrorHeader>
        <ErrorContent className="block-center">
            The page you are looking for does not exist. Try going to some of the pages below.
        </ErrorContent>
        <ErrorButtonsSection className="block-center">
            <Link href="/">
                <ErrorButton type="button">
                    Damn colleauge
                </ErrorButton>
            </Link>
            <Link href="/teamsPartition">
                <ErrorButton type="button">
                    Teams partition
                </ErrorButton>
            </Link>
        </ErrorButtonsSection>
    </ErrorContainer>
}

export default Error404