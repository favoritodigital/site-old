import Head from 'next/head'

import { HowItWorksSection } from '../sections/HowItWorksSection'
import { InTheMediaSection } from '../sections/InTheMediaSection'
import { IntroductionSection } from '../sections/IntroductionSection'
import { NoMoreQuestionsSection } from '../sections/NoMoreQuestionsSection'
import { UsersRecommendationsSection } from '../sections/UsersRecommendationsSection'
import { WhereWeAreSection } from '../sections/WhereWeAreSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Que Barbada - a bússola do rolê</title>
      </Head>
      <IntroductionSection />
      <NoMoreQuestionsSection />
      <HowItWorksSection />
      <UsersRecommendationsSection />
      <WhereWeAreSection />
      <InTheMediaSection />
    </>
  )
}
