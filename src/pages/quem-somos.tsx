import Head from 'next/head'

import { AStartupThatCameToHelpSection } from '../sections/AStartupThatCameToHelpSection'
import { OurPathSection } from '../sections/OurPathSection'
import { SupportersSection } from '../sections/SupportersSection'

export default function WhoWeAre() {
  return (
    <>
      <Head>
        <title>quem somos | Que Barbada</title>
      </Head>
      <AStartupThatCameToHelpSection />
      <OurPathSection />
      <SupportersSection />
    </>
  )
}
