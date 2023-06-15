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

export function WhoAlreadyMadeItHappenSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>quem já fez acontecer</h1>
      <div className={styles.mobile}>
        <YouTube opts={mobileOpts} videoId={'2W-KDA4F1Ng'} />
      </div>
      <div className={styles.web}>
        <YouTube opts={webOpts} videoId={'2W-KDA4F1Ng'} />
      </div>
    </div>
  )
}
