// TYPES
interface Props {
  testimonial: string
  owner: string
  imageFileName: string
}

// TESTIMONIAL ITEM
export default function TestimonialItem({
  testimonial,
  owner,
  imageFileName
}: Props) {
  return (
    <div className="testimonial">
      <div className="testimony-person">
        <div className="testimonial-image">
          <img src={`/images/${imageFileName}`} alt={`Foto do ${owner}`} />
        </div>
        <h1 className="testimony-name">{owner}</h1>
      </div>
      <p className="testimony-text">{testimonial}</p>
    </div>
  )
}
