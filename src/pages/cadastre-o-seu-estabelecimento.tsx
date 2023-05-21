import Head from 'next/head'

import DisclosurePlatformEntrepreneursNeedSection from '../sections/DisclosurePlatformEntrepreneursNeedSection'
import WhatOurAppDeliversSection from '../sections/WhatOurAppDeliversSection'
import WeDoEverythingForYou from '../sections/WeDoEverythingForYouSection'
import ThatsWhatEntrepreneursSayAboutUsSection from '../sections/ThatsWhatEntrepreneursSayAboutUsSection'
import BeSeenByYourCustomersSection from '../sections/BeSeenByYourCustomersSection'

export default function RegisterEstablishment() {
  return (
    <>
      <Head>
        <title>cadastre o seu estabelecimento | Que Barbada</title>
      </Head>
      <DisclosurePlatformEntrepreneursNeedSection />
      <WhatOurAppDeliversSection />
      <WeDoEverythingForYou />
      <ThatsWhatEntrepreneursSayAboutUsSection />
      <BeSeenByYourCustomersSection />
    </>
  )
}
