import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import styles from './styles.module.css'

export default function HowItWorksCarrousel() {
  return (
    <div className={styles.carrouselWrapper}>
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
                layout='responsive'
                width={220}
                height={425}
                src='/images/app/app-1.png'
                alt='Imagem da página inicial do Que Barbada'
              />
            </div>
            <p className={styles.slideText}>
              <span className={styles.bold}>1.</span> ver os melhores bares, pubs e restaurantes em
              uma <span className={styles.highlight}>única plataforma</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <div className={styles.img}>
              <Image
                loading='eager'
                layout='responsive'
                width={220}
                height={425}
                src='/images/app/app-2.png'
                alt='Imagem dos filtros do Que Barbada'
              />
            </div>
            <p className={styles.slideText}>
              <span className={styles.bold}>2.</span> combinar{' '}
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
                layout='responsive'
                width={220}
                height={425}
                src='/images/app/app-3.png'
                alt='Imagem de um estabelecimento no Que Barbada'
              />
            </div>
            <p className={styles.slideText}>
              <span className={styles.bold}>3.</span> ver as principais{' '}
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
                layout='responsive'
                width={220}
                height={425}
                src='/images/app/app-4.png'
                alt='Imagem da página inicial do Que Barbada'
              />
            </div>
            <p className={styles.slideText}>
              <span className={styles.bold}>4.</span> explorar os locais mais{' '}
              <span className={styles.highlight}>próximos</span> no mapa do rolê
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide}>
            <div className={styles.img}>
              <Image
                loading='eager'
                layout='responsive'
                width={220}
                height={425}
                src='/images/app/app-5.png'
                alt='Imagem dos eventos no Que Barbada'
              />
            </div>
            <p className={styles.slideText}>
              <span className={styles.bold}>5.</span> descobrir os{' '}
              <span className={styles.highlight}>eventos</span> que estão rolando na{' '}
              <span className={styles.highlight}>região</span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
