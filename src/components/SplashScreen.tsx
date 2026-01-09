'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const splashRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        window.scrollTo({ top: 0, behavior: 'auto' })
        onComplete()
      },
    })

    const letters = textRef.current?.querySelectorAll('span')

    if (letters && letters.length > 0) {
      tl.fromTo(
        letters,
        {
          opacity: 0,
          y: 10,
          scale: 0.98,
          filter: 'blur(4px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.015, // apenas para evitar efeito seco (mas super discreto)
        }
      )
    }

    tl.to(splashRef.current, {
      y: '100%',
      duration: 1.0,
      delay: 0.8,
      ease: 'power4.inOut',
    })
  }, [onComplete])

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#04101B]"
      style={{ transform: 'translateY(0)' }}
    >
      <div
        ref={textRef}
        className="flex gap-[0.03em] text-white text-base md:text-lg space-grotesk-hero tracking-widest uppercase"
      >
        {'gaditas'.split('').map((char, index) => (
          <span key={index} className="inline-block">
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SplashScreen
