import { Navigation, Pagination, EffectCoverflow } from 'swiper'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import styles from './styles.module.css'

export default function SlidesContent() {
  return (
    <div className={styles.slideWrapper}>
      <Swiper
        className={styles.mobile}
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
      >
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-1.png'
              alt='Imagem dos filtros do Que Barbada'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-2.png'
              alt='Imagem dos rolês do Que Barbada'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-3.png'
              alt='Imagem do rolê escolhido do Que Barbada'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-4.png'
              alt='Imagem da mensagem do local do rolê escolhido do Que Barbada'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-5.png'
              alt='Imagem do cardápio do local do rolê escolhido do Que Barbada'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-6.png'
              alt='Imagem da localização do rolê escolhido do Que Barbada'
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        className={styles.tablet}
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
      >
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-1.png'
              alt='Imagem dos filtros do Que Barbada'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-2.png'
              alt='Imagem dos rolês do Que Barbada'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-3.png'
              alt='Imagem do rolê escolhido do Que Barbada'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-4.png'
              alt='Imagem da mensagem do local do rolê escolhido do Que Barbada'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-5.png'
              alt='Imagem do cardápio do local do rolê escolhido do Que Barbada'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}>
            <Image
              loading='eager'
              layout='responsive'
              width={452}
              height={870}
              src='/images/como-encontrar-6.png'
              alt='Imagem da localização do rolê escolhido do Que Barbada'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
