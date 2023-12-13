import Image from 'next/image'

import styles from './styles.module.css'

export function WhatsappFixedButton() {
  return (
    <a
      className={styles.button}
      href='https://wa.me/5548996303152'
      target='_blank'
      rel='noreferrer'
    >
      <div className={styles.container}>
        <Image
          src='/images/brands/social-medias/whatsapp.svg'
          alt='logo do Whatsapp'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </a>
  )
}
