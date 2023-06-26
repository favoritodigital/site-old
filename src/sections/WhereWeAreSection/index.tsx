import 'swiper/css'
import 'swiper/css/pagination'

import MapIcon from '/public/images/ilustrations/south-map-with-arrows.svg'

import { CAPITAL_REGION_COUNT, REGION_COUNT } from '../../repositories/constants'

import styles from './styles.module.css'

export function WhereWeAreSection() {
  return (
    <div id='onde-estamos-section' className={styles.container}>
      <h1 className={styles.title}>onde estamos</h1>
      <p className={styles.paragraph}>
        até o momento, nosso app está presente em {REGION_COUNT} regiões do Brasil, incluindo{' '}
        {CAPITAL_REGION_COUNT} {`${CAPITAL_REGION_COUNT === 1 ? 'capital' : 'capitais'}`}
      </p>
      <div className={styles.illustration}>
        <div className={styles.vector}>
          <MapIcon />
        </div>
        <p className={styles.SCItens}>
          - Joinville
          <br />
          - Jaraguá do Sul
          <br />
          - Florianópolis
          <br />- Criciúma
        </p>
        <p className={styles.RSItens}>- Lajeado</p>
      </div>
    </div>
  )
}
