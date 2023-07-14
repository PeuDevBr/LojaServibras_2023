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
  pnc?: string
  quantaty: number
  title: string
}

interface ProductsContextType {
  productList: ProductProps[]
  cartList: ProductProps[]
  updateProductList: (search: string) => void
  addToCartList: (search: string) => void
  updateProductQuantity: (productCode: string, newQuantity: number) => void
  removeProduct: (productCode: string) => void
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProviderProps {
  children: ReactNode
}

export function ProductsProvider({ children }: ProviderProps) {
  const [productList, setProductList] = useState<ProductProps[]>([])
  const [cartList, setCartList] = useState<ProductProps[]>([])

  console.log(cartList)

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

  async function addToCartList(productCode: string) {
    const result = list.filter((product) => {
      if (product.code === productCode) {
        return true
      } else {
        return false
      }
    })
    setCartList([...cartList, result[0]])
  }

  const updateProductQuantity = (productCode: string, newQuantity: number) => {
    const productExists = cartList.some(
      (cartProduct) => cartProduct.code === productCode,
    )

    if (productExists) {
      const updatedCart = cartList.map((cartItem) =>
        cartItem.code === productCode
          ? {
              ...cartItem,
              quantaty: newQuantity,
            }
          : cartItem,
      )

      setCartList(updatedCart)
    }
  }

  const removeProduct = (productCode: string) => {
    const productExists = cartList.some(
      (cartProduct) => cartProduct.code === productCode,
    )

    if (productExists) {
      const updatedCart = cartList.filter(
        (cartProduct) => cartProduct.code !== productCode,
      )
      setCartList(updatedCart)
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        productList,
        cartList,
        updateProductList,
        addToCartList,
        updateProductQuantity,
        removeProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
