import Image from 'next/image'

interface Props {
  testimonial: string
  owner: string
  imageFileName: string
  width: number
  height: number
}

export default function TestimonialItem({
  testimonial,
  owner,
  imageFileName,
  width,
  height,
}: Props) {
  return (
    <div className='testimonial'>
      <div className='testimony-person'>
        <div className='testimonial-image'>
          <Image
            layout='responsive'
            width={width}
            height={height}
            src={`/images/${imageFileName}`}
            alt={`Foto do ${owner}`}
            objectFit='cover'
          />
        </div>
        <h1 className='testimony-name'>{owner}</h1>
      </div>
      <p className='testimony-text'>{testimonial}</p>
    </div>
  )
}
