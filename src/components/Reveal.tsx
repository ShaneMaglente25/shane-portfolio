
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
}

function Reveal({ children, className = '' }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    // Fallback for browsers without IntersectionObserver.
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (entry.isIntersecting) {
          setIsVisible(true)

          // The animation only needs to happen once.
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className={`
        motion-safe:transition-[opacity,transform]
        motion-safe:duration-700
        motion-safe:ease-out

        ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'motion-safe:opacity-0 motion-safe:translate-y-6'
        }

        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Reveal
