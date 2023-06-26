import WhatsappIcon from '/public/images/brands/social-medias/whatsapp.svg'

import styles from './styles.module.css'

export function WhatsappFixedButton() {
  return (
    <a
      className={styles.container}
      href='https://wa.me/5547997536595'
      target='_blank'
      rel='noreferrer'
    >
      <WhatsappIcon />
    </a>
  )
}
