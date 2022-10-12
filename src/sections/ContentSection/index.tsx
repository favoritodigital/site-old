import SlidesContent from '../../components/SlidesContent'
import styles from './styles.module.css'

export default function ContentSection() {
  return (
    <div id='como-encontrar-section' className={styles.container}>
      <div id='como-encontrar' className={styles.pin}></div>
      <div className={styles.mobileContent}>
        <h1 className={styles.sectionTitle}>encontre seu rolê em 30 segundos</h1>
        <div className={styles.sectionContent}>
          <SlidesContent />
          <p>
            utilize nossos <span>filtros</span> para descobrir os rolês com promoções, música ao
            vivo, espaço kids, aceita animais, entre outras opções
          </p>
        </div>
      </div>
      <div className={styles.webContent}>
        <div className={styles.sectionContent}>
          <div className={styles.leftColumn}>
            <SlidesContent />
          </div>
          <div className={styles.rightColumn}>
            <h1 className={styles.sectionTitle}>encontre seu rolê em 30 segundos</h1>
            <p>
              utilize nossos <span>filtros</span> para descobrir os rolês com promoções, música ao
              vivo, espaço kids, aceita animais, entre outras opções
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
