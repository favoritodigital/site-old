// NEXT
import Head from 'next/head'

// HEADER
import Footer from '../components/Footer'
import Header from '../components/Header'

// SECTIONS
import SejaParceiro from '../components/SejaParceiro-section'

// COMPONENTS
import WhatsappButton from '../components/WhatsappButton'

// SEJA PARCEIRO
export default function Sejaparceiro() {
  return (
    <>
      <Head>
        <title>Que Barbada</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <WhatsappButton />
      <SejaParceiro />
      <Footer />
    </>
  )
}
