import Link from 'next/link'

import InstagramLogo from '/public/images/instagramlogo.svg'
import LinkedinLogo from '/public/images/linkedinlogo.svg'
import TiktokLogo from '/public/images/tiktoklogo.svg'
import GithubLogo from '/public/images/githublogo.svg'
import Logo from '/public/images/logo.svg'

import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItems}>
        <div className={styles.quebarbada}>
          <Link href={'/'}>
            <a>
              <Logo />
            </a>
          </Link>
          <p>&copy; 2022 Que Barbada. Todos direitos reservados.</p>
          <p>CNPJ 46.230.468/0001-73</p>
        </div>
        <div className={styles.socialMedia}>
          <p>Siga nas redes sociais:</p>
          <div className={styles.socialMediaImages}>
            <a href='https://www.instagram.com/quebarbadaoficial/' target='_blank' rel='noreferrer'>
              <InstagramLogo />
            </a>
            <a href='https://www.tiktok.com/@quebarbada' target='_blank' rel='noreferrer'>
              <TiktokLogo />
            </a>
            <a href='https://www.linkedin.com/company/quebarbada' target='_blank' rel='noreferrer'>
              <LinkedinLogo />
            </a>
            <a href='https://github.com/quebarbada/landing-page' target='_blank' rel='noreferrer'>
              <GithubLogo />
            </a>
          </div>
        </div>
        <div className={styles.legal}>
          <a
            href='https://www.quebarbada.com/politica-de-privacidade'
            target='_blank'
            rel='noreferrer'
          >
            <p>Política de Privacidade</p>
          </a>
          <a
            href='https://www.quebarbada.com/termos-de-uso-estabelecimento'
            target='_blank'
            rel='noreferrer'
          >
            <p>Termos de Uso - Estabelecimento</p>
          </a>
          <a
            href='https://www.quebarbada.com/termos-de-uso-usuario'
            target='_blank'
            rel='noreferrer'
          >
            <p>Termos de Uso - Usuário</p>
          </a>
        </div>
        <div className={styles.developer}>
          <p>Desenvolvido por:</p>
          <a href='https://www.linkedin.com/in/wesleybridirigo' target='_blank' rel='noreferrer'>
            <p>Wesley Bridi Rigo</p>
          </a>
        </div>
      </div>
    </footer>
  )
}
