import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { news } from '../../utils/repositories/news'
import styles from './styles.module.css'
import Image from 'next/image'

export default function SlidesInTheMedia() {
  return (
    <>
      <div className={styles.slideWrapper}>
        <Swiper
          className={styles.mobileContent}
          modules={[Navigation, Pagination]}
          pagination
          navigation
          slidesPerView={1}
        >
          {news.map(slide => {
            return (
              <SwiperSlide key={slide.name}>
                <div className={styles.centralizer}>
                  <div className={styles.container}>
                    <div className={styles.imgSizeBox}>
                      <Image
                        loading='eager'
                        layout='fill'
                        objectFit='cover'
                        src={slide.imgFilePath}
                        alt={`imagem da notícia no ${slide.name}`}
                      />
                    </div>

                    <h1 className={styles.title}>{slide.title}</h1>

                    <a href={slide.url} rel='noreferrer' target='_blank'>
                      <p className={styles.link}>Saiba mais</p>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Swiper
          className={styles.tabletContent}
          modules={[Navigation, Pagination]}
          pagination
          navigation
          slidesPerView={2}
        >
          {news.map(slide => {
            return (
              <SwiperSlide key={slide.name}>
                <div className={styles.centralizer}>
                  <div className={styles.container}>
                    <div className={styles.imgSizeBox}>
                      <Image
                        loading='eager'
                        layout='fill'
                        objectFit='cover'
                        src={slide.imgFilePath}
                        alt={`imagem da notícia no ${slide.name}`}
                      />
                    </div>

                    <h1 className={styles.title}>{slide.title}</h1>

                    <a href={slide.url} rel='noreferrer' target='_blank'>
                      <p className={styles.link}>Saiba mais</p>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Swiper
          className={styles.webContent}
          modules={[Navigation, Pagination]}
          pagination
          navigation
          slidesPerView={3}
        >
          {news.map(slide => {
            return (
              <SwiperSlide key={slide.name}>
                <div className={styles.centralizer}>
                  <div className={styles.container}>
                    <div className={styles.imgSizeBox}>
                      <Image
                        loading='eager'
                        layout='fill'
                        objectFit='cover'
                        src={slide.imgFilePath}
                        alt={`imagem da notícia no ${slide.name}`}
                      />
                    </div>

                    <h1 className={styles.title}>{slide.title}</h1>

                    <a href={slide.url} rel='noreferrer' target='_blank'>
                      <p className={styles.link}>Saiba mais</p>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}
