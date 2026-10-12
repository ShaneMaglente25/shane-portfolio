
import { useEffect, useState } from 'react'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import Atmosphere from './components/Atmosphere'

const THEME_STORAGE_KEY = 'shane-portfolio-theme'

function getInitialTheme(): boolean {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

    if (savedTheme === 'dark') return true
    if (savedTheme === 'light') return false
  } catch {
    // Fall back to system preference.
  }

  return window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
}

function App() {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme)

  useEffect(() => {
    try {
      localStorage.setItem(
        THEME_STORAGE_KEY,
        isDark ? 'dark' : 'light'
      )
    } catch {
      // Theme still works when storage is unavailable.
    }

    document.documentElement.style.colorScheme =
      isDark ? 'dark' : 'light'
  }, [isDark])

  function toggleTheme() {
    setIsDark((previous) => !previous)
  }

  return (
    <div
      className={`
        relative isolate min-h-screen overflow-x-clip
        bg-[#f8fafc] text-neutral-900
        dark:bg-[#080d1c] dark:text-neutral-100
        ${isDark ? 'dark' : ''}
      `}
    >
      {/* Fixed decorative background */}
      <Atmosphere />

      {/* Content stays above the background */}
      <div className="relative z-10">
        <Navbar
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />

        <main>
          <Hero />

          <Reveal>
            <About />
          </Reveal>

          <Reveal>
            <Skills />
          </Reveal>

          <Reveal>
            <Projects />
          </Reveal>

          <Reveal>
            <Experience />
          </Reveal>

          <Reveal>
            <Contact />
          </Reveal>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
