import { WhatsappButton } from '../../components/WhatsappButton'

import styles from './styles.module.css'

export function BeSeenByYourCustomersSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>seja visto pelo seu cliente ideal a partir de hoje!</h1>
      <p className={styles.paragraph}>
        preencha o formulário abaixo e a nossa equipe entrará em contato com você
      </p>
      <div className={styles.form}>
        <script
          src='static/bitrix-estabelecimento-form.js'
          data-b24-form='inline/14/vle4l0'
          data-skip-moving='true'
          defer
        />
      </div>
      <p className={styles.paragraph}>ou se preferir, clique no botão abaixo e fale conosco</p>
      <WhatsappButton text='quero me cadastrar' />
    </div>
  )
}
