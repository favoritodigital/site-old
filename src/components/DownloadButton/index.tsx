import DownloadIcon from '../../../public/images/icons/download.svg'

import styles from './styles.module.css'

interface Props {
  text: string
}

export default function DownloadButton({ text }: Props) {
  return (
    <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
      <div className={styles.container}>
        <div className={styles.content}>
          <DownloadIcon />
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </a>
  )
}
