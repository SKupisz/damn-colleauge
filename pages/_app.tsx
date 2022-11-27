import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GraphicalData } from 'styled/main'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={GraphicalData}>
      <Component {...pageProps} />
    </ThemeProvider>
}
