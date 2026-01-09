'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type HeroSectionProps = {
  reveal?: boolean;
};

export default function HeroSection({ reveal = true }: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const canRevealContent = reveal && imageLoaded;

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-[#04101B]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg_hero.png"
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>

      {/* Conteúdo: anima apenas depois da splash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: canRevealContent ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
          animate={{ opacity: canRevealContent ? 1 : 0, y: canRevealContent ? 0 : 40, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="text-6xl md:text-7xl text-[var(--gray)] merriweather-light pt-6 tracking-tight"
        >
          Sua <span className="merriweather-light">obra,</span> <br /> nosso{' '}
          <span className="merriweather-light">compromisso.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: canRevealContent ? 1 : 0, y: canRevealContent ? 0 : 20, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="mt-6 text-sm md:text-base tracking-wide text-gray-300 max-w-xl manrope-light"
        >
          Projetos residenciais, reformas e soluções construtivas conduzidas com rigor técnico, comunicação direta e cuidado do início ao fim.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          animate={{ opacity: canRevealContent ? 1 : 0, y: canRevealContent ? 0 : 10, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex gap-4 items-center flex-col sm:flex-row mt-8"
        >
          <a
            className="text-black manrope-regular rounded-sm border border-solid border-transparent transition-colors flex items-center justify-center gap-2 hover:bg-[var(--darkyellow)] bg-[var(--yellow)] text-sm sm:text-sm h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://wa.me/5571981065728"
          >
            Falar com equipe
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
