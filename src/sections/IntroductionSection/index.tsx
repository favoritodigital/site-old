import Image from 'next/image'

import styles from './styles.module.css'

import { DownloadButton } from '../../components/DownloadButton'
import { StoreDownloadButton } from '../../components/StoreDownloadButton'

export function IntroductionSection() {
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
            layout='fill'
            objectFit='contain'
            objectPosition='right center'
            priority
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
