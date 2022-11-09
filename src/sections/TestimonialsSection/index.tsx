import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import TestimonialItem from '../../components/TestimonialItem'

import { testimonials } from '../../utils/testimonials'

import styles from './styles.module.css'

export default function TestimonialsSection() {
  return (
    <div id='depoimentos-section' className={styles.container}>
      <div id='depoimentos' className={styles.pin}></div>
      <h1 className={styles.sectionTitle}>depoimentos</h1>
      <div className={styles.sectionContentHalf}>
        <div className={styles.slideWrapper}>
          <Swiper
            className={styles.mobile}
            modules={[Navigation, Pagination]}
            pagination={true}
            navigation={true}
            slidesPerView={1}
          >
            {testimonials.map(testimonial => {
              return (
                <SwiperSlide key={testimonial.owner}>
                  <TestimonialItem
                    owner={testimonial.owner}
                    testimonial={testimonial.testimonial}
                    imageFileName={testimonial.imageFileName}
                    width={testimonial.width}
                    height={testimonial.height}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Swiper
            className={styles.tablet}
            modules={[Navigation, Pagination]}
            pagination={true}
            navigation={true}
            slidesPerView={2}
          >
            {testimonials.map(testimonial => {
              return (
                <SwiperSlide key={testimonial.owner}>
                  <TestimonialItem
                    owner={testimonial.owner}
                    testimonial={testimonial.testimonial}
                    imageFileName={testimonial.imageFileName}
                    width={testimonial.width}
                    height={testimonial.height}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Swiper
            className={styles.webLarge}
            modules={[Navigation, Pagination]}
            pagination={true}
            navigation={true}
            slidesPerView={3}
          >
            {testimonials.map(testimonial => {
              return (
                <SwiperSlide key={testimonial.owner}>
                  <TestimonialItem
                    owner={testimonial.owner}
                    testimonial={testimonial.testimonial}
                    imageFileName={testimonial.imageFileName}
                    width={testimonial.width}
                    height={testimonial.height}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
