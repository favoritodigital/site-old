import Image from 'next/image'

import styles from './styles.module.css'

interface Props {
  text: string
}

export function WhatsappButton({ text }: Props) {
  return (
    <a
      href='https://wa.me/5547997536595?text=Ol%C3%A1%20Que%20Barbada!%20J%C3%A1%20verifiquei%20as%20informa%C3%A7%C3%B5es%20no%20site%20de%20voc%C3%AAs%2C%20por%C3%A9m%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20antes%20de%20cadastrar%20o%20meu%20estabelecimento'
      target='_blank'
      rel='noreferrer'
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.svg}>
            <Image
              src='/images/brands/social-medias/whatsapp.svg'
              alt='Ícone do Whatsapp'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </a>
  )
}
