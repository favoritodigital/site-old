import styles from './styles.module.css'

export default function AchievementsSoFarSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>nas primeiras 4 cidades já conquistamos</h1>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.highlight}>5</p>
          <p className={styles.paragraph}>
            <span>estrelas</span> na App Store
            <br />e na Google Play
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.highlight}>800+</p>
          <p className={styles.paragraph}>
            <span>avaliações</span> de
            <br />
            usuários satisfeitos
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.highlight}>25 mil+</p>
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
