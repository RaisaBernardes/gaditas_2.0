'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'

import HeroSection from '@/components/ui/HeroSection'
import ValorSection from '@/components/ui/ValorSection'
import ValorSection2 from '@/components/ui/ValorSection2'
import ServicosSection from '@/components/ui/ServicosSection'
import TestimonialSection from '@/components/ui/TestemonialSection'
import ContactSection from '@/components/ui/ContactSection'
import Footer from '@/components/ui/Footer'
import ScrollToHashOnLoad from '@/components/ScrollToHashOnLoad'
import SplashScreen from '@/components/SplashScreen'
import Process from '@/components/ui/Process'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Força o carregamento completo da página antes de mostrar qualquer coisa
    const preloadImages = async () => {
      const img = new Image()
      img.src = '/images/bg_hero.png'
      
      try {
        await img.decode()
        // Pequeno delay para garantir que tudo está renderizado
        setTimeout(() => {
          setIsReady(true)
        }, 100)
      } catch (_) {
        // Se falhar, mostra mesmo assim
        setIsReady(true)
      }
    }

    preloadImages()
  }, [])

  useEffect(() => {
    if (!showSplash && isReady) {
      const lenis = new Lenis()
      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
      
      return () => {
        lenis.destroy()
      }
    }
  }, [showSplash, isReady])

  const handleSplashComplete = () => {
    setShowSplash(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  // Loading state - tela preta
  if (!isReady) {
    return <div className="fixed inset-0 bg-[#04101B] z-[100]" />
  }

  return (
    <div className="relative">
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Main Content - sempre renderizado mas com opacidade 0 durante splash */}
      {/* Main Content - sempre renderizado */}
        <div
          className={showSplash ? 'pointer-events-none' : 'pointer-events-auto'}
          aria-hidden={showSplash}
        >
          <main>
            <ScrollToHashOnLoad />
            <HeroSection reveal={!showSplash} />
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

    </div>
  )
}