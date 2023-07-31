import { useIsMobile } from '../../hooks/useIsMobile'

import { DownloadButton } from '../../components/DownloadButton'
import { WebDownloadButton } from '../../components/WebDownloadButton'

import styles from './styles.module.css'
import Image from 'next/image'

export function WeDoEverythingForYouSection() {
  const isMobile = useIsMobile()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>nós fazemos tudo por você</h1>
      <div className={styles.icon}>
        <Image
          src='/images/icons/light-bulb.svg'
          alt='Imagem de uma lâmpada'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <p className={styles.paragraph}>além do cadastro de informações, também disponibilizamos:</p>
      <div className={styles.secondColumn}>
        <div className={styles.text}>
          <p className={styles.paragraphItem}>✔ relatórios mensais com as suas métricas</p>
          <p className={styles.paragraphItem}>✔ banner dentro do app (sob consulta)</p>
          <p className={styles.paragraphItem}>✔ notificações personalizadas (sob consulta)</p>
        </div>
        <div className={styles.btn}>
          {isMobile ? (
            <DownloadButton text={'baixe o app grátis'} />
          ) : (
            <WebDownloadButton text={'baixe o app grátis'} />
          )}
        </div>
      </div>
    </div>
  )
}
