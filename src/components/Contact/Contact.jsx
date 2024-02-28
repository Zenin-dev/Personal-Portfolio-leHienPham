import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
const Contact = () => {
  return (
    <section id='contact' className='bg-grey-10 dark:bg-dark-grey-10'>
      <div className='container mx-auto px-4'>
        {/* <!-- contact heading --> */}
        <div className='section-heading'>
          <h2>Contact</h2>
          <div className='section-heading-underline'></div>
        </div>
        <div className='contact-center md:flex'>
          <div className='contact-info md:w-1/2'>
            <h3 className='section-heading-lv2'>Contact Info</h3>
            <ul className='mt-5 flex flex-col gap-5 text-primary-1 dark:text-dark-primary-1'>
              {/* <!-- item 1 --> */}
              <li className='contact-item'>
                <IoLocationSharp size={'24px'} />
                <span>Address: Da Nang, Vietnam</span>
              </li>
              {/* <!-- item 2 --> */}
              <li className='contact-item'>
                <MdEmail size={'24px'} />
                <span>Email: lehienpham25@gmail.com</span>
              </li>
              {/* <!-- item 3 --> */}
              <li className='contact-item'>
                <FaGithub size={'24px'} />
                <span>
                  Github:
                  <a href='https://github.com/Zenin-dev' target='_blank'>
                    github.com/Zenin-dev
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className='contact-form  md:w-1/2'>
            <h3 className='section-heading-lv2'>Contact Form</h3>
            <form
              action=''
              className='mt-8 pb-10 flex flex-col items-start gap-5'>
              <input
                className='w-full'
                type='text'
                id='name'
                placeholder='Name:'
              />
              <input
                className='w-full'
                type='email'
                id='email'
                placeholder='Email:'
              />
              <input
                className='w-full'
                type='text'
                id='subject'
                placeholder='Subject (optional):'
              />
              <textarea
                className='w-full'
                type='text'
                id='message'
                placeholder='Message:'
                rows='10'></textarea>
              <input
                className='btn mt-1'
                type='submit'
                id='submit'
                value='Send'
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
