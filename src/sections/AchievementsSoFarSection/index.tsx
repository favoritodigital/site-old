import styles from './styles.module.css'

import {
  REGION_COUNT,
  STORE_RATING,
  STORE_RATING_COUNT,
  THOUSANDS_MONTHLY_ACCESS,
} from '../../repositories/constants'

export function AchievementsSoFarSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>nas primeiras {REGION_COUNT} cidades já conquistamos</h1>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.highlight}>{STORE_RATING}</p>
          <p className={styles.paragraph}>
            <span>estrelas</span> na App Store
            <br />e na Google Play
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.highlight}>{STORE_RATING_COUNT}+</p>
          <p className={styles.paragraph}>
            <span>avaliações</span> de
            <br />
            usuários satisfeitos
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.highlight}>{THOUSANDS_MONTHLY_ACCESS} mil+</p>
          <p className={styles.paragraph}>
            <span>acessos</span> todos
            <br />
            os meses
          </p>
        </div>
      </div>
    </div>
  )
}
