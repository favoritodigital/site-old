import Image from 'next/image'

import styles from './styles.module.css'

interface Props {
  name: string
  imagePath: string
  url: string
}

export function SupporterItem({ name, imagePath, url }: Props) {
  return (
    <a href={url} className={styles.supporter} target='_blank' rel='noreferrer'>
      <div className={styles.image}>
        <Image
          loading='eager'
          layout='fill'
          objectFit='contain'
          src={imagePath}
          alt={`imagem do apoiador ${name}`}
        />
      </div>
    </a>
  )
}
