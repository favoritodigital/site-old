// IMAGES
import DownloadButton from './DownloadButton'

// INICIO SECTION
export default function InicioSection() {
  return (
    <>
      <div id='inicio' className='section'>
        <div className='mobile-content'>
          <h1 className='section_title'>encontre os melhores rolês em um único lugar!</h1>
          <div className='section_content'>
            <div className='text'>
              <p>
                no nosso app, você tem acesso aos melhores rolês de{' '}
                <span>Jaraguá do Sul e região</span> de maneira simples e prática.
              </p>
              <p>disponível para download na App Store e Google Play:</p>
            </div>
            <img src='/images/inicio-mockup.png' alt='Imagem do aplicativo Que Barbada' />
          </div>
          <div id='download-buttons-mobile'>
            <DownloadButton type='appstore' />
            <DownloadButton type='googleplay' />
          </div>
        </div>
        <div className='web-content'>
          <div className='section_content'>
            <div className='left-column'>
              <h1 className='section_title'>encontre os melhores rolês em um único lugar!</h1>
              <div className='text'>
                <p>
                  no nosso app, você tem acesso aos melhores rolês de{' '}
                  <span>Jaraguá do Sul e região</span> de maneira simples e prática.
                </p>
                <p>disponível para download na App Store e Google Play:</p>
              </div>
              <div id='download-buttons-web'>
                <DownloadButton type='appstore' />
                <DownloadButton type='googleplay' />
              </div>
            </div>
            <div className='right-column'>
              <img src='/images/inicio-mockup.png' alt='Imagem do aplicativo Que Barbada' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
