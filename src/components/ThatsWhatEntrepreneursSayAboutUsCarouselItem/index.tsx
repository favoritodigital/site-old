import Image from 'next/image'

import styles from './styles.module.css'

interface Props {
  text: string
  name: string
  file: string
  height: number
  width: number
}

export default function ThatsWhatEntrepreneursSayAboutUsCarouselItem({
  text,
  name,
  file,
  height,
  width,
}: Props) {
  return (
    <div className={styles.slide}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            loading='eager'
            layout='responsive'
            width={width}
            height={height}
            src={`/images/establishments/${file}`}
            alt={`Foto do(a) ${name}`}
            objectFit='cover'
          />
        </div>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}
