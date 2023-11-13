import styles from './styles.module.css'

import { DownloadButton } from '../../components/DownloadButton'
import { WebDownloadButton } from '../../components/WebDownloadButton'

import { useIsMobile } from '../../hooks/useIsMobile'

export function ThatsWhatOurPartnersSayAboutUsSection() {
  const isMobile = useIsMobile()

  return (
    <div id='é-isso-que-os-empreendedores-falam-sobre-nós' className={styles.container}>
      <h1 className={styles.title}>É isso que os parceiros falam sobre nós...</h1>
      <div className={styles.videos}>
        <iframe className={styles.video} src='https://www.youtube.com/embed/T43sLq62O1s' />
        <iframe className={styles.video} src='https://www.youtube.com/embed/lx8qJihfXZU' />
      </div>
      {isMobile ? (
        <DownloadButton text={'Baixe agora'} />
      ) : (
        <WebDownloadButton text={'Baixe agora'} />
      )}
    </div>
  )
}
