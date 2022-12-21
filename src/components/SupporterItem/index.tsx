import Image from 'next/image'

import styles from './styles.module.css'

interface Props {
  name: string
  imagePath: string
  url: string
  width: number
  height: number
}

export default function SupporterItem({ name, imagePath, url, width, height }: Props) {
  return (
    <a href={url} className={styles.supporter} target='_blank' rel='noreferrer'>
      <div className={styles.supporterImage}>
        <Image
          loading='eager'
          layout='responsive'
          width={width}
          height={height}
          src={imagePath}
          alt={`imagem do apoiador ${name}`}
        />
      </div>
    </a>
  )
}
