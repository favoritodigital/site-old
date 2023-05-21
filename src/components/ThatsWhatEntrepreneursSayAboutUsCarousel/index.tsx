import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import ThatsWhatEntrepreneursSayAboutUsCarouselItem from '../ThatsWhatEntrepreneursSayAboutUsCarouselItem'

import styles from './styles.module.css'

import { establishments } from '../../repositories/establishments'

export default function ThatsWhatEntrepreneursSayAboutUsCarousel() {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={true}
        navigation={true}
        slidesPerView={'auto'}
      >
        {establishments.map(establishment => {
          return (
            <SwiperSlide className={styles.slide} key={establishment.owner}>
              <ThatsWhatEntrepreneursSayAboutUsCarouselItem
                key={establishment.owner}
                text={establishment.testimonial}
                name={establishment.owner}
                file={establishment.imageFileName}
                height={establishment.height}
                width={establishment.width}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
