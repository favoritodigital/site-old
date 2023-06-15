import Image from 'next/image'

import styles from './styles.module.css'

export function OurPathSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>nossa trajetória</h1>
      <div className={styles.roadmap}>
        <div className={styles.row1}>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>
              1º de abril/22
              <br />
              (parece mentira)
            </h1>
            <p className={styles.cardParagraph}>
              Cristian e Gabriel pedem demissão de seus empregos como engenheiros na WEG
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>13 de abril/22</h1>
            <p className={styles.cardParagraph}>
              lançamento do app Que Barbada na cidade de Jaraguá do Sul - SC
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>15 de junho/22</h1>
            <p className={styles.cardParagraph}>
              recebemos o Prêmio de Melhor Pitch do Programa de Pré-Incubação da FAPESC em
              Florianópolis - SC
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>15 de agosto/22</h1>
            <p className={styles.cardParagraph}>
              implantado o modelo de licenciatura de marca em Jaraguá do Sul - SC
            </p>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>1º de outubro/22</h1>
            <p className={styles.cardParagraph}>início das operações na cidade de Criciúma - SC</p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>1º de fevereiro/23</h1>
            <p className={styles.cardParagraph}>início das operações na cidade de Joinville - SC</p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>15 de fevereiro/23</h1>
            <p className={styles.cardParagraph}>início das operações na cidade de Lajeado - RS</p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>30 de março/23</h1>
            <p className={styles.cardParagraph}>
              startup fica em 1º lugar no Programa Inova Criciúma e recebe aporte de 25 mil reais
            </p>
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>3 de abril/23</h1>
            <p className={styles.cardParagraph}>
              aprovados no Programa InovAtiva Brasil, a maior aceleradora de Startups da América
              Latina
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>13 de abril/23</h1>
            <p className={styles.cardParagraph}>
              1 ano de firma! O aplicativo está em 4 cidades e com + de 200 clientes cadastrados
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.cardTitle}>15 de junho/23</h1>
            <p className={styles.cardParagraph}>
              início das operações na cidade de Florianópolis - SC, nossa primeira capital!
            </p>
          </div>
          <div className={styles.altCard}>
            <h1 className={styles.altCardTitle}>e a história continua!</h1>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <Image
          src='/images/team/cristian-gabriel.png'
          layout='fill'
          objectFit='contain'
          alt='foto do Cristian e do Gabriel'
        />
      </div>
    </div>
  )
}
