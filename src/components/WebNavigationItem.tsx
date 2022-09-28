import Link from 'next/link'

interface Props {
  href: string
  label: string
  hasBadge: boolean
}

export default function WebNavigationItem({ href, label, hasBadge }: Props) {
  return (
    <div className='webnavigation-item'>
      <Link href={href}>
        <a>
          <h1>{label}</h1>
        </a>
      </Link>
      <div className={`header-menu-badge ${hasBadge && 'visible'}`}></div>
    </div>
  )
}
