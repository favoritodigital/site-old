import YouTube, { YouTubeProps } from 'react-youtube'

import { DownloadButton } from '../../components/DownloadButton'

import styles from './styles.module.css'

const mobileOpts: YouTubeProps['opts'] = {
  height: '174',
  width: '310',
}

const webOpts: YouTubeProps['opts'] = {
  height: '430',
  width: '765',
}

export function StandOutSection() {
  return (
    <div id='a-plataforma-de-divulgacao-que-o-empreendedor-precisava' className={styles.container}>
      <h1 className={styles.title}>tenha destaque na gastronomia e lazer local</h1>
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
