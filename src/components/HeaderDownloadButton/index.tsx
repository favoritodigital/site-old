import DownloadIcon from '../../../public/images/icons/download.svg'

import styles from './styles.module.css'

interface Props {
  text: string
}

export function HeaderDownloadButton({ text }: Props) {
  return (
    <a href='https://onelink.quebarbada.com/ykhN/50t22qt3' target='_blank' rel='noreferrer'>
      <div className={styles.container}>
        <div className={styles.content}>
          <DownloadIcon />
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </a>
  )
}
