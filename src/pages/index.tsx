import Head from 'next/head'

import IntroductionSection from '../sections/IntroductionSection'
import ContentSection from '../sections/ContentSection'
import CustomersSection from '../sections/CustomersSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import SupportersSection from '../sections/SupportersSection'
import InviteSection from '../sections/InviteSection'
import QuebarbadaNaMidia from '../sections/QueBarbadaNaMidiaSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Que Barbada - a bússula do rolê</title>
      </Head>
      <IntroductionSection />
      <ContentSection />
      <QuebarbadaNaMidia />
      <CustomersSection />
      <TestimonialsSection />
      <SupportersSection />
      <InviteSection />
    </>
  )
}
