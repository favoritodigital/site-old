import Image from 'next/image'

interface Props {
  name: string
  imageFileName: string
  url: string
  width: number
  height: number
}

export default function SupporterItem({ name, imageFileName, url, width, height }: Props) {
  return (
    <a href={url} className='supporter' target='_blank' rel='noreferrer'>
      <div className='supporter-image'>
        <Image
          placeholder='blur'
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
