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
            width={212}
            height={410}
            src='/images/app/app-2.png'
            alt='Imagem do aplicativo Que Barbada'
          />
        </div>
        <div className={styles.downloadButton}>
          <DownloadButton text={'baixe o app grátis'} />
        </div>
      </div>
    </div>
  )

  // <>
  //   <div id='inicio' className={styles.container}>
  //     <div className={styles.mobileContent}>
  //       <h1 className={styles.sectionTitle}>encontre os melhores rolês em um único lugar!</h1>
  //       <div className={styles.sectionContent}>
  //         <div className={styles.text}>
  //           <p>no nosso app, você tem acesso aos melhores rolês de maneira simples e prática.</p>
  //           <p>disponível para download na App Store e Google Play:</p>
  //         </div>

  //       </div>

  //     </div>
  //     <div className={styles.webContent}>
  //       <div className={styles.sectionContent}>
  //         <div className={styles.leftColumn}>
  //           <h1 className={styles.sectionTitle}>encontre os melhores rolês em um único lugar!</h1>
  //           <div className={styles.text}>
  //             <p>
  //               no nosso app, você tem acesso aos melhores rolês de maneira simples e prática.
  //             </p>
  //             <p>disponível para download na App Store e Google Play:</p>
  //           </div>
  //           <div className={styles.downloadButtonsWeb}>
  //             <DownloadButton type='appstore' />
  //             <DownloadButton type='googleplay' />
  //           </div>
  //         </div>
  //         <div className={styles.rightColumn}>
  //           <div className={styles.img}>
  //             <Image
  //               loading='eager'
  //               layout='responsive'
  //               width={494}
  //               height={1080}
  //               src='/images/app/app-perspective.png'
  //               alt='Imagem do aplicativo Que Barbada'
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </>
}
