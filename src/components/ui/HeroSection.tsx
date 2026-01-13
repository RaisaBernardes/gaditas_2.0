'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type HeroSectionProps = {
  reveal?: boolean
}

export default function HeroSection({ reveal = true }: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-[#04101B]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg_hero.png"
          alt="Background"
          fill
          sizes="100vw"
          priority
          quality={100}
          className="object-cover object-center"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {!imageLoaded && <div className="absolute inset-0 bg-[#04101B] z-[1]" />}

      <motion.div
        initial={false}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <motion.h1
          initial={false}
          animate={reveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.05 }}
          className="text-6xl md:text-7xl text-[var(--gray)] merriweather-light pt-6 tracking-tight"
        >
          Sua <span className="merriweather-light">obra,</span> <br /> nosso{' '}
          <span className="merriweather-light">compromisso.</span>
        </motion.h1>

        <motion.p
          initial={false}
          animate={reveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-sm md:text-base tracking-wide text-gray-300 max-w-xl manrope-light"
        >
          Projetos residenciais, reformas e soluções construtivas conduzidas com rigor técnico,
          comunicação direta e cuidado do início ao fim.
        </motion.p>

        <motion.div
          initial={false}
          animate={reveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex gap-4 items-center flex-col sm:flex-row mt-8"
        >
          <a
            className="text-black manrope-regular rounded-sm border border-solid border-transparent transition-colors flex items-center justify-center gap-2 hover:bg-[var(--darkyellow)] bg-[var(--yellow)] text-sm h-10 sm:h-12 px-4 sm:px-5"
            href="https://wa.me/5571981065728"
          >
            Falar com equipe
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
