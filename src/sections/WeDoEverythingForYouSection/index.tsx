import DownloadButton from '../../components/DownloadButton'
import styles from './styles.module.css'

export default function WeDoEverythingForYou() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>nós fazemos tudo por você</h1>
      <div className={styles.text}>
        <p>além do cadastro de informações, também disponibilizamos:</p>
        <p>
          ✔ relatórios mensais com as suas métricas
          <br />✔ banner dentro do app (sob consulta)
          <br />✔ notificações personalizadas (sob consulta)
        </p>
      </div>
      <div className={styles.btn}>
        <DownloadButton text={'baixe o app grátis'} />
      </div>
    </div>
  )
}
