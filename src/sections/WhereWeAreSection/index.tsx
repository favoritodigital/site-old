import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

import styles from './styles.module.css'

import { CAPITAL_REGION_COUNT, REGION_COUNT } from '../../repositories/constants'

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
          <Image
            src='/images/ilustrations/south-map-with-arrows.svg'
            alt='Imagem do mapa de SC'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <p className={styles.SCItens}>
          • Blumenau
          <br />
          • Criciúma
          <br />
          • Florianópolis
          <br />
          • Jaraguá do Sul
          <br />• Joinville
        </p>
        <p className={styles.RSItens}>
          • Lajeado
          <br />• Porto Alegre
        </p>
      </div>
    </div>
  )
}
