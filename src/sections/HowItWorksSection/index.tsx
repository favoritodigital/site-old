import { isMobile } from 'react-device-detect'

import { DownloadButton } from '../../components/DownloadButton'
import { HowItWorksCarousel } from '../../components/HowItWorksCarousel'
import { WebDownloadButton } from '../../components/WebDownloadButton'

import styles from './styles.module.css'

export function HowItWorksSection() {
  return (
    <div className={styles.container} id='como-funciona-na-pratica-section'>
      <h1 className={styles.title}>como funciona na prática</h1>
      <p className={styles.paragraph}>
        o app é <span>grátis</span> e sem nenhum cadastro! após baixar, você já consegue:
      </p>
      <div className={styles.carousel}>
        <HowItWorksCarousel />
      </div>
      <div className={styles.btn}>
        {isMobile ? (
          <DownloadButton text={'baixe o app e aproveite'} />
        ) : (
          <WebDownloadButton text={'baixe o app e aproveite'} />
        )}
      </div>
    </div>
  )
}
