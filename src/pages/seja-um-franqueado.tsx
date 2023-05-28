import Head from 'next/head'

import YouCanProfitWithEachBusinessSection from '../sections/YouCanProfitWithEachBusinessSection'
import HowOurBusinessWorkSection from '../sections/HowOurBusinessWorkSection'
import AProfitableWaySection from '../sections/AProfitableWaySection'
import AchievementsSoFarSection from '../sections/AchievementsSoFarSection'

export default function BeAFranchisee() {
  return (
    <>
      <Head>
        <title>seja um franquado | Que Barbada</title>
      </Head>
      <YouCanProfitWithEachBusinessSection />
      <HowOurBusinessWorkSection />
      <AProfitableWaySection />
      <AchievementsSoFarSection />
    </>
  )
}
