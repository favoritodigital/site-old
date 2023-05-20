import Head from 'next/head'

import DisclosurePlatformEntrepreneursNeedSection from '../sections/DisclosurePlatformEntrepreneursNeedSection'
import WhatOurAppDeliversSection from '../sections/WhatOurAppDeliversSection'
import WeDoEverythingForYou from '../sections/WeDoEverythingForYouSection'

export default function RegisterEstablishment() {
  return (
    <>
      <Head>
        <title>cadastre o seu estabelecimento | Que Barbada</title>
      </Head>
      <DisclosurePlatformEntrepreneursNeedSection />
      <WhatOurAppDeliversSection />
      <WeDoEverythingForYou />
    </>
  )
}
