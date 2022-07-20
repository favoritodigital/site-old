import Link from 'next/link'
import Header from '../components/header'

export default function Contato() {
  return (
    <>
      <h1>Página de contatos</h1>
      <h1>
        <Link href="/">Voltar para página inicial</Link>
      </h1>
      <Header />
    </>
  )
}
