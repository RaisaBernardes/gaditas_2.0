'use client'

import { useEffect } from 'react'

export default function ScrollToHashOnLoad() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.substring(1)
      const el = document.getElementById(id)
      if (el) {
        // Timeout para aguardar o DOM carregar
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return null
}
