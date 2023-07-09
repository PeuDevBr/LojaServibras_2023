import Image from 'next/image'
import { Container } from '../styles/pages/home'
import Link from 'next/link'
import { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'
import Head from 'next/head'

export default function Home() {
  const { productList } = useContext(ProductsContext)

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
                    <button className="productButton" id="add">
                      ADICIONAR
                    </button>
                    <Link href={`/product/${product.code} `} prefetch={false}>
                      <button className="productButton" id="verify">
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
