import 'swiper/css'
import 'swiper/css/pagination'

import styles from './styles.module.css'

import { SupporterItem } from '../../components/SupporterItem'

import { supporters } from '../../repositories/supporters'

export function SupportersSection() {
  return (
    <div id='apoiadores-section' className={styles.container}>
      <h1 className={styles.title}>Apoiadores</h1>
      <div className={styles.content}>
        {supporters.map(supporter => {
          return (
            <SupporterItem
              key={supporter.name}
              name={supporter.name}
              imagePath={supporter.imagePath}
              url={supporter.url}
            />
          )
        })}
      </div>
    </div>
  )
}
