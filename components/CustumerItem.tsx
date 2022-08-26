import { SwiperSlide } from 'swiper/react'

interface props {
  imageUrl: string
  name: string
}

export default function CustomerItem({ imageUrl, name }: props) {
  return (
    <div className="custumer">
      <div className="custumer-image">
        <img src={imageUrl} alt={`imagem do cliente ${name}`} />
      </div>
      <h1>{name}</h1>
    </div>
  )
}
