import Image from 'next/image'

interface Props {
  name: string
  imageFileName: string
  url: string
  width: number
  height: number
}

export default function SponsorItem({ name, imageFileName, url, width, height }: Props) {
  return (
    <a href={url} className='sponsor' target='_blank' rel='noreferrer'>
      <div className='sponsor-image'>
        <Image
          layout='responsive'
          width={width}
          height={height}
          src={`/images/${imageFileName}`}
          alt={`imagem do apoiador ${name}`}
        />
      </div>
    </a>
  )
}
