import Link from 'next/link'

import styles from './styles.module.css'

interface Props {
  href: string
  label: string
  hasBadge: boolean
}

export function WebNavigationItem({ href, label, hasBadge }: Props) {
  return (
    <div className={styles.webnavigationItem}>
      <Link href={href}>
        <a>
          <h1 className={`${hasBadge && `${styles.bold}`}`}>{label}</h1>
        </a>
      </Link>
      <div className={`${styles.headerMenuBagde} ${hasBadge && ` ${styles.visible}`}`}></div>
    </div>
  )
}
