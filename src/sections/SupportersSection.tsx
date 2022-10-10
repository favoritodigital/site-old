import 'swiper/css/pagination'
import 'swiper/css'

import { supporters } from '../utils/repository'

import SupporterItem from '../components/SupporterItem'

export default function SupportersSection() {
  return (
    <div id='apoiadores-section' className='section_half'>
      <div id='apoiadores'></div>
      <h1 className='section_title'>apoiadores</h1>
      <div className='section_content_half'>
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
