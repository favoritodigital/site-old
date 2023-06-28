import styles from './styles.module.css'

export function LetsWriteHistoryTogetherSection() {
  return (
    <div className={styles.container}>
      <div id='bora-construir-uma-historia' className={styles.pin} />
      <h1 className={styles.title}>bora construir uma história de sucesso juntos?</h1>
      <p className={styles.paragraph}>
        preencha o formulário abaixo e a nossa equipe entrará em contato com você
      </p>
      <div className={styles.form}>
        <script
          src='/static/bitrix-franqueado-form.js'
          data-b24-form='inline/10/esgoms'
          data-skip-moving='true'
          defer
        />
      </div>
    </div>
  )
}
