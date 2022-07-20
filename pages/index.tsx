import Link from 'next/link'
import Header from '../components/header'

export default function Contato() {
  return (
    <>
      <Header />
      <h1>
        <Link href="/contato">Ir para contatos</Link>
      </h1>
    </>
  )
}
