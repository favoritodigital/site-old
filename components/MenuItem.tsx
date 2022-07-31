import Link from 'next/link'

interface Props {
  label: string
  href: string
  hasShadow?: boolean
  background: 'dark' | 'light'
  handleIsMenuOpen: (arg: boolean) => void
}

export default function MenuItem({
  label,
  href,
  hasShadow,
  background,
  handleIsMenuOpen
}: Props) {
  return (
    <li
      className={`${
        background === 'light' ? 'navigation_2' : 'navigation_1'
      } container${hasShadow && ' box_shadow'}`}
    >
      <div>
        <Link href={href}>
          <h1 onClick={() => handleIsMenuOpen(false)}>{label}</h1>
        </Link>
      </div>
    </li>
  )
}
