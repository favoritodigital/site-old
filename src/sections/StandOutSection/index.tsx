import styles from './styles.module.css'

import { DownloadButton } from '../../components/DownloadButton'
import { WebDownloadButton } from '../../components/WebDownloadButton'

import { useIsMobile } from '../../hooks/useIsMobile'

export function StandOutSection() {
  const isMobile = useIsMobile()

  return (
    <div id='a-plataforma-de-divulgacao-que-o-empreendedor-precisava' className={styles.container}>
      <h1 className={styles.title}>tenha destaque na gastronomia e lazer local</h1>
      <p className={styles.paragraph}>
        se você tem um bar, pub, restaurante, até mesmo um evento, o aplicativo Que Barbada foi
        criado para te trazer benefícios exclusivos! assista o vídeo abaixo para entender:
      </p>
      <iframe className={styles.video} src='https://www.youtube.com/embed/-p6tSfUjP3o' />
      {isMobile ? (
        <DownloadButton text={'baixe o app grátis'} />
      ) : (
        <WebDownloadButton text={'baixe o app grátis'} />
      )}
    </div>
  )
}
