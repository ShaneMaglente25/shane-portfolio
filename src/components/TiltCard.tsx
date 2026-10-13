
import { useRef } from 'react'
import type { PointerEvent, ReactNode } from 'react'
import './TiltCard.css'

type TiltCardProps = {
  children: ReactNode
  className?: string
}

function TiltCard({
  children,
  className = '',
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Maximum rotation in degrees.
  const MAX_TILT = 4

  function handlePointerMove(
    event: PointerEvent<HTMLDivElement>
  ) {
    // Only use tilt on desktop-style mouse devices.
    if (event.pointerType !== 'mouse') return

    // Respect reduced motion settings.
    if (
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      return
    }

    // Avoid mouse effects on touch-oriented displays.
    if (
      !window.matchMedia(
        '(hover: hover) and (pointer: fine)'
      ).matches
    ) {
      return
    }

    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()

    // Mouse position relative to the card.
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Normalized values between 0 and 1.
    const percentageX = x / rect.width
    const percentageY = y / rect.height

    // Calculate rotation based on cursor position.
    const rotateX = (0.5 - percentageY) * MAX_TILT * 2
    const rotateY = (percentageX - 0.5) * MAX_TILT * 2

    // Update CSS variables without React re-renders.
    card.style.setProperty(
      '--tilt-x',
      `${rotateX.toFixed(2)}deg`
    )

    card.style.setProperty(
      '--tilt-y',
      `${rotateY.toFixed(2)}deg`
    )

    // Position of the light effect.
    card.style.setProperty(
      '--mouse-x',
      `${(percentageX * 100).toFixed(2)}%`
    )

    card.style.setProperty(
      '--mouse-y',
      `${(percentageY * 100).toFixed(2)}%`
    )
  }

  function handlePointerLeave() {
    const card = cardRef.current
    if (!card) return

    // Return smoothly to the original position.
    card.style.setProperty('--tilt-x', '0deg')
    card.style.setProperty('--tilt-y', '0deg')

    card.style.setProperty('--mouse-x', '50%')
    card.style.setProperty('--mouse-y', '50%')
  }

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
      className={`tilt-card ${className}`}
    >
      <div className="tilt-card__surface relative overflow-hidden rounded-xl">
        {/* Your existing project preview */}
        {children}

        {/* Decorative cursor-following light */}
        <div
          aria-hidden="true"
          className="tilt-card__glow pointer-events-none absolute inset-0 z-10 rounded-xl"
        />
      </div>
    </div>
  )
}

export default TiltCard
