import styles from './styles.module.css'

export default function LetsWriteHistoryTogetherSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>bora construir uma história de sucesso juntos?</h1>
      <p className={styles.paragraph}>
        preencha o formulário abaixo e a nossa equipe entrará em contato com você
      </p>
      <div className={styles.form}>
        <iframe src='https://app.pipefy.com/public/form/76Hk7joU?embedded=true'></iframe>
      </div>
    </div>
  )
}
