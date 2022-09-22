// IMAGES
import Link from 'next/link'
import InstagramLogo from '../public/images/instagramlogo.svg'
import LinkedinLogo from '../public/images/linkedinlogo.svg'
import TiktokLogo from '../public/images/tiktoklogo.svg'
import GithubLogo from '../public/images/githublogo.svg'
import Logo from '../public/images/logo.svg'

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
              href="https://www.instagram.com/quebarbadaoficial/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogo />
            </a>
            <a
              href="https://www.tiktok.com/@quebarbada"
              target="_blank"
              rel="noreferrer"
            >
              <TiktokLogo />
            </a>
            <a
              href="https://www.linkedin.com/company/quebarbada"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo />
            </a>
            <a
              href="https://github.com/quebarbada/landing-page"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo />
            </a>
          </div>
        </div>
        <div className="legal">
          <Link href="/politica-de-privacidade">
            <p>Política de Privacidade</p>
          </Link>
          <Link href="/termos-de-uso-estabelecimento">
            <p>Termos de Uso - Estabelecimento</p>
          </Link>
          <Link href="/termos-de-uso-usuario">
            <p>Termos de Uso - Usuário</p>
          </Link>
        </div>
        <div className="developer">
          <p>Desenvolvido por:</p>
          <a
            href="https://www.linkedin.com/in/wesley-bridi-12909623a/"
            target="_blank"
            rel="noreferrer"
          >
            Wesley Bridi Rigo
          </a>
        </div>
      </div>
    </footer>
  )
}
