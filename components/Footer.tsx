// IMAGES
import InstagramLogo from '../public/images/instagramlogo.svg'
import FacebookLogo from '../public/images/facebooklogo.svg'
import LinkedinLogo from '../public/images/linkedinlogo.svg'
import Logo from '../public/images/logo.svg'
import TiktokLogo from '../public/images/tiktoklogo.svg'

// FOOTER
export default function Footer() {
  return (
    <footer>
      <div className="footer-items">
        <div className="quebarbada">
          <Logo />
          <p>Que Barbada &copy;</p>
          <p>CNPJ 00.000.000/0000-00</p>
        </div>
        <div className="social-media">
          <p>Siga nas redes sociais:</p>
          <div className="social-media-images">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogo />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookLogo />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
              <TiktokLogo />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
