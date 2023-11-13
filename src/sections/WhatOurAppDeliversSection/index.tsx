import Image from 'next/image'

import styles from './styles.module.css'

export function WhatOurAppDeliversSection() {
  const items = [
    {
      number: 1,
      id: 'clock-icon',
      icon: '/images/icons/clock.svg',
      alt: 'Ícone de um relógio',
      text1: 'economia de tempo',
      text2: 'gerenciamos seu perfil, cadastrando todas as informações por você',
    },
    {
      number: 2,
      id: 'podium-icon',
      icon: '/images/icons/podium.svg',
      alt: 'Ícone de um pódio',
      text1: 'vantagem competitiva',
      text2: 'mostramos as principais características do seu estabelecimento',
    },
    {
      number: 3,
      id: 'contacts-icon',
      icon: '/images/icons/contacts.svg',
      alt: 'Ícone de pessoas',
      text1: 'conexão com clientes',
      text2: 'melhoramos a comunicação do seu estabelecimento com o público',
    },
    {
      number: 4,
      id: 'eye-icon',
      icon: '/images/icons/eye.svg',
      alt: 'Ícone de um olho',
      text1: 'mais visibilidade',
      text2: 'temos parceria com hotéis e enviamos notificações diariamente',
    },
    {
      number: 5,
      id: 'piggybank-icon',
      icon: '/images/icons/piggybank.svg',
      alt: 'Ícone de um cofre',
      text1: 'custo-benefício',
      text2: 'somos o investimento em marketing mais acessível do mercado',
    },
    {
      number: 6,
      id: 'rocket-icon',
      icon: '/images/icons/rocket.svg',
      alt: 'Ícone de um foguete',
      text1: 'inovação',
      text2: 'não existe outra plataforma como essa, e você pode sair na frente',
    },
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>o que o aplicativo Favorito te entrega</h1>
      <div className={styles.content}>
        {items.map(item => (
          <div key={item.number} className={styles.card}>
            <div id={item.id} className={styles.icon}>
              <Image src={item.icon} alt={item.alt} layout='fill' objectFit='contain' />
            </div>
            <p className={styles.text}>
              <span className={styles.bold}>
                {`${item.number}. `}
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
