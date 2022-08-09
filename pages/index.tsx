import Header from '../components/Header'

import AppstoreButton from '../public/images/appstorebutton.svg'
import GooglePlayButton from '../public/images/googleplaybutton.svg'

import InstagramLogo from '../public/images/instagramlogo.svg'
import FacebookLogo from '../public/images/facebooklogo.svg'
import LinkedinLogo from '../public/images/linkedinlogo.svg'

export default function Home() {
  return (
    <>
      <Header />
      <div id="inicio" className="section">
        <h1 className="section_title">
          encontre os melhores rolês em um único lugar!
        </h1>
        <div className="section_content">
          <div className="text">
            <p>
              no nosso app, você tem acesso aos melhores rolês de{' '}
              <span>Jaraguá do Sul e região</span> de maneira simples e prática.
            </p>
            <p>disponível para download na App Store e Google Play:</p>
          </div>
          <img src="/images/quebarbada_mockup1.png" alt="" />
        </div>
        <div id="download-buttons">
          <a href="https://www.apple.com/br/app-store/" target="_blank">
            <AppstoreButton />
          </a>
          <a href="https://play.google.com/" target="_blank">
            <GooglePlayButton />
          </a>
        </div>
      </div>
      <div id="como-encontrar" className="section">
        <div id="como-encontrar-pin"></div>
        <h1 className="section_title">encontre seu rolê em 30 segundos</h1>
        <div className="section_content">
          <div className="swiper-wraper"></div>
          <p>
            utilize nossos <span>filtros</span> para descobrir os rolês com
            promoções, música ao vivo, espaço kids, aceita animais, entre outras
            opções
          </p>
        </div>
      </div>
      <div id="clientes" className="section_half">
        <div id="clientes-pin"></div>
        <div className="section-content"></div>
        <h1 className="section_title">clientes</h1>
      </div>
      <div id="depoimentos" className="section_half">
        <div id="depoimentos-pin"></div>
        <div className="section-content"></div>
        <h1 className="section_title">depoimentos</h1>
      </div>
      <div id="apoiadores" className="section_half">
        <div id="apoiadores-pin"></div>
        <div className="section-content"></div>
        <h1 className="section_title">apoiadores</h1>
      </div>
      <div id="convite">
        <p>e aí barbadinha, bora pro rolê? ;)</p>
      </div>
      <footer>
        <div className="social-media">
          <InstagramLogo />
          <FacebookLogo />
          <LinkedinLogo />
        </div>
        <p>Que Barbada &copy;</p>
        <p>CNPJ 00.000.000/0000-00</p>
      </footer>
    </>
  )
}
