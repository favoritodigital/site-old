import { useContext } from 'react'
import { useRouter } from 'next/router'

import Header, { BadgePages } from '../../components/Header'
import Footer from '../../components/Footer'
import CookiesMessage from '../../components/CookiesMessage'

import { CookiesContext } from '../../contexts/CookiesContext'

interface Props {
  children: React.ReactNode
}

export default function BaseLayout({ children }: Props) {
  const router = useRouter()
  const { cookiesIsEnabled } = useContext(CookiesContext)

  console.log(cookiesIsEnabled)

  return (
    <div>
      <Header badge={router.pathname as BadgePages} />
      {!cookiesIsEnabled && <CookiesMessage />}
      {children}
      <Footer />
    </div>
  )
}
