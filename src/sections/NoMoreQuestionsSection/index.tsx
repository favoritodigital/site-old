import Image from 'next/image'

import styles from './styles.module.css'

export function NoMoreQuestionsSection() {
  return (
    <div id='chega-de-duvidas' className={styles.container}>
      <h1 className={styles.title}>chega de dúvidas na hora de sair</h1>
      <div className={styles.svg}>
        <Image
          src='/images/ilustrations/chega-de-duvidas.svg'
          alt='Imagem de uma pessoa com dúvidas de onde ir'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <p className={styles.paragraph}>
        no aplicativo Que Barbada você encontra as informações necessárias para escolher o seu rolê
        ideal, em apenas alguns toques
      </p>
    </div>
  )
}
