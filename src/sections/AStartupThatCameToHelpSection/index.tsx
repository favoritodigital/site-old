import styles from './styles.module.css'

import Ilustration1 from '../../../public/images/ilustrations/uma-start-up-que-veio-para-ajudar_1.svg'
import Ilustration2 from '../../../public/images/ilustrations/uma-start-up-que-veio-para-ajudar_2.svg'
import Ilustration3 from '../../../public/images/ilustrations/uma-start-up-que-veio-para-ajudar_3.svg'

export function AStartupThatCameToHelpSection() {
  return (
    <div id='uma-start-up-que-veio-para-ajudar-section' className={styles.container}>
      <h1 className={styles.title}>uma startup que veio para ajudar...</h1>
      <div className={styles.content}>
        <div className={styles.card1}>
          <div className={styles.ilustration}>
            <Ilustration1 />
          </div>
          <p className={styles.paragraph}>
            pessoas a encontrarem locais para comer, beber e se divertir com facilidade
          </p>
        </div>
        <div className={styles.card2}>
          <div className={styles.ilustration}>
            <Ilustration2 />
          </div>
          <p className={styles.paragraph}>
            bares, pubs e restaurantes a melhorarem a experiência do cliente pela comunicação
          </p>
        </div>
        <div className={styles.card3}>
          <div className={styles.ilustration}>
            <Ilustration3 />
          </div>
          <p className={styles.paragraph}>
            franqueados do app a serem donos do próprio negócio de forma acessível
          </p>
        </div>
      </div>
    </div>
  )
}
