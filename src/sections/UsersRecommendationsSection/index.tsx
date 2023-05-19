import DownloadButton from '../../components/DownloadButton'
import UsersRecommendationCarousel from '../../components/UsersRecommendationCarousel'
import styles from './styles.module.css'

export default function UsersRecommendationsSection() {
  return (
    <div id='quem-usa-recomenda-section' className={styles.container}>
      <h1 className={styles.title}>quem usa, recomenda</h1>
      <p className={styles.paragraph}>
        somo 5 estrelas na App Store e na Google Play, com <span>+ de 750 avaliações</span>!
      </p>
      <div className={styles.carousel}>
        <UsersRecommendationCarousel />
      </div>
      <div className={styles.btn}>
        <DownloadButton text='baixe agora' />
      </div>
    </div>
  )
}
