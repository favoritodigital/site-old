import NotebookIcon from '../../../public/images/icons/notebook.svg'
import CupIcon from '../../../public/images/icons/cup.svg'
import BossIcon from '../../../public/images/icons/boss.svg'
import CheckboxIcon from '../../../public/images/icons/checkbox.svg'
import LandmarkIcon from '../../../public/images/icons/landmark.svg'
import MoneybagIcon from '../../../public/images/icons/moneybag.svg'

import styles from './styles.module.css'

export function EnjoyOurExclusiveAdvantagesSection() {
  const items = [
    {
      id: 1,
      icon: NotebookIcon,
      text1: 'negócio digital',
      text2: 'sem necessidade de escritório, estoques ou funcionários',
    },
    {
      id: 2,
      icon: CupIcon,
      text1: 'produto inovador',
      text2: 'aplicativo premiado e sem concorrentes diretos',
    },
    {
      id: 3,
      icon: BossIcon,
      text1: 'seja seu próprio chefe',
      text2: 'gerencie sua região de casa, nos seus horários',
    },
    {
      id: 4,
      icon: CheckboxIcon,
      text1: 'estratégia validada',
      text2: 'treinamento individualizado e suporte contínuo',
    },
    {
      id: 5,
      icon: LandmarkIcon,
      text1: 'exclusividade territorial',
      text2: 'atendimento na sua cidade e regiões próximas',
    },
    {
      id: 6,
      icon: MoneybagIcon,
      text1: 'baixo risco',
      text2: 'pode demorar além do previsto, mas o valor investido retorna pra você',
    },
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>aproveite nossas vantagens exclusivas</h1>
      <div className={styles.content}>
        {items.map(item => (
          <div key={item.id} className={styles.card}>
            <div className={styles.icon}>{item.icon()}</div>
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
