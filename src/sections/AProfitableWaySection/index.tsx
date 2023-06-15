import ProfitIcon from '../../../public/images/icons/profit-graph.svg'

import styles from './styles.module.css'

export function AProfitableWaySection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>um jeito lucrativo de facilitar os rolês</h1>
      <p className={styles.introductionParagraph}>
        você terá a satisfação de conectar pessoas ao seu rolê ideal e ainda ganhará com isso!
      </p>
      <div className={styles.icon}>
        <ProfitIcon />
      </div>
      <div className={styles.text}>
        <p className={styles.paragraph}>✔ receba comissão de 70% sobre as vendas realizadas</p>
        <p className={styles.paragraph}>✔ fature + de 8 mil/mês após 7 meses de operação</p>
        <p className={styles.paragraph}>✔ retorne o valor investido (payback) entre 7 a 12 meses</p>
      </div>
      <p className={styles.bold}>só dependerá da sua intensidade comercial!</p>
    </div>
  )
}
