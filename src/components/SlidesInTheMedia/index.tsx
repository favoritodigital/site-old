import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'

import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { news } from '../../repositories/news'

import styles from './styles.module.css'

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
                <a href={slide.url} rel='noreferrer' target='_blank'>
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
                      <p className={styles.site}>{slide.name}</p>
                    </div>
                  </div>
                </a>
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
                <a href={slide.url} rel='noreferrer' target='_blank'>
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
                      <p className={styles.site}>{slide.name}</p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className={styles.webContent}>
        <div className={styles.firstRow}>
          <div key={news[0].name}>
            <a href={news[0].url} rel='noreferrer' target='_blank'>
              <div className={styles.centralizer}>
                <div className={styles.container}>
                  <div className={styles.imgSizeBox}>
                    <Image
                      loading='eager'
                      layout='fill'
                      objectFit='cover'
                      src={news[0].imgFilePath}
                      alt={`imagem da notícia no ${news[0].name}`}
                    />
                  </div>
                  <h1 className={styles.title}>{news[0].title}</h1>
                  <p className={styles.site}>{news[0].name}</p>
                </div>
              </div>
            </a>
          </div>
          <div key={news[1].name}>
            <a href={news[1].url} rel='noreferrer' target='_blank'>
              <div className={styles.centralizer}>
                <div className={styles.container}>
                  <div className={styles.imgSizeBox}>
                    <Image
                      loading='eager'
                      layout='fill'
                      objectFit='cover'
                      src={news[1].imgFilePath}
                      alt={`imagem da notícia no ${news[1].name}`}
                    />
                  </div>
                  <h1 className={styles.title}>{news[1].title}</h1>
                  <p className={styles.site}>{news[1].name}</p>
                </div>
              </div>
            </a>
          </div>
          <div key={news[2].name}>
            <a href={news[2].url} rel='noreferrer' target='_blank'>
              <div className={styles.centralizer}>
                <div className={styles.container}>
                  <div className={styles.imgSizeBox}>
                    <Image
                      loading='eager'
                      layout='fill'
                      objectFit='cover'
                      src={news[2].imgFilePath}
                      alt={`imagem da notícia no ${news[2].name}`}
                    />
                  </div>
                  <h1 className={styles.title}>{news[2].title}</h1>
                  <p className={styles.site}>{news[2].name}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.secondRow}>
          <div key={news[3].name}>
            <a href={news[3].url} rel='noreferrer' target='_blank'>
              <div className={styles.centralizer}>
                <div className={styles.container}>
                  <div className={styles.imgSizeBox}>
                    <Image
                      loading='eager'
                      layout='fill'
                      objectFit='cover'
                      src={news[3].imgFilePath}
                      alt={`imagem da notícia no ${news[3].name}`}
                    />
                  </div>
                  <h1 className={styles.title}>{news[3].title}</h1>
                  <p className={styles.site}>{news[3].name}</p>
                </div>
              </div>
            </a>
          </div>
          <div key={news[4].name}>
            <a href={news[4].url} rel='noreferrer' target='_blank'>
              <div className={styles.centralizer}>
                <div className={styles.container}>
                  <div className={styles.imgSizeBox}>
                    <Image
                      loading='eager'
                      layout='fill'
                      objectFit='cover'
                      src={news[4].imgFilePath}
                      alt={`imagem da notícia no ${news[4].name}`}
                    />
                  </div>
                  <h1 className={styles.title}>{news[4].title}</h1>
                  <p className={styles.site}>{news[4].name}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.webContentLarge}>
        {news.map(card => {
          return (
            <div key={card.name}>
              <a href={card.url} rel='noreferrer' target='_blank'>
                <div className={styles.centralizer}>
                  <div className={styles.container}>
                    <div className={styles.imgSizeBox}>
                      <Image
                        loading='eager'
                        layout='fill'
                        objectFit='cover'
                        src={card.imgFilePath}
                        alt={`imagem da notícia no ${card.name}`}
                      />
                    </div>
                    <h1 className={styles.title}>{card.title}</h1>
                    <p className={styles.site}>{card.name}</p>
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}
