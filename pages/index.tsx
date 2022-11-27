import Head from 'next/head'
import Image from 'next/image'
import { WelcomeCheckButton, WelcomeHeader, WelcomeSubTitle } from 'styled/main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Damn colleauge</title>
        <meta name="description" content="An app for separating people into teams in order to avoid conflicts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WelcomeHeader className="block-center">
        Damn colleauge
      </WelcomeHeader>
      <WelcomeSubTitle className="block-center">
        An app for partitioning people into teams in order to avoid conflicts
      </WelcomeSubTitle>
      <WelcomeCheckButton className="block-center" type="button">
        Check this out
      </WelcomeCheckButton>
    </>
  )
}
