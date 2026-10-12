
import { useEffect, useRef, useState } from 'react'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const lastScrollY = useRef(0)

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      setIsAtTop(current < 20)

      const difference = current - lastScrollY.current

      if (Math.abs(difference) > 4) {
        setIsScrollingUp(difference < 0)
        lastScrollY.current = current
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

  // Track the active section
  useEffect(() => {
    const ids = [
      'about',
      'skills',
      'projects',
      'experience',
      'contact',
    ]

    const updateActiveSection = () => {
      if (window.scrollY < 80) {
        setActiveSection('')
        return
      }

      const activationPoint = window.innerHeight * 0.35
      let current = ''

      for (const id of ids) {
        const section = document.getElementById(id)

        if (!section) continue

        if (
          section.getBoundingClientRect().top <=
          activationPoint
        ) {
          current = id
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10

      setActiveSection(nearBottom ? 'contact' : current)
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  // Escape closes the mobile menu
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

  const isVisible =
    isAtTop ||
    isScrollingUp ||
    isHovering ||
    isMenuOpen

  function closeMenu() {
    setIsMenuOpen(false)
  }

  const linkClass = (id: string) => `
    group relative block rounded-md px-3 py-3
    text-sm transition-colors duration-200
    md:px-0 md:py-0
    focus-visible:outline-2
    focus-visible:outline-offset-4
    focus-visible:outline-indigo-500
    ${
      activeSection === id
        ? 'font-semibold text-indigo-600 dark:text-indigo-300'
        : 'font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-300'
    }
  `

  const controlClass = `
    flex h-9 w-9 items-center justify-center
    rounded-lg border border-slate-300/50
    bg-white/40 text-slate-900
    transition-colors duration-200
    hover:bg-white/70
    dark:border-white/20
    dark:bg-white/10
    dark:text-white
    dark:hover:bg-white/20
    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-indigo-500
  `

  return (
    <div
      className="fixed inset-x-0 top-0 z-50"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <header
        className={`
          relative mx-4 mt-3 flex h-[73px]
          items-center justify-between
          rounded-2xl px-6 md:mx-8 md:px-10

          transition-transform duration-300 ease-in-out
          focus-within:translate-y-0
          motion-reduce:transition-none

          ${
            isVisible
              ? 'translate-y-0'
              : '-translate-y-full'
          }
        `}
      >
        {/* Glass background: separate from content */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-0
            rounded-2xl

            border border-white/50
            bg-white/[0.45]
            backdrop-blur-lg
            backdrop-saturate-125

            shadow-lg shadow-slate-900/5

            dark:border-white/10
            dark:bg-[#0c1428]/[0.45]
            dark:shadow-black/20
          "
        />

        {/* Foreground logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="
            relative z-10 text-base font-bold
            tracking-tight text-slate-950
            hover:text-indigo-600
            dark:text-white
            dark:hover:text-indigo-300
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-indigo-500
          "
        >
          Shane
          <span className="text-indigo-600 dark:text-indigo-400">
            .
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="
            relative z-10 hidden items-center
            gap-7 bg-transparent md:flex
          "
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
              className={linkClass(link.id)}
            >
              {link.label}

              <span
                aria-hidden="true"
                className={`
                  absolute -bottom-2 left-0
                  h-0.5 rounded-full
                  bg-indigo-500
                  transition-all duration-300
                  dark:bg-indigo-400
                  ${
                    activeSection === link.id
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }
                `}
              />
            </a>
          ))}
        </nav>

        {/* Foreground buttons */}
        <div className="relative z-10 flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              isDark
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            className={controlClass}
          >
            <span aria-hidden="true">
              {isDark ? '☀' : '☾'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className={`${controlClass} md:hidden`}
          >
            <span aria-hidden="true">
              {isMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div
            className="
              absolute inset-x-0 top-full z-20
              border-b border-white/50
              dark:border-white/10
              md:hidden
            "
          >
            {/* Mobile glass layer */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-white/[0.45] backdrop-blur-lg
                dark:bg-[#0c1428]/[0.45]
              "
            />

            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="relative z-10 flex flex-col gap-1 p-5"
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
                  className={linkClass(link.id)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}

export default Navbar
