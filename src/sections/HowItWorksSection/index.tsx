import styles from './styles.module.css'

import { DownloadButton } from '../../components/DownloadButton'
import { HowItWorksCarousel } from '../../components/HowItWorksCarousel'
import { WebDownloadButton } from '../../components/WebDownloadButton'

import { useIsMobile } from '../../hooks/useIsMobile'

export function HowItWorksSection() {
  const isMobile = useIsMobile()

  return (
    <div className={styles.container} id='como-funciona-na-pratica-section'>
      <h1 className={styles.title}>Como funciona na prática</h1>
      <p className={styles.paragraph}>
        O app é <span>grátis</span> e sem nenhum cadastro! após baixar, você já consegue:
      </p>
      <div className={styles.carousel}>
        <HowItWorksCarousel />
      </div>
      <div className={styles.btn}>
        {isMobile ? (
          <DownloadButton text={'Baixe o app e aproveite'} />
        ) : (
          <WebDownloadButton text={'Baixe o app e aproveite'} />
        )}
      </div>
    </div>
  )
}
