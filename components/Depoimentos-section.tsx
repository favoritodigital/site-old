// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// COMPONENTS
import TestimonialItem from './TestimonialItem'

// REPOSITORY
import { testimonials } from '../Repository'

// DEPOIMENTOS SECTION
export default function DepoimentosSection() {
  return (
    <div id='depoimentos-section' className='section_half'>
      <div id='depoimentos'></div>
      <h1 className='section_title'>depoimentos</h1>
      <div className='section_content_half'>
        <div className='swiper_wrapper'>
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
