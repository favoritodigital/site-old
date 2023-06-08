import WhatsappIcon from '../../../public/images/brands/social-medias/whatsapp.svg'

import styles from './styles.module.css'

interface Props {
  text: string
}

export default function WhatsappButton({ text }: Props) {
  return (
    <a href='https://wa.link/6lv4bz' target='_blank' rel='noreferrer'>
      <div className={styles.container}>
        <div className={styles.content}>
          <WhatsappIcon />
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </a>
  )
}
