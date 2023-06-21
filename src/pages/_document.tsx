/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={'true'} />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap'
        rel='stylesheet'
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
