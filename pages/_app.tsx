import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GraphicalData, PageWrapper } from 'styled/main'
import Footer from 'components/footer/footer'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={GraphicalData}>
      <PageWrapper>
        <Head>
          <title>Damn colleauge</title>
          <meta name="description" content="An app for separating people into teams in order to avoid conflicts" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </PageWrapper>
      <Footer />
    </ThemeProvider>
}
