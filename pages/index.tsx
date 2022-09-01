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
      <Header />
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
