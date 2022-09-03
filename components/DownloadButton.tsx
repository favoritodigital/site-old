// REACT
import React from 'react'

// IMAGES
import AppStoreLogo from '../public/images/appstorebutton.svg'
import GooglePlayLogo from '../public/images/googleplaybutton.svg'

// TYPES
interface Props {
  type: 'appstore' | 'googleplay'
}

// DOWNLOAD BUTTON
export default function DownloadButton({ type }: Props) {
  return (
    <a
      href={
        type === 'appstore'
          ? 'https://apps.apple.com/br/app/que-barbada/id1598991618'
          : 'https://play.google.com/store/apps/details?id=com.quebarbada.quebarbada'
      }
      target="_blank"
      rel="noreferrer"
    >
      {type === 'appstore' ? <AppStoreLogo /> : <GooglePlayLogo />}
    </a>
  )
}
