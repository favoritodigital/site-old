import Head from 'next/head'

import { BeSeenByYourCustomersSection } from '../sections/BeSeenByYourCustomersSection'
import { StandOutSection } from '../sections/StandOutSection'
import { ThatsWhatOurPartnersSayAboutUsSection } from '../sections/ThatsWhatOurPartnersSayAboutUsSection'
import { WeDoEverythingForYouSection } from '../sections/WeDoEverythingForYouSection'
import { WhatOurAppDeliversSection } from '../sections/WhatOurAppDeliversSection'

export default function RegisterEstablishment() {
  return (
    <>
      <Head>
        <title>Cadastre o seu estabelecimento | Favorito</title>
      </Head>
      <StandOutSection />
      <WhatOurAppDeliversSection />
      <WeDoEverythingForYouSection />
      <ThatsWhatOurPartnersSayAboutUsSection />
      <BeSeenByYourCustomersSection />
    </>
  )
}
