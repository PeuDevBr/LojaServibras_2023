import { useContext } from 'react'
import { HeaderContainer } from '../../styles/components/header'
import { MagnifyingGlass } from 'phosphor-react'
import { ProductsContext } from '../../context/productsContext'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export default function Header() {
  const router = useRouter()

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { updateProductList } = useContext(ProductsContext)

  function handleUpdateProductList(data: SearchFormInputs) {
    updateProductList(data.search)
    window.scrollTo(0, 0)
  }

  return (
    <HeaderContainer>
      <div className="container">
        <div className="logo">
          <span>Servibras</span>
        </div>

        <div
          className="search"
          onSubmit={handleSubmit(handleUpdateProductList)}
        >
          {router.pathname === '/' && (
            <form autoComplete="off">
              <input
                placeholder=" Pesquise por nome, marca, produto..."
                name="search"
                {...register('search')}
              />
              <button type="submit">
                <MagnifyingGlass size={20} color="#00000a" />
              </button>
            </form>
          )}
        </div>
        <div>
          <Link href={'/cart'} prefetch={false}>
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </HeaderContainer>
  )
}
