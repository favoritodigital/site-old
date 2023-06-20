import DownloadIcon from '../../../public/images/icons/download.svg'
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
          <DownloadIcon />
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </a>
  )
}
