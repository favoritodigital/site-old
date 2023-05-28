import Link from 'next/link'

import styles from './styles.module.css'

interface Props {
  id: string
  label: string
  href: string
  handleIsMenuOpen: (arg: boolean) => void
  hasDivider?: boolean
}

export default function MenuItem({ label, href, handleIsMenuOpen, id, hasDivider }: Props) {
  return (
    <li id={id} className={styles.container}>
      <div>
        <Link href={href}>
          <h1 onClick={() => handleIsMenuOpen(false)}>{label}</h1>
        </Link>
      </div>
    </li>
  )
}
