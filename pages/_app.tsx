import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GraphicalData, PageWrapper } from 'styled/main'
import Footer from 'components/footer/footer'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={GraphicalData}>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
      <Footer />
    </ThemeProvider>
}
