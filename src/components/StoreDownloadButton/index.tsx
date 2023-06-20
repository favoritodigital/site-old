import Image from 'next/image'

import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../../repositories/constants'

import styles from './styles.module.css'

interface Props {
  type: 'appstore' | 'googleplay'
}

export function StoreDownloadButton({ type }: Props) {
  return (
    <a
      href={type === 'appstore' ? APP_STORE_URL : GOOGLE_PLAY_URL}
      target='_blank'
      rel='noreferrer'
    >
      <div className={styles.button}>
        <Image
          priority
          layout='responsive'
          width={992}
          height={325}
          src={`/images/brands/${type}.png`}
          alt={type}
        />
      </div>
    </a>
  )
}
