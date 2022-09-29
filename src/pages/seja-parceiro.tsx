import Head from 'next/head'

import Footer from '../components/Footer'

import BePartnerSection from '../sections/BePartnerSection'

import WhatsappButton from '../components/WhatsappButton'

export default function BePartner() {
  return (
    <>
      <Head>
        <title>seja parceiro | Que Barbada</title>
      </Head>
      <WhatsappButton />
      <BePartnerSection />
      <Footer />
    </>
  )
}
