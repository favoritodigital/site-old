import { useIsMobile } from '../../hooks/useIsMobile'

import { DownloadButton } from '../../components/DownloadButton'
import { WebDownloadButton } from '../../components/WebDownloadButton'

import styles from './styles.module.css'

export function ThatsWhatOurPartnersSayAboutUsSection() {
  const isMobile = useIsMobile()

  return (
    <div id='é-isso-que-os-empreendedores-falam-sobre-nós' className={styles.container}>
      <h1 className={styles.title}>é isso que os parceiros falam sobre nós...</h1>
      <div className={styles.videos}>
        <iframe className={styles.video} src='https://www.youtube.com/embed/T43sLq62O1s' />
        <iframe className={styles.video} src='https://www.youtube.com/embed/lx8qJihfXZU' />
      </div>
      {isMobile ? (
        <DownloadButton text={'baixe agora'} />
      ) : (
        <WebDownloadButton text={'baixe agora'} />
      )}
    </div>
  )
}
