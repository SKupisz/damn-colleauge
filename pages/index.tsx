import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { WelcomeCheckButton, WelcomeHeader, WelcomeSubTitle } from "styled/main"

export default function Home() {
  return (
    <>
      <WelcomeHeader className="block-center">
        Damn colleauge
      </WelcomeHeader>
      <WelcomeSubTitle className="block-center">
        An app for partitioning people into teams in order to avoid conflicts
      </WelcomeSubTitle>
      <Link href={"/teamsPartition"}>
        <WelcomeCheckButton className="block-center" type="button">
          Check this out
        </WelcomeCheckButton>
      </Link>
    </>
  )
}
