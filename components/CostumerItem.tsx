import { SwiperSlide } from 'swiper/react'

interface props {
  imageUrl: string
  name: string
}

export default function CustomerItem({ imageUrl, name }: props) {
  return (
    <div className='costumer'>
      <div className='costumer-image'>
        <img src={imageUrl} alt={`imagem do cliente ${name}`} />
      </div>
      <h1>{name}</h1>
    </div>
  )
}
