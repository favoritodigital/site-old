import { useEffect } from 'react'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Analytics } from '@vercel/analytics/react'

import '../styles/globals.css'
import '../styles/what-our-app-delivers-section-icons.css'
import '../styles/swiper.css'
import '../styles/slides-in-the-media.css'
import '../styles/slides-how-it-works.css'
import '../styles/slides-users-recommendation-section.css'
import '../styles/slides-how-our-business-work.css'
import '../styles/slides-where-we-are-section.css'

import * as facebookPixel from '../libs/facebookPixelHelper'
import { FacebookPixelScript } from '../libs/FacebookPixelScript'
import * as googleAnalytics from '../libs/googleAnalyticsHelper'
import { GoogleAnalyticsScript } from '../libs/GoogleAnalyticsScript'

import { BaseLayout } from '../sections/BaseLayout'

import { CookiesProvider } from '../contexts/CookiesContext'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      facebookPixel.trackPageView()
      googleAnalytics.trackPageView()
    }

    handleRouteChange()

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Favorito: sua melhor experiência' />
        <meta name='description' content='Descubra seu novo local Favorito!' />
        <meta property='og:url' content='https://favorito.digital/' />
        <meta property='og:image' content='https://favorito.digital/favorito.png' />
      </Head>
      <FacebookPixelScript />
      <GoogleAnalyticsScript />
      <CookiesProvider>
        <BaseLayout>
          <Component {...pageProps} />
          <Analytics />
        </BaseLayout>
      </CookiesProvider>
    </>
  )
}

export default MyApp
