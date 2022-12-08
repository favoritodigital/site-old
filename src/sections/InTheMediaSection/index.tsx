import SlidesInTheMedia from '../../components/SlidesInTheMedia'

import styles from './styles.module.css'

export default function InTheMediaSection() {
  return (
    <div className={styles.container} id='na-midia-section'>
      <div className={styles.pin} id='na-midia'></div>

      <h1 className={styles.sectionTitle}>Que Barbada na mídia</h1>
      <SlidesInTheMedia />
    </div>
  )
}