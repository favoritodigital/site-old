import Head from 'next/head'

import { AchievementsSoFarSection } from '../sections/AchievementsSoFarSection'
import { AProfitableWaySection } from '../sections/AProfitableWaySection'
import { EnjoyOurExclusiveAdvantagesSection } from '../sections/EnjoyOurExclusiveAdvantagesSection'
import { HowOurBusinessWorkSection } from '../sections/HowOurBusinessWorkSection'
import { LetsWriteHistoryTogetherSection } from '../sections/LetsWriteHistoryTogetherSection'
import { YouCanProfitWithEachBusinessSection } from '../sections/YouCanProfitWithEachBusinessSection'

export default function BeAFranchisee() {
  return (
    <>
      <Head>
        <title>Seja um franqueado | Favorito</title>
      </Head>
      <YouCanProfitWithEachBusinessSection />
      <HowOurBusinessWorkSection />
      <AProfitableWaySection />
      <AchievementsSoFarSection />
      <EnjoyOurExclusiveAdvantagesSection />
      <LetsWriteHistoryTogetherSection />
    </>
  )
}
