import Head from 'next/head'

import Header from '../components/Header'

import IntroductionSection from '../sections/IntroductionSection'
import ContentSection from '../sections/ContentSection'
import CustomersSection from '../sections/CustomersSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import SupportersSection from '../sections/SupportersSection'
import Invite from '../components/Invite'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Que Barbada - a bússula do rolê</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header badge='home' />
      <IntroductionSection />
      <ContentSection />
      <CustomersSection />
      <TestimonialsSection />
      <SupportersSection />
      <Invite />
      <Footer />
    </>
  )
}
