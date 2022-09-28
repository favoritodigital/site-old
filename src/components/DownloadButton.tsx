import React from 'react'

interface Props {
  type: 'appstore' | 'googleplay'
}

export default function DownloadButton({ type }: Props) {
  return (
    <a
      href={
        type === 'appstore'
          ? 'https://apps.apple.com/br/app/que-barbada/id1598991618'
          : 'https://play.google.com/store/apps/details?id=com.quebarbada.quebarbada'
      }
      target='_blank'
      rel='noreferrer'
    >
      {type === 'appstore' ? (
        <img src='/images/appstorebutton.png' alt='appstore' />
      ) : (
        <img src='/images/googleplaybutton.png' alt='googleplay' />
      )}
    </a>
  )
}
