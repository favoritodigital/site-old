import type { AppProps } from 'next/app'
import Head from 'next/head'

import BaseLayout from '../sections/BaseLayout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='encontre os melhores rolês!' />
        <meta property='og:title' content='a bússola do rolê' />
        <meta property='og:url' content='https://www.quebarbada.com/' />
        <meta
          property='og:image'
          content='https://instagram.flaj2-1.fna.fbcdn.net/v/t51.2885-19/294619546_588196712821766_7521457590083016436_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.flaj2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=PwN7deuVzrUAX8W22jt&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8NhYyNBpPUnvNmdFslYjoxhe3drHm2VKSfQh7Q6E4K1w&oe=6349FC33&_nc_sid=8fd12b'
        />
      </Head>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  )
}

export default MyApp
