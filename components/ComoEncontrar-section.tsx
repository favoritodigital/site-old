// COMPONENTS
import ComoEncontrarSwiper from './ComoEncontrarSwiper'

// COMO ENCONTRAR SECTION
export default function ComoEncontrarSection() {
  return (
    <div id="como-encontrar-section" className="section">
      <div id="como-encontrar"></div>
      <h1 className="section_title">encontre seu rolê em 30 segundos</h1>
      <div className="section_content">
        <ComoEncontrarSwiper />
        <p>
          utilize nossos <span>filtros</span> para descobrir os rolês com
          promoções, música ao vivo, espaço kids, aceita animais, entre outras
          opções
        </p>
      </div>
    </div>
  )
}
