import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaReact } from 'react-icons/fa'
import { BiLogoRedux } from 'react-icons/bi'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { SiMui } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa'
const Skills = () => {
  return (
    <section id='skills' className='pt-10 bg-grey-10'>
      <div className='container mx-auto px-4'>
        <div className='section-heading'>
          <h2
            id='skills-title'
            className='text-4xl text-grey-1 font-semibold font-secondary'>
            Skills
          </h2>
          <div
            id='skills-title-underline'
            className='w-[60px] h-[3px] bg-primary-5 mt-2'></div>
        </div>
        <div id='skills-center' className='mt-10 grid grid-cols-3 gap-10 pb-10'>
          <div
            id='skills-item-1'
            className='flex flex-col justify-center items-center text-primary-1'>
            <FaHtml5 size={'32px'} />
            <p id='skills-name-1' className='mt-1 text-xs'>
              HTML
            </p>
          </div>
          <div
            id='skills-item-2'
            className='flex flex-col justify-center items-center text-primary-1'>
            <FaCss3Alt size={'32px'} />
            <p id='skills-name-2' className='mt-1 text-xs'>
              CSS
            </p>
          </div>
          <div
            id='skills-item-3'
            className='flex flex-col justify-center items-center text-primary-1'>
            <IoLogoJavascript size={'32px'} />
            <p id='skills-name-3' className='mt-1 text-xs'>
              JavaSciprt
            </p>
          </div>
          <div
            id='skills-item-4'
            className='flex flex-col justify-center items-center text-primary-1'>
            <FaReact size={'32px'} />
            <p id='skills-name-4' className='mt-1 text-xs'>
              React
            </p>
          </div>
          <div
            id='skills-item-5'
            className='flex flex-col justify-center items-center text-primary-1'>
            <BiLogoRedux size={'32px'} />
            <p id='skills-name-5' className='mt-1 text-xs'>
              Redux
            </p>
          </div>
          <div
            id='skills-item-6'
            className='flex flex-col justify-center items-center text-primary-1'>
            <BiLogoTailwindCss size={'32px'} />
            <p id='skills-name-6' className='mt-1 text-xs'>
              Tailwind
            </p>
          </div>
          <div
            id='skills-item-7'
            className='flex flex-col justify-center items-center text-primary-1'>
            <SiMui size={'32px'} />
            <p id='skills-name-7' className='mt-1 text-xs'>
              MUI
            </p>
          </div>
          <div
            id='skills-item-8'
            className='flex flex-col justify-center items-center text-primary-1'>
            <FaBootstrap size={'32px'} />
            <p id='skills-name-8' className='mt-1 text-xs'>
              Bootstrap
            </p>
          </div>
          <div
            id='skills-item-9'
            className='flex flex-col justify-center items-center text-primary-1'>
            <FaGitAlt size={'32px'} />
            <p id='skills-name-9' className='mt-1 text-xs'>
              Git
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
