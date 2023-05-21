import YouTube, { YouTubeProps } from 'react-youtube'

import styles from './styles.module.css'
import DownloadButton from '../../components/DownloadButton'

const mobileOpts: YouTubeProps['opts'] = {
  height: '174',
  width: '310',
  playerVars: {
    autoplay: 0,
  },
}

const webOpts: YouTubeProps['opts'] = {
  height: '430',
  width: '765',
  playerVars: {
    autoplay: 0,
  },
}

export default function DisclosurePlatformEntrepreneursNeedSection() {
  return (
    <div id='a-plataforma-de-divulgacao-que-o-empreendedor-precisava' className={styles.container}>
      <h1 className={styles.title}>a plataforma de divulgação que o empreendedor precisava</h1>
      <p className={styles.paragraph}>
        se você tem um bar, pub, restaurante, até mesmo um evento, o aplicativo Que Barbada foi
        criado para te trazer benefícios exclusivos! assista o vídeo abaixo para entender:
      </p>
      <div className={styles.video}>
        <div className={styles.mobile}>
          <YouTube opts={mobileOpts} videoId={'-p6tSfUjP3o'} />
        </div>
        <div className={styles.web}>
          <YouTube opts={webOpts} videoId={'-p6tSfUjP3o'} />
        </div>
      </div>
      <DownloadButton text='baixe o app grátis' />
    </div>
  )
}
