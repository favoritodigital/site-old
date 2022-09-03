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
      <div className="testemony-person">
        <div className="testimonial-image">
          <img src={`/images/${imageFileName}`} alt={`Foto do ${owner}`} />
        </div>
        <h1 className="testemony-name">{owner}</h1>
      </div>
      <p className="testemony-text">{testimonial}</p>
    </div>
  )
}
