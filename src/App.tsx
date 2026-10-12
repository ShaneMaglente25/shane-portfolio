
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

// Key used to store the selected theme.
const THEME_STORAGE_KEY = 'shane-portfolio-theme'

// Determine the initial theme.
function getInitialTheme(): boolean {
  // 1. Check if the visitor previously selected a theme.
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

    if (savedTheme === 'dark') return true
    if (savedTheme === 'light') return false
  } catch {
    // Continue using the system preference if storage is unavailable.
  }

  // 2. Otherwise, follow the operating system's preference.
  return window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
}

function App() {
  // Lazy initialization: determine the initial theme once.
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme)

  // Save the selected theme whenever it changes.
  useEffect(() => {
    try {
      localStorage.setItem(
        THEME_STORAGE_KEY,
        isDark ? 'dark' : 'light'
      )
    } catch {
      // The theme still works if storage is unavailable.
    }

    // Help the browser style native controls appropriately.
    document.documentElement.style.colorScheme =
      isDark ? 'dark' : 'light'
  }, [isDark])

  // Toggle between light and dark mode.
  function toggleTheme() {
    setIsDark((previousTheme) => !previousTheme)
  }

  return (
    <div
      className={`
        min-h-screen
        bg-neutral-50 text-neutral-900
        dark:bg-neutral-950 dark:text-neutral-100
        ${isDark ? 'dark' : ''}
      `}
    >
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
  )
}

export default App
