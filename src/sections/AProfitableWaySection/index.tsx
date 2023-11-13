import Image from 'next/image'

import styles from './styles.module.css'

export function AProfitableWaySection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Um jeito lucrativo de facilitar os rolês</h1>
      <p className={styles.introductionParagraph}>
        Você terá a satisfação de conectar pessoas ao seu rolê ideal e ainda ganhará com isso!
      </p>
      <div className={styles.icon}>
        <Image
          src='/images/icons/profit-graph.svg'
          alt='Imagem de um gráfico com resultados positivos'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className={styles.secondColumn}>
        <div className={styles.text}>
          <p className={styles.paragraph}>✔ Receba comissão de 70% sobre as vendas realizadas</p>
          <p className={styles.paragraph}>✔ Fature + de 8 mil/mês após 7 meses de operação</p>
          <p className={styles.paragraph}>
            ✔ Retorne o valor investido (payback) entre 7 a 12 meses
          </p>
        </div>
        <p className={styles.bold}>Só dependerá da sua intensidade comercial!</p>
      </div>
    </div>
  )
}
