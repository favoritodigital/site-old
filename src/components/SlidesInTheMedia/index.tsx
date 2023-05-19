import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'

import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { news } from '../../repositories/news'

import styles from './styles.module.css'

export default function SlidesInTheMedia() {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        className={styles.mobileContent}
        modules={[Navigation, Pagination]}
        pagination
        navigation
        slidesPerView={'auto'}
      >
        {news.map(card => {
          return (
            <SwiperSlide key={card.name}>
              <div className={styles.cardWrapper}>
                <a href={card.url} className={styles.card} target='_blank' rel='noreferrer'>
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
                    <h1 className={styles.title}>{card.title}</h1>
                    <h2 className={styles.name}>{card.name}</h2>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
