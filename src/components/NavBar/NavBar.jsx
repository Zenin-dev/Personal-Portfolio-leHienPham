import { IoSunny } from 'react-icons/io5'
import { LuMenu } from 'react-icons/lu'

const NavBar = () => {
  return (
    <nav id='nav bg-white z-10'>
      <div className='container mx-auto px-5'>
        <div className='flex items-center h-16'>
          <div
            id='logo'
            className='font-primary text-lg text-primary-5 font-bold'>
            <p>#leHienPham</p>
          </div>

          <IoSunny
            className='ml-3 text-primary-5 cursor-pointer'
            size={'24px'}
          />

          <ul id='menu' className='ml-auto text-primary-5 cursor-pointer'>
            <LuMenu size={'28px'} />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
