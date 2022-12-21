import WhatsappIcon from '/public/images/brands/social-medias/whatsapp.svg'

import styles from './styles.module.css'

export default function ContactButton() {
  return (
    <a
      href='https://wa.me/5547997536595'
      target='_blank'
      className={styles.button}
      rel='noreferrer'
    >
      <WhatsappIcon />
    </a>
  )
}
