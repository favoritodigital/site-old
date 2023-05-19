import Head from 'next/head'

import IntroductionSection from '../sections/IntroductionSection'
import NoMoreQuestions from '../sections/NoMoreQuestions'
import ContentSection from '../sections/ContentSection'
import CustomersSection from '../sections/CustomersSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import SupportersSection from '../sections/SupportersSection'
import InviteSection from '../sections/InviteSection'
import InTheMediaSection from '../sections/InTheMediaSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Que Barbada - a bússola do rolê</title>
      </Head>
      <IntroductionSection />
      <NoMoreQuestions />
      <ContentSection />
      <InTheMediaSection />
      <CustomersSection />
      <TestimonialsSection />
      <SupportersSection />
      <InviteSection />
    </>
  )
}
