import Image from 'next/image'
import DownloadButton from '../../components/DownloadButton'
import styles from './styles.module.css'

export default function IntroductionSection() {
  return (
    <>
      <div id='inicio' className={styles.section}>
        <div className={styles.mobileContent}>
          <h1 className={styles.sectionTitle}>encontre os melhores rolês em um único lugar!</h1>
          <div className={styles.sectionContent}>
            <div className={styles.text}>
              <p>no nosso app, você tem acesso aos melhores rolês de maneira simples e prática.</p>
              <p>disponível para download na App Store e Google Play:</p>
            </div>
            <div className={styles.img}>
              <Image
                loading='eager'
                layout='responsive'
                width={494}
                height={1080}
                src='/images/inicio-mockup.png'
                alt='Imagem do aplicativo Que Barbada'
              />
            </div>
          </div>
          <div className={styles.downloadButtonsMobile}>
            <DownloadButton type='appstore' />
            <DownloadButton type='googleplay' />
          </div>
        </div>
        <div className={styles.webContent}>
          <div className={styles.sectionContent}>
            <div className={styles.leftColumn}>
              <h1 className={styles.sectionTitle}>encontre os melhores rolês em um único lugar!</h1>
              <div className={styles.text}>
                <p>
                  no nosso app, você tem acesso aos melhores rolês de maneira simples e prática.
                </p>
                <p>disponível para download na App Store e Google Play:</p>
              </div>
              <div className={styles.downloadButtonsWeb}>
                <DownloadButton type='appstore' />
                <DownloadButton type='googleplay' />
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.img}>
                <Image
                  loading='eager'
                  layout='responsive'
                  width={494}
                  height={1080}
                  src='/images/inicio-mockup.png'
                  alt='Imagem do aplicativo Que Barbada'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
