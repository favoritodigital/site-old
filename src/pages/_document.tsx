import { Html, Head, Main, NextScript } from 'next/document'

import { FacebookPixelNoScript } from '../libs/FacebookPixelScript'

export default function Document() {
  return (
    <Html>
      <Head>
        <FacebookPixelNoScript />
      </Head>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
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
