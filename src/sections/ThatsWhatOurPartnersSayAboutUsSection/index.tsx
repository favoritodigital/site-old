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

export function ThatsWhatOurPartnersSayAboutUsSection() {
  return (
    <div id='é-isso-que-os-empreendedores-falam-sobre-nós' className={styles.container}>
      <h1 className={styles.title}>é isso que os parceiros falam sobre nós...</h1>
      <div className={styles.video}>
        <div className={styles.mobile}>
          <YouTube opts={mobileOpts} videoId={'T43sLq62O1s'} />
        </div>
        <div className={styles.web}>
          <YouTube opts={webOpts} videoId={'T43sLq62O1s'} />
        </div>
      </div>
      <DownloadButton text='baixe agora' />
    </div>
  )
}
