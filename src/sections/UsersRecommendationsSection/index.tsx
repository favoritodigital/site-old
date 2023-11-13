import styles from './styles.module.css'

import { DownloadButton } from '../../components/DownloadButton'
import { UsersRecommendationCarousel } from '../../components/UsersRecommendationCarousel'
import { WebDownloadButton } from '../../components/WebDownloadButton'

import { useIsMobile } from '../../hooks/useIsMobile'

import { STORE_RATING, STORE_RATING_COUNT } from '../../repositories/constants'

export function UsersRecommendationsSection() {
  const isMobile = useIsMobile()

  return (
    <div id='quem-usa-recomenda-section' className={styles.container}>
      <h1 className={styles.title}>Quem usa, recomenda</h1>
      <p className={styles.paragraph}>
        Somos {STORE_RATING} estrelas na App Store e na Google Play, com{' '}
        <span>+ de {STORE_RATING_COUNT} avaliações</span>!
      </p>
      <div className={styles.carousel}>
        <UsersRecommendationCarousel />
      </div>
      <div className={styles.btn}>
        {isMobile ? (
          <DownloadButton text={'Baixe agora'} />
        ) : (
          <WebDownloadButton text={'Baixe agora'} />
        )}
      </div>
    </div>
  )
}
