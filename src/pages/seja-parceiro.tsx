import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'

import BePartnerSection from '../sections/BePartnerSection'

import WhatsappButton from '../components/WhatsappButton'

export default function Sejaparceiro() {
  return (
    <>
      <Head>
        <title>seja parceiro | Que Barbada</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header badge='seja-parceiro' />
      <WhatsappButton />
      <BePartnerSection />
      <Footer />
    </>
  )
}
