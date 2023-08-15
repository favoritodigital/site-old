import Image from 'next/image'

import styles from './styles.module.css'

import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../../repositories/constants'

interface Props {
  type: 'appstore' | 'googleplay'
}

export function StoreDownloadButton({ type }: Props) {
  return (
    <a
      href={type === 'appstore' ? APP_STORE_URL : GOOGLE_PLAY_URL}
      target='_blank'
      rel='noreferrer'
      className={styles.button}
    >
      <Image
        priority
        layout='fill'
        objectFit='contain'
        src={`/images/brands/${type}.png`}
        alt={type}
      />
    </a>
  )
}
