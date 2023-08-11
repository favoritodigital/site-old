import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { UsersRecommendationCarouselItem } from '../UsersRecommendationCarouselItem'
import { testimonials } from '../../repositories/testimonials'

import styles from './styles.module.css'

export function UsersRecommendationCarousel() {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={true}
        navigation={true}
        slidesPerView={'auto'}
      >
        {testimonials.map(testimonial => {
          return (
            <SwiperSlide key={testimonial.name}>
              <UsersRecommendationCarouselItem
                key={testimonial.name}
                text={testimonial.testimonial}
                name={testimonial.name}
                file={testimonial.imageFileName}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
