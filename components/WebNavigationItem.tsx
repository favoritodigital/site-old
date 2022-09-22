// NEXT
import Link from 'next/link'

// TYPES
interface WebNavigationProps {
  href: string
  label: string
  HasDot: boolean
}

// WEB NAVIGATION ITEM
export default function WebNavigationItem({
  href,
  label,
  HasDot
}: WebNavigationProps) {
  return (
    <div className="webnavigation-item">
      <Link href={href}>
        <a>
          <h1>{label}</h1>
        </a>
      </Link>
      <div className={`header-menu-dot ${HasDot && 'visible'}`}></div>
    </div>
  )
}
