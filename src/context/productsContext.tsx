import { ReactNode, createContext, useState } from 'react'
import Cookies from 'js-cookie'
import list from '../../products.json'

interface ProductProps {
  name: string
  code: string
  brand: string
  subject: string
  model: string
  version?: string
  quantaty: number
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

    const results = list.filter((item) => {
      for (const key in item) {
        const value = item[key]
        if (
          typeof value === 'string' &&
          value.toLowerCase().includes(search.toLowerCase())
        ) {
          return true
        }
      }
      return false
    })

    setProductList(results)
  }

  return (
    <ProductsContext.Provider value={{ productList, updateProductList }}>
      {children}
    </ProductsContext.Provider>
  )
}
