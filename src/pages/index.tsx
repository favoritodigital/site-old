import Head from 'next/head'

import IntroductionSection from '../sections/IntroductionSection'
import NoMoreQuestions from '../sections/NoMoreQuestionsSection'
import HowItWorksSection from '../sections/HowItWorksSection'
import UsersRecommendationsSection from '../sections/UsersRecommendationsSection'
import WhereWeAreSection from '../sections/WhereWeAreSection'

import ContentSection from '../sections/ContentSection'
import CustomersSection from '../sections/CustomersSection'
import SupportersSection from '../sections/SupportersSection'
import InviteSection from '../sections/InviteSection'
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
      <ContentSection />
      <InTheMediaSection />
      <CustomersSection />
      <SupportersSection />
      <InviteSection />
    </>
  )
}
