'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'

import HeroSection from '@/components/ui/HeroSection'
import ValorSection from '@/components/ui/ValorSection'
import ValorSection2 from '@/components/ui/ValorSection2'
import ServicosSection from '@/components/ui/ServicosSection'
import TestimonialSection from '@/components/ui/TestemonialSection'
import ContactSection from '@/components/ui/ContactSection'
import Finalizadora from '@/components/ui/Finalizadora'
import Footer from '@/components/ui/Footer'
import ScrollToHashOnLoad from '@/components/ScrollToHashOnLoad'
import SplashScreen from '@/components/SplashScreen'
import Process from '@/components/ui/Process'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)

  // Garante que só renderize no client
  useEffect(() => {
    setHasMounted(true)

    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const handleSplashComplete = () => {
    window.scrollTo({ top: 0 })
    setShowSplash(false)
  }

  if (!hasMounted) return null

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Esconde todo o conteúdo até o splash sair */}
      <div className={`${showSplash ? 'hidden' : 'block'} `}>
        <main>
          <ScrollToHashOnLoad />
          <HeroSection />
          <ValorSection />
          <ValorSection2 />
          <ServicosSection />
          <Process/>
          <TestimonialSection />
          <ContactSection />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}
