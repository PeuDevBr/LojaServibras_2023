import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
