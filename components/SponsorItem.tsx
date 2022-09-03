// TYPES
interface props {
  imagesrc: string
  name: string
}

// SPONSOR ITEM
export default function SponsorItem({ imagesrc, name }: props) {
  return (
    <div className="costumer">
      <div className="costumer-image">
        <img src={imagesrc} alt={`imagem do apoiador ${name}`} />
      </div>
      <h1>{name}</h1>
    </div>
  )
}
