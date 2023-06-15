import Link from 'next/link'

import InstagramIcon from '/public/images/brands/social-medias/instagram.svg'
import LinkedInIcon from '/public/images/brands/social-medias/linkedin.svg'
import TiktokIcon from '/public/images/brands/social-medias/tiktok.svg'
import GitHubIcon from '/public/images/brands/social-medias/github.svg'
import YoutubeIcon from '/public/images/brands/social-medias/youtube.svg'
import QueBarbadaLogo from '/public/images/quebarbada-logo.svg'

import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItems}>
        <div className={styles.quebarbada}>
          <Link href={'/'}>
            <a>
              <QueBarbadaLogo />
            </a>
          </Link>
          <p>&copy; {new Date().getFullYear()} Que Barbada. Todos direitos reservados.</p>
          <p>CNPJ 46.230.468/0001-73</p>
        </div>
        <div className={styles.socialMedia}>
          <p>Siga nas redes sociais:</p>
          <div className={styles.socialMediaImages}>
            <a href='https://www.instagram.com/quebarbadaoficial/' target='_blank' rel='noreferrer'>
              <InstagramIcon />
            </a>
            <a href='https://www.tiktok.com/@quebarbada' target='_blank' rel='noreferrer'>
              <TiktokIcon />
            </a>
            <a href='https://www.linkedin.com/company/quebarbada' target='_blank' rel='noreferrer'>
              <LinkedInIcon />
            </a>
            <a href='https://github.com/quebarbada/landing-page' target='_blank' rel='noreferrer'>
              <GitHubIcon />
            </a>
            <a href='https://www.youtube.com/@quebarbada' target='_blank' rel='noreferrer'>
              <YoutubeIcon />
            </a>
          </div>
        </div>
        <div className={styles.legal}>
          <a href='/politica-de-privacidade' target='_blank' rel='noreferrer'>
            <p>Política de Privacidade</p>
          </a>
          <a href='/termos-de-uso-usuario' target='_blank' rel='noreferrer'>
            <p>Termos de Uso</p>
          </a>
        </div>
        <div className={styles.developer}>
          <p>
            Desenvolvido por: <br />{' '}
            <a href='https://www.linkedin.com/in/wesleybridirigo' target='_blank' rel='noreferrer'>
              Wesley Bridi Rigo
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
