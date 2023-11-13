import Image from 'next/image'

import styles from './styles.module.css'

import { DownloadButton } from '../../components/DownloadButton'
import { StoreDownloadButton } from '../../components/StoreDownloadButton'

export function IntroductionSection() {
  return (
    <div id='inicio' className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Encontre onde comer e beber</h1>

        <p className={styles.paragraph}>
          Te damos bons motivos para sair de casa e curtir! E o melhor:{' '}
          <span>quem escolhe a experiência é você!</span>
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
            alt='Imagem do aplicativo Favorito'
          />
        </div>
        <div className={styles.downloadButton}>
          <DownloadButton text={'Baixe o app grátis'} />
        </div>
      </div>
    </div>
  )
}
