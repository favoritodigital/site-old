import { useContext } from 'react'
import { useRouter } from 'next/router'

import { Header, BadgePages } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { WhatsappFixedButton } from '../../components/WhatsappFixedButton'
import { CookiesMessage } from '../../components/CookiesMessage'

import { CookiesContext } from '../../contexts/CookiesContext'

interface Props {
  children: React.ReactNode
}

export function BaseLayout({ children }: Props) {
  const router = useRouter()
  const { cookiesIsEnabled } = useContext(CookiesContext)

  const route = router.pathname as BadgePages

  return (
    <div>
      <Header badge={route} />
      {!cookiesIsEnabled && <CookiesMessage />}
      {children}
      {route !== BadgePages.beFranchisee && <WhatsappFixedButton />}
      <Footer />
    </div>
  )
}
