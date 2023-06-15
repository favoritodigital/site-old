import Image from 'next/image'

import styles from './styles.module.css'

interface Props {
  type: 'appstore' | 'googleplay'
}

export function StoreDownloadButton({ type }: Props) {
  return (
    <a
      href={
        type === 'appstore'
          ? 'https://apps.apple.com/br/app/que-barbada/id1598991618'
          : 'https://play.google.com/store/apps/details?id=com.quebarbada.quebarbada'
      }
      target='_blank'
      rel='noreferrer'
    >
      {type === 'appstore' ? (
        <div className={styles.button}>
          <Image
            priority
            layout='responsive'
            width={992}
            height={325}
            src='/images/brands/appstore.png'
            alt='appstore'
          />
        </div>
      ) : (
        <div className={styles.button}>
          <Image
            priority
            layout='responsive'
            width={992}
            height={325}
            src='/images/brands/googleplay.png'
            alt='googleplay'
          />
        </div>
      )}
    </a>
  )
}
