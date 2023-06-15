import YouTube, { YouTubeProps } from 'react-youtube'

import styles from './styles.module.css'
import Link from 'next/link'

const mobileOpts: YouTubeProps['opts'] = {
  height: '174',
  width: '310',
}

const webOpts: YouTubeProps['opts'] = {
  height: '430',
  width: '765',
}

export function YouCanProfitWithEachBusinessSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        fature alto com
        <br />
        um negócio inovador
      </h1>
      <p className={styles.paragraph}>
        seja dono do aplicativo Que Barbada e tenha a chance de faturar mais de
        <span> R$ 20 mil reais por mês</span> vendendo a nossa solução! assista o vídeo abaixo para
        entender:
      </p>
      <div className={styles.video}>
        <div className={styles.mobile}>
          <YouTube opts={mobileOpts} videoId={'SWqBIbeF4t4'} />
        </div>
        <div className={styles.web}>
          <YouTube opts={webOpts} videoId={'SWqBIbeF4t4'} />
        </div>
      </div>
      <Link href='#bora-construir-uma-historia' rel='noreferrer'>
        <div className={styles.btn}>
          <div className={styles.content}>
            <p className={styles.text}>quero conhecer melhor agora</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
