import Image from 'next/image'

import styles from './styles.module.css'

export function EnjoyOurExclusiveAdvantagesSection() {
  const items = [
    {
      id: 1,
      icon: '/images/icons/notebook.svg',
      alt: 'Ícon de um notebook',
      text1: 'Negócio digital',
      text2: 'Sem necessidade de escritório, estoques ou funcionários',
    },
    {
      id: 2,
      icon: '/images/icons/cup.svg',
      alt: 'Ícon de um troféu',
      text1: 'Produto inovador',
      text2: 'Aplicativo premiado e sem concorrentes diretos',
    },
    {
      id: 3,
      icon: '/images/icons/boss.svg',
      alt: 'Ícon de um chefe',
      text1: 'Seja seu próprio chefe',
      text2: 'Gerencie sua região de casa, nos seus horários',
    },
    {
      id: 4,
      icon: '/images/icons/checkbox.svg',
      alt: 'Ícon de um checkbox',
      text1: 'Estratégia validada',
      text2: 'Treinamento individualizado e suporte contínuo',
    },
    {
      id: 5,
      icon: '/images/icons/landmark.svg',
      alt: 'Ícon de uma bandeira',
      text1: 'Exclusividade territorial',
      text2: 'Atendimento na sua cidade e regiões próximas',
    },
    {
      id: 6,
      icon: '/images/icons/moneybag.svg',
      alt: 'Ícon de um saco de dinheiro',
      text1: 'Baixo investimento',
      text2: 'Investimento a partir de 25 mil reais',
    },
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Aproveite nossas vantagens exclusivas</h1>
      <div className={styles.content}>
        {items.map(item => (
          <div key={item.id} className={styles.card}>
            <div className={styles.icon}>
              <Image src={item.icon} alt={item.alt} layout='fill' objectFit='contain' />
            </div>
            <p className={styles.text}>
              <span className={styles.bold}>
                {`${item.id}. `}
                <span className={styles.purple}>{item.text1}</span>
              </span>
              <br />
              {item.text2}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
