import DownloadIcon from '../../../public/images/icons/download.svg'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../../repositories/constants'

import styles from './styles.module.css'

interface Props {
  text: string
}

export function WebDownloadButton({ text }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.alt}>
          <a href={APP_STORE_URL} target='_blank' rel='noreferrer'>
            <p className={styles.text}>iOS</p>
          </a>
          <a href={GOOGLE_PLAY_URL} target='_blank' rel='noreferrer'>
            <p className={styles.text}>Android</p>
          </a>
        </div>
        <div className={styles.standart}>
          <DownloadIcon />
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  )
}
