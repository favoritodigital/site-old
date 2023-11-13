import Link from 'next/link'

import styles from './styles.module.css'

export function YouCanProfitWithEachBusinessSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        fature alto com
        <br />
        um negócio inovador
      </h1>
      <p className={styles.paragraph}>
        seja dono do aplicativo Favorito e tenha a chance de faturar mais de
        <span> R$ 20 mil reais por mês</span> vendendo a nossa solução! assista o vídeo abaixo para
        entender:
      </p>
      <iframe className={styles.video} src='https://www.youtube.com/embed/SWqBIbeF4t4' />
      <Link href='#bora-construir-uma-historia' rel='noreferrer'>
        <div className={styles.btn}>
          <div className={styles.content}>
            <p className={styles.text}>quero conhecer melhor agora</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
