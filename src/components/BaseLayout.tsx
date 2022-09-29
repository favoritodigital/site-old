import { useRouter } from 'next/router'

import Header, { BadgePages } from './Header'

interface Props {
  children: React.ReactNode
}

export default function BaseLayout({ children }: Props) {
  const router = useRouter()

  return (
    <div>
      <Header badge={router.pathname as BadgePages} />
      {children}
    </div>
  )
}
