import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItems}>
        <div className={styles.quebarbada}>
          <Link href={'/'}>
            <a>
              <Image
                src='/images/quebarbada-logo.svg'
                alt='logo do Que Barbada'
                layout='fill'
                objectFit='contain'
              />
            </a>
          </Link>
          <p>&copy; {new Date().getFullYear()} Que Barbada. Todos direitos reservados.</p>
          <p>CNPJ 46.230.468/0001-73</p>
        </div>
        <div className={styles.socialMedia}>
          <p>Siga nas redes sociais:</p>
          <div className={styles.socialMediaImages}>
            <a href='https://www.instagram.com/quebarbadaoficial/' target='_blank' rel='noreferrer'>
              <Image
                src='/images/brands/social-medias/instagram.svg'
                alt='logo do Instagram'
                layout='fill'
                objectFit='contain'
              />
            </a>
            <a href='https://www.tiktok.com/@quebarbada' target='_blank' rel='noreferrer'>
              <Image
                src='/images/brands/social-medias/tiktok.svg'
                alt='logo do Tiktok'
                layout='fill'
                objectFit='contain'
              />
            </a>
            <a href='https://www.linkedin.com/company/quebarbada' target='_blank' rel='noreferrer'>
              <Image
                src='/images/brands/social-medias/linkedin.svg'
                alt='logo do Lindekin'
                layout='fill'
                objectFit='contain'
              />
            </a>
            <a href='https://github.com/quebarbada/landing-page' target='_blank' rel='noreferrer'>
              <Image
                src='/images/brands/social-medias/github.svg'
                alt='logo do Github'
                layout='fill'
                objectFit='contain'
              />
            </a>
            <a href='https://www.youtube.com/@quebarbada' target='_blank' rel='noreferrer'>
              <Image
                src='/images/brands/social-medias/youtube.svg'
                alt='logo do Github'
                layout='fill'
                objectFit='contain'
              />
            </a>
          </div>
        </div>
        <div className={styles.legal}>
          <a href='/politica-de-privacidade' target='_blank' rel='noreferrer'>
            <p>Política de Privacidade</p>
          </a>
          <a href='/termos-de-uso' target='_blank' rel='noreferrer'>
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
