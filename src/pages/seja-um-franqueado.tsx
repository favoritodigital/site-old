import Head from 'next/head'

import YouCanProfitWithEachBusinessSection from '../sections/YouCanProfitWithEachBusinessSection'
import HowOurBusinessWorkSection from '../sections/HowOurBusinessWorkSection'
import AProfitableWaySection from '../sections/AProfitableWaySection'
import AchievementsSoFarSection from '../sections/AchievementsSoFarSection'
import EnjoyOurExclusiveAdvantagesSection from '../sections/EnjoyOurExclusiveAdvantagesSection'
import WhoAlreadyMadeItHappenSection from '../sections/WhoAlreadyMadeItHappenSection'

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
      <EnjoyOurExclusiveAdvantagesSection />
      <WhoAlreadyMadeItHappenSection />
    </>
  )
}
