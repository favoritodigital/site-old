import Image from 'next/image'

import { ONE_LINK_URL } from '../../repositories/constants'

import styles from './styles.module.css'

interface Props {
  text: string
}

export function DownloadButton({ text }: Props) {
  return (
    <a href={ONE_LINK_URL} target='_blank' rel='noreferrer'>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.svg}>
            <Image
              src='/images/icons/download.svg'
              alt='Ícone de download'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </a>
  )
}
