import { TbBrandNextjs } from 'react-icons/tb'
import { SiMysql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiNestjs } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
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
          {/* Programing SKills */}
          <div className='skills-item'>
            <BiLogoJavascript size={'32px'} />
            <p className='skills-name'>JavaScript</p>
          </div>

          <div className='skills-item'>
            <BiLogoTypescript size={'32px'} />
            <p className='skills-name'>TypeScript</p>
          </div>

          {/* Backend Skills */}
          <div className='skills-item'>
            <FaNodeJs size={'32px'} />
            <p className='skills-name'>Node.js</p>
          </div>

          <div className='skills-item'>
            <SiNestjs size={'32px'} />
            <p className='skills-name'>Nest JS</p>
          </div>

          <div className='skills-item'>
            <SiExpress size={'32px'} />
            <p className='skills-name'>Express JS</p>
          </div>

          <div className='skills-item'>
            <SiMongodb size={'32px'} />
            <p className='skills-name'>MongoDB</p>
          </div>

          <div className='skills-item'>
            <SiMysql size={'32px'} />
            <p className='skills-name'>mySQL</p>
          </div>

          {/* Fontend Skills */}
          <div className='skills-item'>
            <FaHtml5 size={'32px'} />
            <p className='skills-name'>HTML</p>
          </div>

          <div className='skills-item'>
            <FaCss3Alt size={'32px'} />
            <p className='skills-name'>CSS</p>
          </div>
          <div className='skills-item'>
            <TbBrandNextjs size={'32px'} />
            <p className='skills-name'>Next JS</p>
          </div>

          <div className='skills-item'>
            <FaReact size={'32px'} />
            <p className='skills-name'>React JS</p>
          </div>

          <div className='skills-item'>
            <BiLogoTailwindCss size={'32px'} />
            <p className='skills-name'>Tailwind CSS</p>
          </div>

          <div className='skills-item'>
            <FaBootstrap size={'32px'} />
            <p className='skills-name'>Bootstrap</p>
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
