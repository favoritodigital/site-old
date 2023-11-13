import Image from 'next/image'

import styles from './styles.module.css'

export function AStartupThatCameToHelpSection() {
  return (
    <div id='uma-start-up-que-veio-para-ajudar-section' className={styles.container}>
      <h1 className={styles.title}>Uma startup que veio para ajudar...</h1>
      <div className={styles.content}>
        <div className={styles.card1}>
          <div className={styles.ilustration}>
            <Image
              src='/images/ilustrations/uma-start-up-que-veio-para-ajudar_1.svg'
              alt='Imagem de amigos se divertindo'
              layout='fill'
              objectFit='contain'
              objectPosition={'center'}
            />
          </div>
          <p className={styles.paragraph}>
            Pessoas a encontrarem locais para comer, beber e se divertir com facilidade
          </p>
        </div>
        <div className={styles.card2}>
          <div className={styles.ilustration}>
            <Image
              src='/images/ilustrations/uma-start-up-que-veio-para-ajudar_2.svg'
              alt='Imagem de avaliações positivas'
              layout='fill'
              objectFit='contain'
              objectPosition={'center'}
            />
          </div>
          <p className={styles.paragraph}>
            Bares, pubs e restaurantes a melhorarem a experiência do cliente pela comunicação
          </p>
        </div>
        <div className={styles.card3}>
          <div className={styles.ilustration}>
            <Image
              src='/images/ilustrations/uma-start-up-que-veio-para-ajudar_3.svg'
              alt='Imagem de empreendedores se ajudando'
              layout='fill'
              objectFit='contain'
              objectPosition={'center'}
            />
          </div>
          <p className={styles.paragraph}>
            Franqueados do app a serem donos do próprio negócio de forma acessível
          </p>
        </div>
      </div>
    </div>
  )
}
