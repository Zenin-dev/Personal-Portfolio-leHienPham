import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
const Contact = () => {
  return (
    <section id='contact' className='pt-10 bg-grey-10'>
      <div className='container mx-auto px-4'>
        {/* <!-- contact heading --> */}
        <div className='section-heading'>
          <h2 className='text-4xl text-grey-1 font-semibold font-secondary'>
            Contact
          </h2>
          <div className='w-[60px] h-[3px] bg-primary-5 mt-2'></div>
        </div>
        <div className='contact-center'>
          <div className='contact-info'>
            <h3 className='mt-12 text-20 tracking-widest font-semibold'>
              Contact Info
            </h3>
            <ul className='mt-5 flex flex-col gap-5 text-primary-1'>
              {/* <!-- item 1 --> */}
              <li className='flex flex-col gap-2'>
                <IoLocationSharp size={'24px'} />
                <span>Address: Da Nang, Vietnam</span>
              </li>
              {/* <!-- item 2 --> */}
              <li className='flex flex-col gap-2'>
                <MdEmail size={'24px'} />
                <span>Email: lehienpham25@gmail.com</span>
              </li>
              {/* <!-- item 3 --> */}
              <li className='flex flex-col gap-2'>
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
          <div className='contact-form'>
            <h3 className='mt-12 text-20 tracking-widest font-semibold'>
              Contact Form
            </h3>
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
                className='inline-block mt-1 text-base leading-normal font-semibold rounded-lg px-3 py-1 bg-primary-5 hover:scale-105 hover:bg-primary-6 duration-200'
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
