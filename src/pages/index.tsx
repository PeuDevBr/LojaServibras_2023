import Image from 'next/image'
import { Container } from '../pages/home'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/productsContext'
import Head from 'next/head'
import Cookies from 'js-cookie'

export default function Home() {
  const { productList, addToCartList } = useContext(ProductsContext)

  const [scrollPosition, setScrollPosition] = useState(
    Cookies.get('scrollPositionNumber'),
  )

  useEffect(() => {
    // Restaurar a posição do scroll quando a página for renderizada novamente
    window.scrollTo(0, scrollPosition)
  }, [])

  useEffect(() => {
    // Função para atualizar a posição do scroll
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    // Adiciona o listener para o evento de scroll
    window.addEventListener('scroll', handleScroll)

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSetScrollPosition = () => {
    Cookies.set('scrollPositionNumber', scrollPosition)
  }

  const handleAddToCartList = (productCode: string) => {
    addToCartList(productCode)
  }

  return (
    <>
      <Head>
        <title>Servibras</title>
      </Head>
      <Container>
        <div className="gridContainer">
          {productList.map((product) => {
            return (
              <div key={product.code} className="productContainer">
                <div className="productContent">
                  <div className="brandContainer">
                    <span className="brand">{product.brand}</span>
                  </div>
                  <Image
                    src={`/images/productsImg/${product.code}.png`}
                    width={120}
                    height={120}
                    className="image"
                    alt={product.name}
                  />
                  <h2 className="name">{product.name.toUpperCase()}</h2>
                  <h2 className="code">{product.code}</h2>
                  <section>
                    <button
                      className="productButton"
                      id="add"
                      onClick={() => handleAddToCartList(product.code)}
                    >
                      ADICIONAR
                    </button>
                    <Link href={`/product/${product.code} `} prefetch={false}>
                      <button
                        className="productButton"
                        id="verify"
                        onClick={() => handleSetScrollPosition()}
                      >
                        VERIFICAR
                      </button>
                    </Link>
                  </section>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}
