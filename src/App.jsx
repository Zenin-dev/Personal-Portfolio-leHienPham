import './App.css'
import About from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div id='content-wrapper' className='font-primary text-grey-1 h-[10000px]'>
      <div id='hero' className='h-screen bg-primary-10'>
        <NavBar />
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
