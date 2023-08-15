import { useContext } from 'react'

import Link from 'next/link'

import styles from './styles.module.css'

import { CookiesContext } from '../../contexts/CookiesContext'

export function CookiesMessage() {
  const { setCookiesIsEnabled } = useContext(CookiesContext)

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>
          Utilizamos cookies para que você tenha a melhor experiência em nosso site. Para saber mais
          acesse nossa página de{' '}
          <Link href='/politica-de-privacidade'>
            <a className={styles.privacyPolicyLink}>Política de Privacidade</a>
          </Link>
          .
        </p>
      </div>

      <button className={styles.btn} onClick={setCookiesIsEnabled}>
        Entendi
      </button>
    </div>
  )
}
