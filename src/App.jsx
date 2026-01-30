import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    })

    // Loader timeout
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <div className="grain-overlay"></div>
      <div className="glow-background"></div>

      {/* Loader */}
      <div className={`loader ${!loading ? 'hidden' : ''}`} id="loader">
        <div className="loader-content">
          <h1 className="loader-text">WELCOME</h1>
          <div className="loader-line"></div>
        </div>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <Cursor />
    </>
  )
}

export default App
