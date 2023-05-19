import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'
import '../styles/swiper.css'
import '../styles/slides-content-section.css'
import '../styles/slides-in-the-media.css'
import '../styles/slides-how-it-works.css'
import '../styles/slides-users-recommendation-section.css'
import '../styles/slides-where-we-are.css'

import BaseLayout from '../sections/BaseLayout'
import { CookiesProvider } from '../contexts/CookiesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Que Barbada - a bússola do rolê' />
        <meta name='description' content='encontre seu rolê em 30 segundos!' />
        <meta property='og:url' content='https://www.quebarbada.com/' />
        <meta property='og:image' content='https://www.quebarbada.com/quebarbada.png' />
      </Head>
      <CookiesProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </CookiesProvider>
    </>
  )
}

export default MyApp
