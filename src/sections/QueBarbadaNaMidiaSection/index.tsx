import styles from './styles.module.css'
import SlidesQueBarbadaNaMidia from '../../components/SlidesQueBarbadaNaMidia'

export default function QuebarbadaNaMidia() {
  return (
    <div className={styles.container} id='que-barbada-na-midia-section'>
      <div className={styles.pin} id='que-barbada-na-midia'></div>

      <h1 className={styles.sectionTitle}>Que Barbada na mídia</h1>
      <SlidesQueBarbadaNaMidia />
    </div>
  )
}
