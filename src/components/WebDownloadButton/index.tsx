import { useState } from 'react'
import Image from 'next/image'

import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../../repositories/constants'

import styles from './styles.module.css'

interface Props {
  text: string
  header?: boolean
}

export function WebDownloadButton({ text, header }: Props) {
  const [clicked, handleClicked] = useState(false)

  return (
    <div
      className={header ? styles.headerContainer : styles.container}
      onClick={() => handleClicked(!clicked)}
      onMouseLeave={() => handleClicked(false)}
    >
      <div className={clicked ? styles.clickedSlider : styles.slider}>
        <div className={header ? styles.headerAlt : styles.alt}>
          <a href={APP_STORE_URL} target='_blank' rel='noreferrer'>
            <p className={header ? styles.headerText : styles.text}>iOS</p>
          </a>
          <a href={GOOGLE_PLAY_URL} target='_blank' rel='noreferrer'>
            <p className={header ? styles.headerText : styles.text}>Android</p>
          </a>
        </div>
        <div className={header ? styles.headerStandart : styles.standart}>
          <div className={styles.svg}>
            <Image
              className={styles.svg}
              src='/images/icons/download.svg'
              alt='ícone de download'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <p className={header ? styles.headerText : styles.text}>{text}</p>
        </div>
      </div>
    </div>
  )
}
