import Head from 'next/head'

import { StandOutSection } from '../sections/StandOutSection'
import { WhatOurAppDeliversSection } from '../sections/WhatOurAppDeliversSection'
import { WeDoEverythingForYouSection } from '../sections/WeDoEverythingForYouSection'
import { ThatsWhatOurPartnersSayAboutUsSection } from '../sections/ThatsWhatOurPartnersSayAboutUsSection'
import { BeSeenByYourCustomersSection } from '../sections/BeSeenByYourCustomersSection'

export default function RegisterEstablishment() {
  return (
    <>
      <Head>
        <title>cadastre o seu estabelecimento | Que Barbada</title>
      </Head>
      <StandOutSection />
      <WhatOurAppDeliversSection />
      <WeDoEverythingForYouSection />
      <ThatsWhatOurPartnersSayAboutUsSection />
      <BeSeenByYourCustomersSection />
    </>
  )
}
