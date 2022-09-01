//SWIPER
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

//APOIADORES SECTION
export default function ApoiadoresSection() {
  return (
    <div id="apoiadores-section" className="section_half">
      <div id="apoiadores"></div>
      <h1 className="section_title">apoiadores</h1>
      <div className="section_content_half">
        <div className="swiper_wrapper">
          <Swiper className="mobile" slidesPerView={2.33}>
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
          <Swiper className="tablet" slidesPerView={5.33}>
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
  )
}
