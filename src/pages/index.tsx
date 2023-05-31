import { GetStaticProps } from 'next'
import Image from 'next/image'
import { Container } from './styles'

interface ProductsProps {
  products: {
    name: string
    code: string
    brand: string
    subjects: string
    model: string
    version: string
    quantity: number
    title: string
  }[]
}

export default function Home({ products }: ProductsProps) {
  return (
    <Container>
      <div className="gridContainer">
        {products.map((product) => {
          return (
            <div key={product.code} className="productContainer">
              <div className="productContent">
                <span className="brand">{product.brand}</span>
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
                  <button className="productButton" id="verify">
                    VERIFICAR
                  </button>
                </section>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/products')
  const products = await response.json()

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // 24hrs
  }
}
