'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Check if this is the first visit
    const hasLoaded = typeof window !== 'undefined' && window.sessionStorage.getItem('artvince_loaded')
    
    if (hasLoaded) {
      // Already loaded, don't show loader
      setShowLoader(false)
      return
    }

    // First time, mark as loaded and show briefly
    window.sessionStorage.setItem('artvince_loaded', 'true')

    const hideTimer = setTimeout(() => {
      const loader = document.querySelector('.loader') as HTMLElement
      if (loader) {
        loader.style.opacity = '0'
        loader.style.pointerEvents = 'none'
      }

      const removeTimer = setTimeout(() => {
        setShowLoader(false)
      }, 300)

      return () => clearTimeout(removeTimer)
    }, 600)

    return () => clearTimeout(hideTimer)
  }, [])

  // Don't render anything if loader should be hidden
  if (!showLoader) {
    return null
  }

  return (
    <div className="loader">
      <div className="loader-text">
        INITIALIZING CORE... <span id="count">0</span>%
      </div>
      <div className="loader-track">
        <div className="loader-bar"></div>
      </div>
    </div>
  )
}
