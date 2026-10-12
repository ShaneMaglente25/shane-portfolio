import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  const [isDark, setIsDark] = useState(false)

  function toggleTheme() {
    setIsDark(!isDark)
  }

  return (
    <div
      className={`min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 ${
        isDark ? 'dark' : ''
      }`}
    >
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

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
