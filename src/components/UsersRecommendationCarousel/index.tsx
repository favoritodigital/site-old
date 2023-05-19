import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import UsersRecommendationCarouselItem from '../UsersRecommendationCarouselItem'

import styles from './styles.module.css'

import { testimonials } from '../../repositories/testimonials'

export default function UsersRecommendationCarousel() {
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
                height={testimonial.height}
                width={testimonial.width}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
