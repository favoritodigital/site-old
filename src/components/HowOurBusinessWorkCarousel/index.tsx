import Image from 'next/image'

import { EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './styles.module.css'

export function HowOurBusinessWorkCarousel() {
  const slides = [
    {
      fileName: 'app-3.png',
      text: 'Você, como licenciado, cadastra e atualiza as informações dos estabelecimentos no app',
    },
    {
      fileName: 'app-4.png',
      text: 'Os estabelecimentos são facilmente encontrados pelo público que tem a intenção de sair',
    },
    {
      fileName: 'app-2.png',
      text: 'Os usuários podem filtrar locais conforme as suas preferências, de forma rápida e prática',
    },
  ]

  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        navigation={true}
        effect={'fade'}
        centeredSlides={true}
        slidesPerView={'auto'}
        pagination={true}
        modules={[EffectFade, Navigation, Pagination]}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.fileName}>
            <div className={styles.slide}>
              <div className={styles.img}>
                <Image
                  loading='eager'
                  layout='fill'
                  objectFit='contain'
                  src={`/images/app/${slide.fileName}`}
                  alt='Imagem do aplicativo Favorito'
                />
              </div>
              <p className={styles.slideText}>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
