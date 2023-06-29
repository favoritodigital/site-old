import styles from './styles.module.css'

export function WhoAlreadyMadeItHappenSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>quem já fez acontecer</h1>
      <iframe className={styles.video} src='https://www.youtube.com/embed/2W-KDA4F1Ng' />
    </div>
  )
}
