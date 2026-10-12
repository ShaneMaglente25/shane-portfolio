
import { useState, useEffect, useRef } from 'react'

type NavbarProps = {
  isDark: boolean
  onToggleTheme: () => void
}

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  // Navigation state
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Remember the previous scroll position
  const lastScrollY = useRef(0)

  // -----------------------------------
  // 1. Detect scrolling direction
  // -----------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsAtTop(currentScrollY < 20)

      const scrollDifference =
        currentScrollY - lastScrollY.current

      // Avoid flickering from tiny scroll movements
      if (Math.abs(scrollDifference) > 4) {
        setIsScrollingUp(scrollDifference < 0)
        lastScrollY.current = currentScrollY
      }
    }

    lastScrollY.current = window.scrollY
    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // -----------------------------------
  // 2. Track the active page section
  // -----------------------------------
  useEffect(() => {
    const sectionIds = [
      'about',
      'skills',
      'projects',
      'experience',
      'contact',
    ]

    const updateActiveSection = () => {
      // No highlighted link at the top of the page
      if (window.scrollY < 80) {
        setActiveSection('')
        return
      }

      const activationPoint = window.innerHeight * 0.35

      let currentSection = ''

      for (const id of sectionIds) {
        const section = document.getElementById(id)

        if (!section) continue

        const rect = section.getBoundingClientRect()

        if (rect.top <= activationPoint) {
          currentSection = id
        }
      }

      // Ensure Contact activates at the page bottom
      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10

      if (isNearBottom) {
        currentSection = 'contact'
      }

      setActiveSection(currentSection)
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    })

    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener(
        'scroll',
        updateActiveSection
      )

      window.removeEventListener(
        'resize',
        updateActiveSection
      )
    }
  }, [])

  // -----------------------------------
  // 3. Mobile menu controls
  // -----------------------------------
  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close mobile menu using the Escape key
  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  // -----------------------------------
  // 4. Determine navbar visibility
  // -----------------------------------
  const isVisible =
    isAtTop ||
    isScrollingUp ||
    isHovering ||
    isMenuOpen

  // -----------------------------------
  // 5. Dynamic navigation link styling
  // -----------------------------------
  const navLinkClass = (id: string) => `
    rounded-md px-3 py-3 text-sm
    transition-colors duration-200
    focus-visible:outline-2
    focus-visible:outline-offset-4
    focus-visible:outline-indigo-500
    md:px-0 md:py-0

    ${
      activeSection === id
        ? 'font-medium text-indigo-600 dark:text-indigo-400'
        : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
    }
  `

  return (
    <div
      className="fixed left-0 right-0 top-0 z-50"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Hover detection area at the top */}
      <div
        className="absolute left-0 right-0 top-0 h-6 bg-transparent"
        aria-hidden="true"
      />

      {/* Main navbar */}
      <header
        className={`
          relative flex h-[73px] w-full
          items-center justify-between

          border-b border-neutral-200
          bg-neutral-50 px-6

          transition-transform duration-300
          ease-in-out

          focus-within:translate-y-0

          motion-reduce:transition-none

          dark:border-neutral-800
          dark:bg-neutral-950

          md:px-10

          ${
            isVisible
              ? 'translate-y-0'
              : '-translate-y-full'
          }
        `}
      >
        {/* Website logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="
            text-base font-bold tracking-tight
            text-neutral-900
            transition-colors hover:text-indigo-600
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-indigo-500
            dark:text-neutral-100
            dark:hover:text-indigo-400
          "
        >
          Shane.
        </a>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`
            absolute left-0 right-0 top-[73px]
            flex-col gap-1

            border-b border-neutral-200
            bg-neutral-50 p-5

            dark:border-neutral-800
            dark:bg-neutral-950

            md:static md:flex md:flex-row
            md:items-center md:gap-7
            md:border-0 md:bg-transparent md:p-0

            ${
              isMenuOpen
                ? 'flex'
                : 'hidden'
            }
          `}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              aria-current={
                activeSection === link.id
                  ? 'location'
                  : undefined
              }
              className={navLinkClass(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right-side controls */}
        <div className="flex items-center gap-2">

          {/* Theme toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              isDark
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            className="
              flex h-9 w-9 items-center
              justify-center rounded-lg

              border border-neutral-200
              bg-white text-neutral-900

              transition-colors
              hover:bg-neutral-100

              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-indigo-500

              dark:border-neutral-800
              dark:bg-neutral-900
              dark:text-neutral-100
              dark:hover:bg-neutral-800
            "
          >
            <span aria-hidden="true">
              {isDark ? '☀' : '☾'}
            </span>
          </button>

          {/* Mobile hamburger menu */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            className="
              flex h-9 w-9 items-center
              justify-center rounded-lg

              border border-neutral-200
              bg-white text-neutral-900

              transition-colors
              hover:bg-neutral-100

              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-indigo-500

              dark:border-neutral-800
              dark:bg-neutral-900
              dark:text-neutral-100
              dark:hover:bg-neutral-800

              md:hidden
            "
          >
            <span aria-hidden="true">
              {isMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
