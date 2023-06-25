import YouTube, { YouTubeProps } from 'react-youtube'
import { isMobile } from 'react-device-detect'

import { DownloadButton } from '../../components/DownloadButton'
import { WebDownloadButton } from '../../components/WebDownloadButton'

import styles from './styles.module.css'

const mobileOpts: YouTubeProps['opts'] = {
  height: '174',
  width: '310',
}

const webOpts: YouTubeProps['opts'] = {
  height: '253',
  width: '450',
}

export function ThatsWhatOurPartnersSayAboutUsSection() {
  return (
    <div id='é-isso-que-os-empreendedores-falam-sobre-nós' className={styles.container}>
      <h1 className={styles.title}>é isso que os parceiros falam sobre nós...</h1>
      <div className={styles.videos}>
        <div className={styles.video}>
          <div className={styles.mobile}>
            <YouTube opts={mobileOpts} videoId={'T43sLq62O1s'} />
          </div>
          <div className={styles.web}>
            <YouTube opts={webOpts} videoId={'T43sLq62O1s'} />
          </div>
        </div>
        <div className={styles.video}>
          <div className={styles.mobile}>
            <YouTube opts={mobileOpts} videoId={'lx8qJihfXZU'} />
          </div>
          <div className={styles.web}>
            <YouTube opts={webOpts} videoId={'lx8qJihfXZU'} />
          </div>
        </div>
      </div>
      {isMobile ? (
        <DownloadButton text={'baixe agora'} />
      ) : (
        <WebDownloadButton text={'baixe agora'} />
      )}
    </div>
  )
}
