import NotebookIcon from '../../../public/images/icons/notebook.svg'
import CupIcon from '../../../public/images/icons/cup.svg'
import BossIcon from '../../../public/images/icons/boss.svg'
import CheckboxIcon from '../../../public/images/icons/checkbox.svg'
import LandmarkIcon from '../../../public/images/icons/landmark.svg'
import MoneybagIcon from '../../../public/images/icons/moneybag.svg'

import styles from './styles.module.css'

export function EnjoyOurExclusiveAdvantagesSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>aproveite nossas vantagens exclusivas</h1>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <NotebookIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              1. <span className={styles.purple}>negócio digital</span>
            </span>
            <br />
            sem necessidade de escritório, estoques ou funcionários
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <CupIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              2. <span className={styles.purple}>produto inovador</span>
            </span>
            <br />
            aplicativo premiado e sem concorrentes diretos
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <BossIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              3. <span className={styles.purple}>seja seu próprio chefe</span>
            </span>
            <br />
            gerencie sua região de casa, nos seus horários
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <CheckboxIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              4. <span className={styles.purple}>estratégia validada</span>
            </span>
            <br />
            treinamento individualizado e suporte contínuo
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <LandmarkIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              5. <span className={styles.purple}>exclusividade territorial</span>
            </span>
            <br />
            atendimento na sua cidade e regiões próximas
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <MoneybagIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              6. <span className={styles.purple}>baixo risco</span>
            </span>
            <br />
            pode demorar além do previsto, mas o valor investido retorna pra você
          </p>
        </div>
      </div>
    </div>
  )
}
