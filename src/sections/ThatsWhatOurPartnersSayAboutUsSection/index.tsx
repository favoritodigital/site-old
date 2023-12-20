import styles from './styles.module.css'

import { DownloadButton } from '../../components/DownloadButton'
import { WebDownloadButton } from '../../components/WebDownloadButton'

import { useIsMobile } from '../../hooks/useIsMobile'

export function ThatsWhatOurPartnersSayAboutUsSection() {
  const isMobile = useIsMobile()

  return (
    <div id='é-isso-que-os-empreendedores-falam-sobre-nós' className={styles.container}>
      <h1 className={styles.title}>É isso que os parceiros falam sobre nós...</h1>
      <iframe className={styles.video} src='https://www.youtube.com/embed/0lt0gWfoLMI' />
      {isMobile ? (
        <DownloadButton text={'Baixe agora'} />
      ) : (
        <WebDownloadButton text={'Baixe agora'} />
      )}
    </div>
  )
}
