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
    <section id='skills' className=' bg-grey-10 dark:bg-dark-grey-10 '>
      <div className='container'>
        <div className='section-heading'>
          <h2>Skills</h2>
          <div className='section-heading-underline'></div>
        </div>
        <div
          id='skills-center'
          className='mt-10 md:mt-16 grid grid-cols-3 md:grid-cols-5 gap-10 md:gap-16 pb-10 md:pb-16'>
          <div id='skills-item-1' className='skills-item'>
            <FaHtml5 size={'32px'} />
            <p id='skills-name-1' className='skills-name'>
              HTML
            </p>
          </div>
          <div id='skills-item-2' className='skills-item'>
            <FaCss3Alt size={'32px'} />
            <p id='skills-name-2' className='skills-name'>
              CSS
            </p>
          </div>
          <div id='skills-item-3' className='skills-item'>
            <IoLogoJavascript size={'32px'} />
            <p id='skills-name-3' className='skills-name'>
              JavaSciprt
            </p>
          </div>
          <div id='skills-item-4' className='skills-item'>
            <FaReact size={'32px'} />
            <p id='skills-name-4' className='skills-name'>
              React
            </p>
          </div>
          <div id='skills-item-5' className='skills-item'>
            <BiLogoRedux size={'32px'} />
            <p id='skills-name-5' className='skills-name'>
              Redux
            </p>
          </div>
          <div id='skills-item-6' className='skills-item'>
            <BiLogoTailwindCss size={'32px'} />
            <p id='skills-name-6' className='skills-name'>
              Tailwind
            </p>
          </div>
          <div id='skills-item-7' className='skills-item'>
            <SiMui size={'32px'} />
            <p id='skills-name-7' className='skills-name'>
              MUI
            </p>
          </div>
          <div id='skills-item-8' className='skills-item'>
            <FaBootstrap size={'32px'} />
            <p id='skills-name-8' className='skills-name'>
              Bootstrap
            </p>
          </div>
          <div id='skills-item-9' className='skills-item'>
            <FaGitAlt size={'32px'} />
            <p id='skills-name-9' className='skills-name'>
              Git
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
