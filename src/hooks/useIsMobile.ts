import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

export function useIsMobile() {
  const [handleIsMobile, setHandleIsMobile] = useState(false)

  useEffect(() => {
    setHandleIsMobile(isMobile)
  }, [])

  return handleIsMobile
}
