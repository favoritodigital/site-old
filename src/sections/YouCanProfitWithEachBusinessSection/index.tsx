import YouTube, { YouTubeProps } from 'react-youtube'

import styles from './styles.module.css'

const mobileOpts: YouTubeProps['opts'] = {
  height: '174',
  width: '310',
}

const webOpts: YouTubeProps['opts'] = {
  height: '430',
  width: '765',
}

export default function YouCanProfitWithEachBusinessSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        fature alto com
        <br />
        um negócio inovador
      </h1>
      <p className={styles.paragraph}>
        seja dono do aplicativo Que Barbada e tenha a chance de faturar mais de
        <span> R$ 20 mil reais</span> vendendo a nossa solução! assista o vídeo abaixo para
        entender:
      </p>
      <div className={styles.video}>
        <div className={styles.mobile}>
          <YouTube opts={mobileOpts} videoId={'-p6tSfUjP3o'} />
        </div>
        <div className={styles.web}>
          <YouTube opts={webOpts} videoId={'-p6tSfUjP3o'} />
        </div>
      </div>
      <a
        href='/seja-um-franqueado#shall-we-build-history-together'
        target='_blank'
        rel='noreferrer'
      >
        <div className={styles.btn}>
          <div className={styles.content}>
            <p className={styles.text}>quero conhecer melhor agora</p>
          </div>
        </div>
      </a>
    </div>
  )
}
