import DownloadButton from '../../components/DownloadButton'
import ThatsWhatEntrepreneursSayAboutUsCarousel from '../../components/ThatsWhatEntrepreneursSayAboutUsCarousel'
import styles from './styles.module.css'

export default function ThatsWhatEntrepreneursSayAboutUsSection() {
  return (
    <div id='é-isso-que-os-empreendedores-falam-sobre-nós' className={styles.container}>
      <h1 className={styles.title}>é isso que os empreendedores falam sobre nós...</h1>
      <div className={styles.carousel}>
        <ThatsWhatEntrepreneursSayAboutUsCarousel />
      </div>
      <DownloadButton text='baixe agora' />
    </div>
  )
}
