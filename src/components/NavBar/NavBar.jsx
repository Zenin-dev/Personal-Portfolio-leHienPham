import { useState } from 'react'
import { IoSunny } from 'react-icons/io5'
import { LuMenu } from 'react-icons/lu'
import { IoMdClose } from 'react-icons/io'
import { FaMoon } from 'react-icons/fa'
import useDarkMode from '../../useDarkMode'
const NavBar = props => {
  const { isMobile } = props
  const [openMenu, setOpenMenu] = useState(false)
  const [isDarkMode, toggleDarkMode] = useDarkMode()
  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <nav id='nav' className='bg-white md:bg-primary-10 z-10'>
      <div className='container mx-auto px-5'>
        <div className='flex items-center h-16 md:h-22'>
          <div
            id='logo'
            className='font-primary text-lg md:text-xl text-primary-5 font-bold'>
            <p>#leHienPham</p>
          </div>
          {isDarkMode ? (
            <FaMoon
              className='ml-4 text-primary-5 cursor-pointer'
              size={'24px'}
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          ) : (
            <IoSunny
              className='ml-3 text-primary-5 cursor-pointer'
              size={'30px'}
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          )}

          <ul id='nav-menu' className='ml-auto text-primary-5'>
            {openMenu && isMobile ? (
              <IoMdClose
                size={'30px'}
                className='cursor-pointer'
                onClick={handleMenu}
              />
            ) : !openMenu && isMobile ? (
              <LuMenu
                size={'28px'}
                className='cursor-pointer'
                onClick={handleMenu}
              />
            ) : (
              <div className='flex items-center gap-8 text-lg'>
                <li className='nav__link'>
                  <a href='#about'>About</a>
                </li>
                <li className='nav__link'>
                  <a href='#skills'>Skills</a>
                </li>
                <li className='nav__link'>
                  <a href='#portfolio'>Portfolio</a>
                </li>
                <li className='nav__link'>
                  <a href='#contact'>Contact</a>
                </li>
              </div>
            )}
            {openMenu && (
              <div className='flex flex-col gap-y-3 absolute right-8 bg-white p-8 text-center text-sm'>
                <li className='nav__link' onClick={handleMenu}>
                  <a href='#about'>About</a>
                </li>
                <li className='nav__link' onClick={handleMenu}>
                  <a href='#skills'>Skills</a>
                </li>
                <li className='nav__link' onClick={handleMenu}>
                  <a href='#portfolio'>Portfolio</a>
                </li>
                <li className='nav__link' onClick={handleMenu}>
                  <a href='#contact'>Contact</a>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
