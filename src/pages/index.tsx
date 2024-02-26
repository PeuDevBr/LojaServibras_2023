import Image from 'next/image'
import { Container } from '../styles/pages'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/productsContext'
/* import Head from 'next/head' */
import Cookies from 'js-cookie'

import styled from 'styled-components'
import ProductsList from './productsList'

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
      <Link href={`/productsList`}>
        <h1>Catálogo</h1>
      </Link>
  )
}

