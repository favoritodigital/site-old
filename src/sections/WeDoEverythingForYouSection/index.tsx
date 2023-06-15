import DownloadButton from '../../components/DownloadButton'
import styles from './styles.module.css'

import LightBulb from '../../../public/images/icons/light-bulb.svg'

export default function WeDoEverythingForYouSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>nós fazemos tudo por você</h1>
      <div className={styles.icon}>
        <LightBulb />
      </div>
      <p className={styles.paragraph}>além do cadastro de informações, também disponibilizamos:</p>
      <div className={styles.secondColumn}>
        <div className={styles.text}>
          <p className={styles.paragraphItem}>✔ relatórios mensais com as suas métricas</p>
          <p className={styles.paragraphItem}>✔ banner dentro do app (sob consulta)</p>
          <p className={styles.paragraphItem}>✔ notificações personalizadas (sob consulta)</p>
        </div>
        <div className={styles.btn}>
          <DownloadButton text={'baixe o app grátis'} />
        </div>
      </div>
    </div>
  )
}
