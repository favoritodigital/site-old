import 'swiper/css'
import 'swiper/css/pagination'

import { supporters } from '../../repositories/supporters'

import SupporterItem from '../../components/SupporterItem'

import styles from './styles.module.css'

export default function SupportersSection() {
  return (
    <div id='apoiadores-section' className={styles.container}>
      <h1 className={styles.title}>apoiadores</h1>
      <div className={styles.content}>
        {supporters.map(supporter => {
          return (
            <SupporterItem
              key={supporter.name}
              name={supporter.name}
              imagePath={supporter.imagePath}
              url={supporter.url}
              width={supporter.width}
              height={supporter.height}
            />
          )
        })}
      </div>
    </div>
  )
}
