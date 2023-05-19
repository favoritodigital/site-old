import styles from './styles.module.css'
import Ilustration from '../../../public/images/ilustrations/chega-de-duvidas.svg'

export default function NoMoreQuestions() {
  return (
    <div id='chega-de-duvidas' className={styles.container}>
      <h1 className={styles.title}>chega de dúvidas na hora de sair</h1>
      <Ilustration />
      <p className={styles.paragraph}>
        no app Que Barbada você encontra as informações necessárias para escolher o seu rolê ideal,
        em apenas alguns toques.
      </p>
    </div>
  )
}
