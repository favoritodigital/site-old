import 'swiper/css/pagination'
import 'swiper/css'

import { supporters } from '../../utils/supporters'

import SupporterItem from '../../components/SupporterItem'

import styles from './styles.module.css'

export default function SupportersSection() {
  return (
    <div id='apoiadores-section' className={styles.container}>
      <div id='apoiadores' className={styles.pin}></div>
      <h1 className={styles.sectionTitle}>apoiadores</h1>
      <div className={styles.sectionContentHalf}>
        {supporters.map(supporter => {
          return (
            <SupporterItem
              key={supporter.name}
              name={supporter.name}
              imageFileName={supporter.imageFileName}
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
