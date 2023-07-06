import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { GlobalStyle } from '../styles/global'
import Header from '../components/header'
import { ProductsProvider } from '../context/productsContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsProvider>
        <Header />
        <Component {...pageProps} />

        <GlobalStyle />
      </ProductsProvider>
    </ThemeProvider>
  )
}

export default MyApp
