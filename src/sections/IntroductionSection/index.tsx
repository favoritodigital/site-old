import Image from 'next/image'

import StoreDownloadButton from '../../components/StoreDownloadButton'
import DownloadButton from '../../components/DownloadButton'

import styles from './styles.module.css'

export default function IntroductionSection() {
  return (
    <div id='inicio' className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>encontre seu rolê em 30 segundos</h1>

        <p className={styles.paragraph}>
          te damos bons motivos para sair de casa e curtir! e o melhor:{' '}
          <span>quem decide o rolê é você!</span>
        </p>

        <div className={styles.storeDownloadButtons}>
          <StoreDownloadButton type='appstore' />
          <StoreDownloadButton type='googleplay' />
        </div>

        <div className={styles.img}>
          <Image
            loading='eager'
            layout='responsive'
            width={440}
            height={850}
            src='/images/app/app-introduction.png'
            alt='Imagem do aplicativo Que Barbada'
          />
        </div>
        <div className={styles.downloadButton}>
          <DownloadButton text={'baixe o app grátis'} />
        </div>
      </div>
    </div>
  )
}
