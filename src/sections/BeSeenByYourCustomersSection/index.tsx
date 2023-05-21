import WhatsappButton from '../../components/WhatsappButton'
import styles from './styles.module.css'

export default function BeSeenByYourCustomersSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>seja visto pelo seu cliente ideal a partir de hoje!</h1>
      <div className={styles.form}>
        <iframe src='https://app.pipefy.com/public/form/76Hk7joU?embedded=true'></iframe>
      </div>
      <p className={styles.paragraph}>ou se preferir, clique no botão abaixo e fale conosco</p>
      <WhatsappButton text='quero me cadastrar' />
    </div>
  )
}
