import './App.css'
import About from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
// import { useSpring, animated } from 'react-spring'
import { useEffect, useState } from 'react'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleSize)
    handleSize()
    return () => window.removeEventListener('resize', handleSize)
  }, [])

  useEffect(() => {
    if (windowSize.width < 768) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [windowSize])
  return (
    <div
      id='content-wrapper'
      className='font-primary text-grey-1 dark:text-dark-grey-1'>
      <div id='hero' className='h-screen bg-primary-10 dark:bg-dark-primary-10'>
        <NavBar isMobile={isMobile} />
        <About />
      </div>
      <Skills />
      <Portfolio />
      <Contact />
      {/* <!-- footer --> */}
      <footer id='footer' className='bg-slate-950 py-16'>
        <div className='container mx-auto px-4'>
          <p className='text-sm text-center text-white'>
            © 2024 leHienPham. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
