import Head from 'next/head'

import BePartnerSection from '../sections/BePartnerSection'

import ContactButton from '../components/ContactButton'

export default function BePartner() {
  return (
    <>
      <Head>
        <title>seja parceiro | Que Barbada</title>
      </Head>
      <ContactButton />
      <BePartnerSection />
    </>
  )
}
