import Image from 'next/image'

import styles from './styles.module.css'

interface Props {
  testimonial: string
  owner: string
  imagePath: string
  width: number
  height: number
}

export default function TestimonialItem({ testimonial, owner, imagePath, width, height }: Props) {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonyPerson}>
        <div className={styles.testimonialImage}>
          <Image
            loading='eager'
            layout='responsive'
            width={width}
            height={height}
            src={imagePath}
            alt={`Foto do ${owner}`}
            objectFit='cover'
          />
        </div>
        <h1 className={styles.testimonyName}>{owner}</h1>
      </div>
      <p className={styles.testimonyText}>{testimonial}</p>
    </div>
  )
}
