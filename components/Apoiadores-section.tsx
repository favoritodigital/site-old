// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

// REPOSITORY
import { sponsors } from '../Repository'

// COMPONENTS
import SponsorItem from './SponsorItem'

// APOIADORES SECTION
export default function ApoiadoresSection() {
  return (
    <div id="apoiadores-section" className="section_half">
      <div id="apoiadores"></div>
      <h1 className="section_title">apoiadores</h1>
      <div className="section_content_half">
        <div className="swiper_wrapper">
          <Swiper
            className="mobile"
            slidesPerView={2.33}
            modules={[Pagination]}
            pagination
          >
            {sponsors.map(sponsor => {
              return (
                <SwiperSlide key={`mobile ${sponsor.name}`}>
                  <SponsorItem
                    name={sponsor.name}
                    imageFileName={sponsor.imageFileName}
                    url={sponsor.url}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Swiper className="tablet" slidesPerView={3}>
            {sponsors.map(sponsor => {
              return (
                <SwiperSlide key={`tablet ${sponsor.name}`}>
                  <SponsorItem
                    name={sponsor.name}
                    imageFileName={sponsor.imageFileName}
                    url={sponsor.url}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
