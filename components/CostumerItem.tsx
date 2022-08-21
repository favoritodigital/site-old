import { SwiperSlide } from 'swiper/react'

interface props {
  imagesrc: string
  name: string
}

export default function CostumerItem({ imagesrc, name }: props) {
  return (
    <SwiperSlide>
      <div className="costumer">
        <div className="costumer-image">
          <img src={imagesrc} alt={`imagem do cliente ${name}`} />
        </div>
        <h1>{name}</h1>
      </div>
    </SwiperSlide>
  )
}
