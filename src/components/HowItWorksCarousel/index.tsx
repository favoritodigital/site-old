import Image from 'next/image'

import { EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './styles.module.css'

export function HowItWorksCarousel() {
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
        <SwiperSlide>
          <div className={styles.slide}>
            <div className={styles.img}>
              <Image
                loading='eager'
                layout='fill'
                objectFit='contain'
                src='/images/app/app-1.png'
                alt='Imagem da página inicial do Favorito'
              />
            </div>
            <p className={styles.slideText}>
              <span className={styles.bold}>1.</span> Ver os melhores bares, pubs e restaurantes em
              uma <span className={styles.highlight}>única plataforma</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <div className={styles.img}>
              <Image
                loading='eager'
                layout='fill'
                objectFit='contain'
                src='/images/app/app-2.png'
                alt='Imagem dos filtros do Favorito'
              />
            </div>
            <p className={styles.slideText}>
              <span className={styles.bold}>2.</span> Combinar{' '}
              <span className={styles.highlight}>filtros</span> de &ldquo;promoção&rdquo;,
              &ldquo;música ao vivo&rdquo; e muito mais
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <div className={styles.img}>
              <Image
                loading='eager'
                layout='fill'
                objectFit='contain'
                src='/images/app/app-3.png'
                alt='Imagem de um estabelecimento no Favorito'
              />
            </div>
            <p className={styles.slideText}>
              <span className={styles.bold}>3.</span> Ver as principais{' '}
              <span className={styles.highlight}>informações</span> do estabelecimento, incluindo{' '}
              <span className={styles.highlight}>cardápio</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <div className={styles.img}>
              <Image
                loading='eager'
                layout='fill'
                objectFit='contain'
                src='/images/app/app-4.png'
                alt='Imagem da página inicial do Favorito'
              />
            </div>
            <p className={styles.slideText}>
              <span className={styles.bold}>4.</span> Explorar os locais mais{' '}
              <span className={styles.highlight}>próximos</span> no mapa
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <div className={styles.img}>
              <Image
                loading='eager'
                layout='fill'
                objectFit='contain'
                src='/images/app/app-5.png'
                alt='Imagem dos eventos no Favorito'
              />
            </div>
            <p className={styles.slideText}>
              <span className={styles.bold}>5.</span> Descobrir os{' '}
              <span className={styles.highlight}>eventos</span> que estão rolando na{' '}
              <span className={styles.highlight}>região</span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
