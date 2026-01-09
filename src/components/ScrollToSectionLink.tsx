'use client'

import { usePathname, useRouter } from 'next/navigation'

interface Props {
  sectionId: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function ScrollToSectionLink({
  sectionId,
  children,
  className,
  onClick,
}: Props) {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = () => {
    if (pathname !== '/') {
      // Navega para home com hash — scroll será tratado lá
      router.push(`/#${sectionId}`)
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }

    if (onClick) onClick()
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
