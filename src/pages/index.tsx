import Link from 'next/link'

export default function Home() {
    return (
      <Link href={`/productsList`}>
        <h1>Catálogo</h1>
      </Link>
  )
}

