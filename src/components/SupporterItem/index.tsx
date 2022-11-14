import Image from 'next/image'

import styles from './styles.module.css'
interface Props {
  name: string
  imageFileName: string
  url: string
  width: number
  height: number
}

export default function SupporterItem({ name, imageFileName, url, width, height }: Props) {
  return (
    <a href={url} className={styles.supporter} target='_blank' rel='noreferrer'>
      <div className={styles.supporterImage}>
        <Image
          loading='eager'
          layout='responsive'
          width={width}
          height={height}
          src={`/images/${imageFileName}`}
          alt={`imagem do apoiador ${name}`}
        />
      </div>
    </a>
  )
}
