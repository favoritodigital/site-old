import DownloadIcon from '../../../public/images/icons/download.svg'

import styles from './styles.module.css'

interface Props {
  text: string
}

export function WebDownloadButton({ text }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.alt}>
          <a
            href='https://apps.apple.com/br/app/que-barbada/id1598991618'
            target='_blank'
            rel='noreferrer'
          >
            <p className={styles.text}>iOs</p>
          </a>
          <a
            href='https://play.google.com/store/apps/details?id=com.quebarbada.quebarbada'
            target='_blank'
            rel='noreferrer'
          >
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
