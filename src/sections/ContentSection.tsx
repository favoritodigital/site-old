// COMPONENTS
import ComoEncontrarSwiper from '../components/ComoEncontrarSwiper'

// COMO ENCONTRAR SECTION
export default function ComoEncontrarSection() {
  return (
    <div id='como-encontrar-section' className='section'>
      <div id='como-encontrar'></div>

      <div className='mobile-content'>
        <h1 className='section_title'>encontre seu rolê em 30 segundos</h1>
        <div className='section_content'>
          <ComoEncontrarSwiper />
          <p>
            utilize nossos <span>filtros</span> para descobrir os rolês com promoções, música ao
            vivo, espaço kids, aceita animais, entre outras opções
          </p>
        </div>
      </div>
      <div className='web-content'>
        <div className='section_content'>
          <div className='left-column'>
            <ComoEncontrarSwiper />
          </div>
          <div className='right-column'>
            <h1 className='section_title'>encontre seu rolê em 30 segundos</h1>
            <p>
              utilize nossos <span>filtros</span> para descobrir os rolês com promoções, música ao
              vivo, espaço kids, aceita animais, entre outras opções
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
