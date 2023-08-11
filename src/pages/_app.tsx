import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'

import '../styles/globals.css'
import '../styles/what-our-app-delivers-section-icons.css'
import '../styles/swiper.css'
import '../styles/slides-in-the-media.css'
import '../styles/slides-how-it-works.css'
import '../styles/slides-users-recommendation-section.css'
import '../styles/slides-how-our-business-work.css'
import '../styles/slides-where-we-are-section.css'

import { BaseLayout } from '../sections/BaseLayout'
import { CookiesProvider } from '../contexts/CookiesContext'
import { trackPageView } from '../helpers/facebookPixelHelper'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    trackPageView()

    const handleRouteChange = () => {
      trackPageView()
    }

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
        <meta property='og:title' content='Que Barbada - a bússola do rolê' />
        <meta name='description' content='encontre seu rolê em 30 segundos!' />
        <meta property='og:url' content='https://www.quebarbada.com/' />
        <meta property='og:image' content='https://www.quebarbada.com/quebarbada.png' />
      </Head>
      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                   !(function (f, b, e, v, n, t, s) {
                     if (f.fbq) return
                     n = f.fbq = function () {
                       n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                     }
                     if (!f._fbq) f._fbq = n
                     n.push = n
                     n.loaded = !0
                     n.version = '2.0'
                     n.queue = []
                     t = b.createElement(e)
                     t.async = !0
                     t.src = v
                     s = b.getElementsByTagName(e)[0]
                     s.parentNode.insertBefore(t, s)
                   })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
                   fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}')
                   fbq('track', 'PageView')
                  `,
        }}
      />
      <CookiesProvider>
        <BaseLayout>
          <>
            <Component {...pageProps} />
            <Analytics />
          </>
        </BaseLayout>
      </CookiesProvider>
    </>
  )
}

export default MyApp
