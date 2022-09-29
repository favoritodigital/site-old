import Image from 'next/image'

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
        <div className='img'>
          <Image
            layout='responsive'
            width={992}
            height={325}
            src='/images/appstorebutton.png'
            alt='appstore'
          />
        </div>
      ) : (
        <div className='img'>
          <Image
            layout='responsive'
            width={992}
            height={325}
            src='/images/googleplaybutton.png'
            alt='googleplay'
          />
        </div>
      )}
    </a>
  )
}
