import Head from 'next/head'

import AStartupThatCameToHelpSection from '../sections/AStartupThatCameToHelpSection'
import OurPathSection from '../sections/OurPathSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>quem somos | Que Barbada</title>
      </Head>
      <AStartupThatCameToHelpSection />
      <OurPathSection />
    </>
  )
}
