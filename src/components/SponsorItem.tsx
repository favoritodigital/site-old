interface Props {
  name: string
  imageFileName: string
  url: string
}

export default function SponsorItem({ name, imageFileName, url }: Props) {
  return (
    <a href={url} className='sponsor' target='_blank' rel='noreferrer'>
      <div className='sponsor-image'>
        <img src={`/images/${imageFileName}`} alt={`imagem do apoiador ${name}`} />
      </div>
    </a>
  )
}
