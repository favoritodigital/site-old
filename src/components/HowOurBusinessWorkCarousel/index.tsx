import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './styles.module.css'

export default function HowOurBusinessWorkCarousel() {
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
                layout='responsive'
                width={220}
                height={425}
                src='/images/app/app-3.png'
                alt='Imagem de um estabelecimento no Que Barbada'
              />
            </div>
            <p className={styles.slideText}>
              você, como licenciado, cadastra e atualiza as informações dos estabelecimentos no app
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
                alt='Imagem do mapa do rolê do Que Barbada'
              />
            </div>
            <p className={styles.slideText}>
              os estabelecimentos são facilmente encontrados pelo público que tem a intenção de sair
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
                alt='Imagem dos filtros no Que Barbada'
              />
            </div>
            <p className={styles.slideText}>
              os usuários podem filtrar locais conforme as suas preferências, de forma rápida e
              prática
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
