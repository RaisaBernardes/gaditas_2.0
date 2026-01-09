'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import ScrollToSectionLink from '../ScrollToSectionLink'
import { gsap } from 'gsap'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [viewportHeight, setViewportHeight] = useState('100vh')
  const containerRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLUListElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  
  const closeMenu = () => {
    const listItems = linksRef.current?.querySelectorAll('.reveal-item')
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        setIsOpen(false)
      },
    })

    if (listItems) {
      tl.to(listItems, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.4,
        stagger: 0.05,
        ease: 'power3.in',
      })
    }

    tl.to(containerRef.current, {
      y: '100%',
      duration: 0.6,
      ease: 'power4.inOut',
    })
  }

  useEffect(() => {
    if (isOpen) {
      const handleResize = () => {
        setViewportHeight(`${window.innerHeight}px`)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      document.body.style.overflow = 'hidden'

      const tl = gsap.timeline()
      
      tl.fromTo(
        containerRef.current,
        { y: '-100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.8, ease: 'power4.out' }
      )

      const listItems = linksRef.current?.querySelectorAll('.reveal-item')
      if (listItems) {
        tl.fromTo(
          listItems,
          { clipPath: 'inset(0 0 100% 0)' },
          {
            clipPath: 'inset(0 0 0% 0)',
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.4'
        )
      }

      return () => {
        window.removeEventListener('resize', handleResize)
        document.body.style.overflow = ''
      }
    }
  }, [isOpen])

  return (
    <>
      <nav className="w-full top-0 left-0 z-50 transparent backdrop-blur bg-[#13262A]">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left - Brand + Links */}
            <ul className="flex gap-6 text-sm font-light text-gray-300 manrope-light uppercase">
              <li><ScrollToSectionLink sectionId="inicio" className="text-[#FFFFFF] space-grotesk-hero">GADITAS</ScrollToSectionLink></li>
              <li className="hidden md:block"><ScrollToSectionLink sectionId="inicio" className="hover:text-[var(--lightgreen)]">Início</ScrollToSectionLink></li>
              <li className="hidden md:block"><ScrollToSectionLink sectionId="sobre" className="hover:text-[var(--lightgreen)]">Sobre</ScrollToSectionLink></li>
              <li className="hidden md:block"><ScrollToSectionLink sectionId="servicos" className="hover:text-[var(--lightgreen)]">Serviços</ScrollToSectionLink></li>
            </ul>

            {/* Right - Desktop Button & Mobile Menu Icon */}
            <div className="flex items-center gap-4">
              <Link
                href="#contato"
                scroll={true}
                className="hidden md:block text-sm font-light bg-transparent border-gray-300 text-gray-300 px-4 py-2 rounded-sm hover:text-[var(--lightgreen)] hover:border-[var(--lightgreen)] border-1 transition manrope-regular"
              >
                Contato
              </Link>

              <button className="md:hidden p-2 text-gray-200" onClick={toggleMenu} aria-label="Menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={containerRef}
          className="md:hidden fixed inset-0 z-[9999] bg-[var(--darkergreen)] text-white flex flex-col px-6 py-6"
          style={{
            height: viewportHeight,
            transform: 'translateY(0)',
          }}
        >
          {/* Top bar */}
          <div className="flex justify-between items-center mb-10">
            <ScrollToSectionLink sectionId="inicio" className="text-[#FFFFFF] space-grotesk-hero">GADITAS</ScrollToSectionLink>
            <button onClick={closeMenu} aria-label="Fechar" className="text-gray-200">
              <X size={24} />
            </button>
          </div>

          {/* Animated links */}
          <ul
            ref={linksRef}
            className="flex flex-col gap-6 text-3xl uppercase"
          >
            <li
              className="reveal-item overflow-hidden"
              style={{ clipPath: 'inset(0 0 100% 0)' }}
            >
              <ScrollToSectionLink sectionId="inicio" onClick={closeMenu} className="hover:text-[var(--lightgreen)] manrope-light uppercase">Início</ScrollToSectionLink>
            </li>
            <div className="h-px bg-[var(--linegreen)]"></div>
            <li
              className="reveal-item overflow-hidden"
              style={{ clipPath: 'inset(0 0 100% 0)' }}
            >
              <ScrollToSectionLink sectionId="sobre" onClick={closeMenu} className="hover:text-[var(--lightgreen)] manrope-light uppercase">Sobre</ScrollToSectionLink>
            </li>
            <div className="h-px bg-[var(--linegreen)]"></div>
            <li
              className="reveal-item overflow-hidden"
              style={{ clipPath: 'inset(0 0 100% 0)' }}
            >
              <ScrollToSectionLink sectionId="servicos" onClick={closeMenu} className="hover:text-[var(--lightgreen)] manrope-light uppercase">Serviços</ScrollToSectionLink>
            </li>
            <div className="h-px bg-[var(--linegreen)]"></div>
            <li
              className="reveal-item overflow-hidden"
              style={{ clipPath: 'inset(0 0 100% 0)' }}
            >
              <ScrollToSectionLink sectionId="contato" onClick={closeMenu} className="hover:text-[var(--lightgreen)] manrope-light uppercase">Contato</ScrollToSectionLink>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar