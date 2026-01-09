'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // ajustar o tempo conforme a splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg_hero.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          className="object-center"
        />
      </div>

      {/* Content */}
      {showContent && (
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-[#071A2D]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-6xl md:text-7xl text-[var(--gray)] merriweather-light pt-6 tracking-tight "
          >
            Sua <span className="merriweather-light">obra,</span> <br /> nosso{' '}
            <span className='merriweather-light'>compromisso.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-sm md:text-base tracking-wide text-gray-300 max-w-xl manrope-light"
          >
            Projetos residenciais, reformas e soluções construtivas conduzidas com rigor técnico, comunicação direta e cuidado do início ao fim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-4 items-center flex-col sm:flex-row mt-8"
          >
            <a
              className="text-black manrope-regular rounded-sm border border-solid border-transparent transition-colors flex items-center justify-center gap-2 hover:bg-[var(--darkyellow)] bg-[var(--yellow)] text-sm sm:text-sm h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://wa.me/5571981065728"
            >
              Falar com equipe
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
}
