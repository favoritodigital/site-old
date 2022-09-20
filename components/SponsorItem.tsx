interface props {
  name: string
  imageFileName: string
  url: string
}

export default function ApoiadorItem({ name, imageFileName, url }: props) {
  return (
    <a href={url} className="sponsor" target="_blank">
      <div className="sponsor-image">
        <img
          src={`/images/${imageFileName}`}
          alt={`imagem do apoiador ${name}`}
        />
      </div>
      <h1>{name}</h1>
    </a>
  )
}
