import { Navigation, Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function ComoEncontrarSwiper() {
  return (
    <div className='swiper_wrapper'>
      <div className='swiper-wraper'>
        <Swiper
          spaceBetween={16}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 75,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className='mobile'
        >
          <SwiperSlide>
            <img src='/images/como-encontrar-1.png' alt='Imagem dos filtros do Que Barbada' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/como-encontrar-2.png' alt='Imagem dos rolês do Que Barbada' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/como-encontrar-3.png' alt='Imagem do rolê escolhido do Que Barbada' />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/images/como-encontrar-4.png'
              alt='Imagem da mensagem do local do rolê escolhido do Que Barbada'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/images/como-encontrar-5.png'
              alt='Imagem do cardápio do local do rolê escolhido do Que Barbada'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/images/como-encontrar-6.png'
              alt='Imagem da localização do rolê escolhido do Que Barbada'
            />
          </SwiperSlide>
        </Swiper>
        <Swiper
          navigation={true}
          spaceBetween={32}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 75,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Navigation, EffectCoverflow, Pagination]}
          className='tablet'
        >
          <SwiperSlide>
            <img src='/images/como-encontrar-1.png' alt='Imagem dos filtros do Que Barbada' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/como-encontrar-2.png' alt='Imagem dos rolês do Que Barbada' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/como-encontrar-3.png' alt='Imagem do rolê escolhido do Que Barbada' />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/images/como-encontrar-4.png'
              alt='Imagem da mensagem do local do rolê escolhido do Que Barbada'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/images/como-encontrar-5.png'
              alt='Imagem do cardápio do local do rolê escolhido do Que Barbada'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='/images/como-encontrar-6.png'
              alt='Imagem da localização do rolê escolhido do Que Barbada'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
