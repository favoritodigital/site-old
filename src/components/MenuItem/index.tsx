import Link from 'next/link'

import styles from './MenuItem.module.css'

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
      className={`${background === 'light' ? styles.navigationLight : styles.navigationDark}${
        hasShadow ? ` ${styles.boxShadow}` : ''
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
