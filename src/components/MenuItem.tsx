import Link from 'next/link'

interface Props {
  id: string
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
  handleIsMenuOpen,
  id,
}: Props) {
  return (
    <li
      id={id}
      className={`${background === 'light' ? 'navigation_2' : 'navigation_1'} container${
        hasShadow && ' box_shadow'
      }`}
    >
      <div>
        <Link href={href}>
          <h1 onClick={() => handleIsMenuOpen(false)}>{label}</h1>
        </Link>
      </div>
    </li>
  )
}
