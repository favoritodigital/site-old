import Header from '../components/Header'

import InstagramLogo from '../public/images/instagramlogo.svg'
import FacebookLogo from '../public/images/facebooklogo.svg'
import LinkedinLogo from '../public/images/linkedinlogo.svg'
import DownloadButton from '../components/DownloadButton'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'

export default function Home() {
  return (
    <>
      <Header />
      <div id="inicio" className="section">
        <h1 className="section_title">
          encontre os melhores rolês em um único lugar!
        </h1>
        <div className="section_content">
          <div className="text">
            <p>
              no nosso app, você tem acesso aos melhores rolês de{' '}
              <span>Jaraguá do Sul e região</span> de maneira simples e prática.
            </p>
            <p>disponível para download na App Store e Google Play:</p>
          </div>
          <img src="/images/quebarbada_mockup1.png" alt="" />
        </div>
        <div id="download-buttons">
          <DownloadButton type="appstore" />
          <DownloadButton type="googleplay" />
        </div>
      </div>
      <div id="como-encontrar-section" className="section">
        <div id="como-encontrar"></div>
        <h1 className="section_title">encontre seu rolê em 30 segundos</h1>
        <div className="section_content">
          <div className="swiper-wraper"></div>
          <p>
            utilize nossos <span>filtros</span> para descobrir os rolês com
            promoções, música ao vivo, espaço kids, aceita animais, entre outras
            opções
          </p>
        </div>
      </div>
      <div id="clientes-section" className="section_half">
        <div id="clientes"></div>
        <h1 className="section_title">clientes</h1>
        <div className="section_content_half">
          <div className="swiper_wrapper">
            <Swiper
              slidesPerView={3.5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={swiper => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="costumer">
                  <div className="costumer-image"></div>
                  <h1>Cliente 1</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="costumer">
                  <div className="costumer-image"></div>
                  <h1>Cliente 2</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="costumer">
                  <div className="costumer-image"></div>
                  <h1>Cliente 3</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="costumer">
                  <div className="costumer-image"></div>
                  <h1>Cliente 4</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="costumer">
                  <div className="costumer-image"></div>
                  <h1>Cliente 5</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="costumer">
                  <div className="costumer-image"></div>
                  <h1>Cliente 6</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="costumer">
                  <div className="costumer-image"></div>
                  <h1>Cliente 7</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="costumer">
                  <div className="costumer-image"></div>
                  <h1>Cliente 8</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div id="depoimentos-section" className="section_half">
        <div id="depoimentos"></div>
        <h1 className="section_title">depoimentos</h1>
        <div className="section_content_half">
          <div className="swiper_wrapper">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={swiper => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="testimonial">
                  <div className="testemony-person">
                    <div className="testimonial-image"></div>
                    <h1 className="testemony-name">Pessoa 1</h1>
                  </div>
                  <p className="testemony-text">
                    “O melhor aplicativo para achar um lugar para beber com
                    minhas amigas, utilizo todo final de semana”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial">
                  <div className="testemony-person">
                    <div className="testimonial-image"></div>
                    <h1 className="testemony-name">Pessoa 2</h1>
                  </div>
                  <p className="testemony-text">“Top Demais!!!”</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial">
                  <div className="testemony-person">
                    <div className="testimonial-image"></div>
                    <h1 className="testemony-name">Pessoa 3</h1>
                  </div>
                  <p className="testemony-text">
                    “Não vivo mais sem, melhor app!!!”
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div id="apoiadores-section" className="section_half">
        <div id="apoiadores"></div>
        <h1 className="section_title">apoiadores</h1>
        <div className="section_content_half">
          <div className="swiper_wrapper">
            <Swiper
              slidesPerView={3.5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={swiper => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="sponsor">
                  <div className="sponsor-image"></div>
                  <h1>Apoiador 1</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sponsor">
                  <div className="sponsor-image"></div>
                  <h1>Apoiador 2</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sponsor">
                  <div className="sponsor-image"></div>
                  <h1>Apoiador 3</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sponsor">
                  <div className="sponsor-image"></div>
                  <h1>Apoiador 4</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sponsor">
                  <div className="sponsor-image"></div>
                  <h1>Apoiador 5</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sponsor">
                  <div className="sponsor-image"></div>
                  <h1>Apoiador 6</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sponsor">
                  <div className="sponsor-image"></div>
                  <h1>Apoiador 7</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sponsor">
                  <div className="sponsor-image"></div>
                  <h1>Apoiador 8</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div id="invite">
        <p>e aí barbadinha, bora pro rolê? ;)</p>
      </div>
      <footer>
        <div className="social-media">
          <InstagramLogo />
          <FacebookLogo />
          <LinkedinLogo />
        </div>
        <p>Que Barbada &copy;</p>
        <p>CNPJ 00.000.000/0000-00</p>
      </footer>
    </>
  )
}
