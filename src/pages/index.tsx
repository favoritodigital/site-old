// NEXT
import Head from 'next/head'

// COMPONENTS
import Header from '../components/Header'

// SECTIONS
import InicioSection from '../sections/IntroductionSection'
import ComoEncontrarSection from '../sections/ContentSection'
import ClientesSection from '../sections/CustomersSection'
import DepoimentosSection from '../sections/TestimonialsSection'
import ApoiadoresSection from '../sections/SupportersSection'
import Invite from '../components/Invite'
import Footer from '../components/Footer'

// HOME
export default function Home() {
  return (
    <>
      <Head>
        <title>Que Barbada - a bússula do rolê</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header Dot='home' />
      <InicioSection />
      <ComoEncontrarSection />
      <ClientesSection />
      <DepoimentosSection />
      <ApoiadoresSection />
      <Invite />
      <Footer />
    </>
  )
}
