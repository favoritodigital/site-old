import Image from 'next/image'

import styles from './styles.module.css'

import { DownloadButton } from '../../components/DownloadButton'
import { WebDownloadButton } from '../../components/WebDownloadButton'

import { useIsMobile } from '../../hooks/useIsMobile'

export function WeDoEverythingForYouSection() {
  const isMobile = useIsMobile()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nós fazemos tudo por você</h1>
      <div className={styles.icon}>
        <Image
          src='/images/icons/light-bulb.svg'
          alt='Imagem de uma lâmpada'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <p className={styles.paragraph}>Além do cadastro de informações, também disponibilizamos:</p>
      <div className={styles.secondColumn}>
        <div className={styles.text}>
          <p className={styles.paragraphItem}>✔ Relatórios mensais com as suas métricas</p>
          <p className={styles.paragraphItem}>✔ Banner dentro do app (sob consulta)</p>
          <p className={styles.paragraphItem}>✔ Notificações personalizadas (sob consulta)</p>
        </div>
        <div className={styles.btn}>
          {isMobile ? (
            <DownloadButton text={'Baixe o app grátis'} />
          ) : (
            <WebDownloadButton text={'Baixe o app grátis'} />
          )}
        </div>
      </div>
    </div>
  )
}
