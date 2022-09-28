// NEXT
import Head from 'next/head'

// COMPONENTS
import Header from '../components/Header'

// SECTIONS
import InicioSection from '../sections/Inicio-section'
import ComoEncontrarSection from '../sections/ComoEncontrar-section'
import ClientesSection from '../sections/Clientes-section'
import DepoimentosSection from '../sections/Depoimentos-section'
import ApoiadoresSection from '../sections/Apoiadores-section'
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
