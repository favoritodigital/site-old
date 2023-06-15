import Image from 'next/image'

import { SlidesInTheMedia } from '../../components/SlidesInTheMedia'
import { news } from '../../repositories/news'

import styles from './styles.module.css'

export function InTheMediaSection() {
  return (
    <div id='na-midia-section' className={styles.container}>
      <h1 className={styles.title}>Que Barbada na mídia</h1>
      <div className={styles.carousel}>
        <SlidesInTheMedia />
      </div>
      <div className={styles.noCarousel}>
        {news.map(card => {
          return (
            <a
              key={card.name}
              href={card.url}
              className={styles.card}
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.image}>
                <Image
                  src={card.imgFilePath}
                  alt={`imagem do portal ${card.name}`}
                  loading='eager'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className={styles.text}>
                <h1 className={styles.cardTitle}>{card.title}</h1>
                <h2 className={styles.name}>{card.name}</h2>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
