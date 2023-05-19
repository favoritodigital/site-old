import Head from 'next/head'

import IntroductionSection from '../sections/IntroductionSection'
import NoMoreQuestions from '../sections/NoMoreQuestionsSection'
import HowItWorksSection from '../sections/HowItWorksSection'
import UsersRecommendationsSection from '../sections/UsersRecommendationsSection'
import WhereWeAreSection from '../sections/WhereWeAreSection'
import InTheMediaSection from '../sections/InTheMediaSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Que Barbada - a bússola do rolê</title>
      </Head>
      <IntroductionSection />
      <NoMoreQuestions />
      <HowItWorksSection />
      <UsersRecommendationsSection />
      <WhereWeAreSection />
      <InTheMediaSection />
    </>
  )
}
