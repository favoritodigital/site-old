import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import { CAPITAL_REGION_COUNT, REGION_COUNT } from '../../repositories/constants'

import styles from './styles.module.css'

export function WhereWeAreSection() {
  const slides = [
    {
      fileName: 'jaragua-do-sul.png',
      text: 'Jaraguá do Sul - SC',
      className: styles.slideJaragua,
    },
    {
      fileName: 'criciuma.png',
      text: 'Criciúma - SC',
      className: styles.slideCriciuma,
    },
    {
      fileName: 'joinville.png',
      text: 'Joinville - SC',
      className: styles.slideJoinville,
    },
    {
      fileName: 'lajeado.png',
      text: 'Lajeado - RS',
      className: styles.slideLajeado,
    },
    {
      fileName: 'florianopolis.png',
      text: 'Florianópolis - SC',
      className: styles.slideFlorianopolis,
    },
  ]

  return (
    <div id='onde-estamos-section' className={styles.container}>
      <h1 className={styles.title}>onde estamos</h1>
      <p className={styles.paragraph}>
        até o momento, nosso app está presente em {REGION_COUNT} regiões do Brasil, incluindo{' '}
        {CAPITAL_REGION_COUNT} capital
      </p>
      <div className={styles.carouselWrapper}>
        <div className={styles.slides}>
          <Swiper
            navigation={true}
            spaceBetween={8}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
          >
            {slides.map(slide => (
              <SwiperSlide key={slide.fileName}>
                <div className={slide.className}>
                  <div className={styles.image}>
                    <Image
                      loading='eager'
                      layout='fill'
                      src={`/images/cities/${slide.fileName}`}
                      alt={`Imagem da cidade de ${slide.text}`}
                    />
                  </div>
                  <p className={styles.cityName}>{slide.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
