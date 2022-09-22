// NEXT
import Head from 'next/head'

// COMPONENTS
import Header from '../components/Header'

// SECTIONS
import InicioSection from '../components/Inicio-section'
import ComoEncontrarSection from '../components/ComoEncontrar-section'
import ClientesSection from '../components/Clientes-section'
import DepoimentosSection from '../components/Depoimentos-section'
import ApoiadoresSection from '../components/Apoiadores-section'
import Invite from '../components/Invite'
import Footer from '../components/Footer'

//HOME
export default function Home() {
  return (
    <>
      <Head>
        <title>Que Barbada</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header Dot="home" />
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
