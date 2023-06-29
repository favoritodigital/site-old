import { useIsMobile } from '../../hooks/useIsMobile'

import { DownloadButton } from '../../components/DownloadButton'
import { WebDownloadButton } from '../../components/WebDownloadButton'
import { HowOurBusinessWorkCarousel } from '../../components/HowOurBusinessWorkCarousel'

import styles from './styles.module.css'

export function HowOurBusinessWorkSection() {
  const isMobile = useIsMobile()

  return (
    <div id='how-our-business-work' className={styles.container}>
      <h1 className={styles.title}>como funciona o nosso negócio</h1>
      <div className={styles.carousel}>
        <HowOurBusinessWorkCarousel />
      </div>
      <div className={styles.btn}>
        {isMobile ? (
          <DownloadButton text={'baixe o app e confira'} />
        ) : (
          <WebDownloadButton text={'baixe o app e confira'} />
        )}
      </div>
    </div>
  )
}
