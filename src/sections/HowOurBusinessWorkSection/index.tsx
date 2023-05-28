import DownloadButton from '../../components/DownloadButton'
import HowOurBusinessWorkCarousel from '../../components/HowOurBusinessWorkCarousel'

import styles from './styles.module.css'

export default function HowOurBusinessWorkSection() {
  return (
    <div id='how-our-business-work' className={styles.container}>
      <h1 className={styles.title}>como funciona o nosso negócio</h1>
      <div className={styles.carousel}>
        <HowOurBusinessWorkCarousel />
      </div>
      <div className={styles.btn}>
        <DownloadButton text='baixe o app e confira' />
      </div>
    </div>
  )
}
