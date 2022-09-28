// NEXT
import Head from 'next/head'

// HEADER
import Footer from '../components/Footer'
import Header from '../components/Header'

// SECTIONS
import BePartnerSection from '../sections/BePartnerSection'

// COMPONENTS
import WhatsappButton from '../components/WhatsappButton'

// SEJA PARCEIRO
export default function Sejaparceiro() {
  return (
    <>
      <Head>
        <title>seja parceiro | Que Barbada</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header Dot='seja-parceiro' />
      <WhatsappButton />
      <BePartnerSection />
      <Footer />
    </>
  )
}
