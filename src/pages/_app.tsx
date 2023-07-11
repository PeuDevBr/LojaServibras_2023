import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { GlobalStyle } from '../styles/global'
import Header from '../components/header'
import { ProductsProvider } from '../context/productsContext'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsProvider>
        <Header />
        <Component {...pageProps} />
        <Analytics />

        <GlobalStyle />
      </ProductsProvider>
    </ThemeProvider>
  )
}

export default MyApp
