import { FaNodeJs } from 'react-icons/fa'
import { BiLogoDjango } from 'react-icons/bi'
import { FaPython } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaReact } from 'react-icons/fa'
import { BiLogoRedux } from 'react-icons/bi'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { SiMui } from 'react-icons/si'
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
          <div className='skills-item'>
            <FaPython size={'32px'} />
            <p className='skills-name'>Python</p>
          </div>

          <div className='skills-item'>
            <BiLogoDjango size={'32px'} />
            <p className='skills-name'>Django</p>
          </div>

          <div className='skills-item'>
            <FaNodeJs size={'32px'} />
            <p className='skills-name'>Node js</p>
          </div>

          <div className='skills-item'>
            <BiLogoRedux size={'32px'} />
            <p className='skills-name'>Redux</p>
          </div>

          <div className='skills-item'>
            <FaHtml5 size={'32px'} />
            <p className='skills-name'>HTML</p>
          </div>

          <div className='skills-item'>
            <FaCss3Alt size={'32px'} />
            <p className='skills-name'>CSS</p>
          </div>

          <div className='skills-item'>
            <IoLogoJavascript size={'32px'} />
            <p className='skills-name'>JavaSciprt</p>
          </div>

          <div className='skills-item'>
            <FaReact size={'32px'} />
            <p className='skills-name'>React js</p>
          </div>

          <div className='skills-item'>
            <BiLogoTailwindCss size={'32px'} />
            <p className='skills-name'>Tailwind</p>
          </div>

          <div className='skills-item'>
            <SiMui size={'32px'} />
            <p className='skills-name'>MUI</p>
          </div>

          <div className='skills-item'>
            <FaGitAlt size={'32px'} />
            <p className='skills-name'>Git</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
