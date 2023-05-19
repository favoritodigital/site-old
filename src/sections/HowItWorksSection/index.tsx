import DownloadButton from '../../components/DownloadButton'
import HowItWorksCarousel from '../../components/HowItWorksCarousel'
import styles from './styles.module.css'

export default function HowItWorksSection() {
  return (
    <div className={styles.container} id='como-funciona-na-pratica-section'>
      <h1 className={styles.title}>como funciona na prática</h1>
      <p className={styles.paragraph}>
        o app é <span>grátis</span> e sem nenhum cadastro! após baixar, você já consegue
      </p>
      <div className={styles.carousel}>
        <HowItWorksCarousel />
      </div>
      <div className={styles.btn}>
        <DownloadButton text={'baixe o app e aproveite'} />
      </div>
    </div>
  )
}
