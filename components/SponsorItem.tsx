import { SwiperSlide } from 'swiper/react'

interface props {
  imagesrc: string
  name: string
}

export default function SponsorItem({ imagesrc, name }: props) {
  return (
    <SwiperSlide>
      <div className="costumer">
        <div className="costumer-image">
          <img src={imagesrc} alt={`imagem do apoiador ${name}`} />
        </div>
        <h1>{name}</h1>
      </div>
    </SwiperSlide>
  )
}
