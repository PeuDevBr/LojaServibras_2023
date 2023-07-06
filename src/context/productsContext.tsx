import { ReactNode, createContext, useState } from 'react'
import Cookies from 'js-cookie'

interface ProductProps {
  name: string
  code: string
  brand: string
  subjects: string
  model: string
  version: string
  quantity: number
  title: string
}

interface ProductsContextType {
  productList: ProductProps[]
  updateProductList: (search: string) => void
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProviderProps {
  children: ReactNode
}

export function ProductsProvider({ children }: ProviderProps) {
  const [productList, setProductList] = useState<ProductProps[]>([])

  async function updateProductList(search: string) {
    Cookies.set('search', search)

    const url = new URL('https://lojaservibras.vercel.app/products')

    if (search) {
      url.searchParams.append('q', search)
    }

    const response = await fetch(url)
    const data = await response.json()

    setProductList(data)
  }

  return (
    <ProductsContext.Provider value={{ productList, updateProductList }}>
      {children}
    </ProductsContext.Provider>
  )
}
