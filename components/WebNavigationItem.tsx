// NEXT
import Link from 'next/link'

// TYPES
interface WebNavigationProps {
  href: string
  label: string
}

// WEB NAVIGATION ITEM
export default function WebNavigationItem({ href, label }: WebNavigationProps) {
  return (
    <Link href={href}>
      <h1>{label}</h1>
    </Link>
  )
}
