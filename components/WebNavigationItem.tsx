import Link from 'next/link'

interface WebNavigationProps {
  href: string
  label: string
}

export default function WebNavigationItem({ href, label }: WebNavigationProps) {
  return (
    <Link href={href}>
      <h1>{label}</h1>
    </Link>
  )
}
