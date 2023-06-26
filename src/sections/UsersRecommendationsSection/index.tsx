import { isMobile } from 'react-device-detect'

import { DownloadButton } from '../../components/DownloadButton'
import { WebDownloadButton } from '../../components/WebDownloadButton'
import { UsersRecommendationCarousel } from '../../components/UsersRecommendationCarousel'

import { STORE_RATING, STORE_RATING_COUNT } from '../../repositories/constants'

import styles from './styles.module.css'

export function UsersRecommendationsSection() {
  return (
    <div id='quem-usa-recomenda-section' className={styles.container}>
      <h1 className={styles.title}>quem usa, recomenda</h1>
      <p className={styles.paragraph}>
        somos {STORE_RATING} estrelas na App Store e na Google Play, com{' '}
        <span>+ de {STORE_RATING_COUNT} avaliações</span>!
      </p>
      <div className={styles.carousel}>
        <UsersRecommendationCarousel />
      </div>
      <div className={styles.btn}>
        {isMobile ? (
          <DownloadButton text={'baixe agora'} />
        ) : (
          <WebDownloadButton text={'baixe agora'} />
        )}
      </div>
    </div>
  )
}
