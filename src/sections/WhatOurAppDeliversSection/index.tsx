import ClockIcon from '../../../public/images/icons/clock.svg'
import PodiumIcon from '../../../public/images/icons/podium.svg'
import ContactsIcon from '../../../public/images/icons/contacts.svg'
import EyeIcon from '../../../public/images/icons/eye.svg'
import PiggybankIcon from '../../../public/images/icons/piggybank.svg'
import RocketIcon from '../../../public/images/icons/rocket.svg'

import styles from './styles.module.css'

export function WhatOurAppDeliversSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>o que o aplicativo Que Barbada te entrega</h1>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <ClockIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              1.{' '}
              <span className={styles.purple}>
                economia de tempo
                <br />
              </span>
            </span>
            gerenciamos seu perfil, cadastrando todas as informações por você
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <PodiumIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              2.{' '}
              <span className={styles.purple}>
                vantagem competitiva
                <br />
              </span>
            </span>
            mostramos as principais características do seu estabelecimento
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <ContactsIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              3.{' '}
              <span className={styles.purple}>
                conexão com clientes
                <br />
              </span>
            </span>
            melhoramos a comunicação do seu estabelecimento com o público
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <EyeIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              4.{' '}
              <span className={styles.purple}>
                mais visibilidade
                <br />
              </span>
            </span>
            temos parceria com hotéis e enviamos notificações diariamente
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <PiggybankIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              5.{' '}
              <span className={styles.purple}>
                custo-benefício
                <br />
              </span>
            </span>
            somos o investimento em marketing mais acessível do mercado
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <RocketIcon />
          </div>
          <p className={styles.text}>
            <span className={styles.bold}>
              6.{' '}
              <span className={styles.purple}>
                inovação
                <br />
              </span>
            </span>
            não existe outra plataforma como essa, e você pode sair na frente
          </p>
        </div>
      </div>
    </div>
  )
}
