import SlidesCustomers from '../../components/SlidesCustomers'
import styles from './CustomersSection.module.css'

export default function CustomersSection() {
  return (
    <div id='clientes-section' className={styles.container}>
      <div id='clientes' className={styles.pin}></div>
      <h1 className={styles.title}>clientes</h1>
      <div className={styles.content}>
        <SlidesCustomers />
      </div>
    </div>
  )
}
