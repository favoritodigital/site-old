import React, { useState, createContext, ReactNode, useEffect } from 'react'

interface CookiesContextData {
  cookiesIsEnabled: boolean
  setCookiesIsEnabled: (value: boolean) => void
}

interface Props {
  children: ReactNode
}

export const CookiesContext = createContext({} as CookiesContextData)

export function CookiesProvider({ children }: Props) {
  const [cookiesIsEnabled, setCookiesIsEnabled] = useState(false)

  useEffect(() => {
    const cookiesIsEnabled = localStorage.getItem('cookiesIsEnabled')

    if (cookiesIsEnabled === 'true') {
      setCookiesIsEnabled(true)
    }
  }, [])

  const handleSetCookiesIsEnabled = (enabled: boolean) => {
    localStorage.setItem('cookiesIsEnabled', enabled ? 'true' : 'false')
    setCookiesIsEnabled(enabled)
  }

  return (
    <CookiesContext.Provider
      value={{
        cookiesIsEnabled,
        setCookiesIsEnabled: handleSetCookiesIsEnabled,
      }}
    >
      {children}
    </CookiesContext.Provider>
  )
}
