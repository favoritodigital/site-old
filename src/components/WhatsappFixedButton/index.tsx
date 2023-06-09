import WhatsappIcon from '../../../public/images/brands/social-medias/whatsapp.svg'

import styles from './styles.module.css'

export default function WhatsappFixedButton() {
  return (
    <a className={styles.container} href='https://wa.link/6lv4bz' target='_blank' rel='noreferrer'>
      <WhatsappIcon />
    </a>
  )
}
