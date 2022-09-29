import 'swiper/css/pagination'
import 'swiper/css'

import { sponsors } from '../utils/repository'

import SponsorItem from '../components/SupporterItem'

export default function SupportersSection() {
  return (
    <div id='apoiadores-section' className='section_half'>
      <div id='apoiadores'></div>
      <h1 className='section_title'>apoiadores</h1>
      <div className='section_content_half'>
        {sponsors.map(sponsor => {
          return (
            <SponsorItem
              key={sponsor.name}
              name={sponsor.name}
              imageFileName={sponsor.imageFileName}
              url={sponsor.url}
              width={sponsor.width}
              height={sponsor.height}
            />
          )
        })}
      </div>
    </div>
  )
}
