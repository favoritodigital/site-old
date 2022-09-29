import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import TestimonialItem from '../components/TestimonialItem'

import { testimonials } from '../utils/repository'

export default function TestimonialsSection() {
  return (
    <div id='depoimentos-section' className='section_half'>
      <div id='depoimentos'></div>
      <h1 className='section_title'>depoimentos</h1>
      <div className='section_content_half'>
        <div className='slide-wrapper'>
          <Swiper
            className='mobile'
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
            className='tablet'
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
            className='web-large'
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
