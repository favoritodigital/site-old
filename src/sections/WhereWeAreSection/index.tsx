import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import styles from './styles.module.css'
import Image from 'next/image'

export default function WhereWeAreSection() {
  return (
    <div id='onde-estamos-section' className={styles.container}>
      <h1 className={styles.title}>onde estamos</h1>
      <p className={styles.paragraph}>
        até o momento, nosso app está presente em 5 regiões do Brasil, incluindo 1 capital
      </p>
      <div className={styles.carouselWrapper}>
        <div className={styles.gradient} />
        <div className={styles.slides}>
          <Swiper
            spaceBetween={8}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className={styles.slideJaragua}>
                <div className={styles.image}>
                  <Image
                    loading='eager'
                    layout='responsive'
                    width={271}
                    height={180}
                    src='/images/cities/jaragua-do-sul.png'
                    alt='Imagem da cidade de Jaraguá do Sul - SC'
                  />
                </div>
                <p className={styles.cityName}>Jaraguá do Sul - SC</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideCriciuma}>
                <div className={styles.image}>
                  <Image
                    loading='eager'
                    layout='responsive'
                    width={271}
                    height={180}
                    src='/images/cities/criciuma.png'
                    alt='Imagem da cidade de Criciúma - SC'
                  />
                </div>
                <p className={styles.cityName}>Criciúma - SC</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideJoinville}>
                <div className={styles.image}>
                  <Image
                    loading='eager'
                    layout='responsive'
                    width={325}
                    height={180}
                    src='/images/cities/joinville.png'
                    alt='Imagem da cidade de Joiville - SC'
                  />
                </div>
                <p className={styles.cityName}>Joinville - SC</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideLajeado}>
                <div className={styles.image}>
                  <Image
                    loading='eager'
                    layout='fill'
                    src='/images/cities/lajeado.png'
                    alt='Imagem da cidade de Lajeado - RS'
                  />
                </div>
                <p className={styles.cityName}>Lajeado - RS</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideLajeado}>
                <div className={styles.image}>
                  <Image
                    loading='eager'
                    layout='fill'
                    src='/images/cities/florianopolis.png'
                    alt='Imagem da cidade de Florianópolis - SC'
                  />
                </div>
                <p className={styles.cityName}>Florianópolis - SC</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
