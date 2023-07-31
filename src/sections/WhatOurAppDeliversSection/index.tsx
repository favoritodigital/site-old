import ClockIcon from '/public/images/icons/clock.svg'
import PodiumIcon from '/public/images/icons/podium.svg'
import ContactsIcon from '/public/images/icons/contacts.svg'
import EyeIcon from '/public/images/icons/eye.svg'
import PiggybankIcon from '/public/images/icons/piggybank.svg'
import RocketIcon from '/public/images/icons/rocket.svg'

import styles from './styles.module.css'
import Image from 'next/image'

export function WhatOurAppDeliversSection() {
  const items = [
    {
      id: 1,
      icon: '/images/icons/clock.svg',
      alt: 'Ícone de um relógio',
      text1: 'economia de tempo',
      text2: 'gerenciamos seu perfil, cadastrando todas as informações por você',
    },
    {
      id: 2,
      icon: '/images/icons/podium.svg',
      alt: 'Ícone de um pódio',
      text1: 'vantagem competitiva',
      text2: 'mostramos as principais características do seu estabelecimento',
    },
    {
      id: 3,
      icon: '/images/icons/contacts.svg',
      alt: 'Ícone de pessoas',
      text1: 'conexão com clientes',
      text2: 'melhoramos a comunicação do seu estabelecimento com o público',
    },
    {
      id: 4,
      icon: '/images/icons/eye.svg',
      alt: 'Ícone de um olho',
      text1: 'mais visibilidade',
      text2: 'temos parceria com hotéis e enviamos notificações diariamente',
    },
    {
      id: 5,
      icon: '/images/icons/piggybank.svg',
      alt: 'Ícone de um cofre',
      text1: 'custo-benefício',
      text2: 'somos o investimento em marketing mais acessível do mercado',
    },
    {
      id: 6,
      icon: '/images/icons/rocket.svg',
      alt: 'Ícone de um foguete',
      text1: 'inovação',
      text2: 'não existe outra plataforma como essa, e você pode sair na frente',
    },
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>o que o aplicativo Que Barbada te entrega</h1>
      <div className={styles.content}>
        {items.map(item => (
          <div key={item.id} className={styles.card}>
            <div className={styles.icon}>
              <Image src={item.icon} alt={item.alt} layout='fill' objectFit='contain' />
            </div>
            <p className={styles.text}>
              <span className={styles.bold}>
                {`${item.id}. `}
                <span className={styles.purple}>
                  {item.text1}
                  <br />
                </span>
              </span>
              {item.text2}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
