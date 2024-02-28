import projectImg1 from '/src/assets/img/project-Shine-Smile.png'
import projectImg2 from '/src/assets/img/project-Lesson.png'
const Portfolio = () => {
  return (
    <section id='portfolio' className='dark:bg-dark-white'>
      <div className='container'>
        <div className='section-heading'>
          <h2>Portfolio</h2>
          <div className='section-heading-underline'></div>
        </div>
        {/* <!-- project 1 --> */}
        <div className='project-item'>
          <div className='project-media'>
            <img className='project__img' src={projectImg1} alt='Shine Smile' />
          </div>
          <div className='project-content'>
            <h3 className='project__title'>
              <a
                href='https://zenin-dev.github.io/Responsive-web-design__Dental-clinic--Shine-Smile/'
                className='section-content__title project__title'
                target='_blank'>
                SHINE SMILE WEBSITE
              </a>
            </h3>
            <p className='project__desc'>
              Dự án tự học cá nhân, thiết kế responsive website Shine Smile giới
              thiệu phòng khám nha khoa.
            </p>
            <ul className='project__tags'>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className='project__links'>
              <a
                className='btn'
                href='https://zenin-dev.github.io/Responsive-web-design__Dental-clinic--Shine-Smile/'
                target='_blank'>
                Live
              </a>
              <a
                className='btn md:mt-1'
                href='https://github.com/Zenin-dev/Responsive-web-design__Dental-clinic--Shine-Smile'
                target='_blank'>
                Source
              </a>
            </div>
          </div>
        </div>
        {/* <!-- project 2 --> */}
        <div className='project-item project-item-even'>
          <div className='project-media'>
            <img className='project__img' src={projectImg2} alt='Shine Smile' />
          </div>
          <div className='project-content'>
            <h3 className='project__title'>
              <a
                href='https://zenin-dev.github.io/Responsive-web-design__Dental-clinic--Shine-Smile/'
                className='section-content__title project__title'
                target='_blank'>
                LESSON. WEBSITE
              </a>
            </h3>
            <p className='project__desc'>
              Dự án tự học cá nhân, chuyển từ giao diện Figma website Lesson.
              giới thiệu khóa học thiết kế, lập trình, marketing
            </p>
            <ul className='project__tags'>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className='project__links'>
              <a
                className='btn'
                href='https://zenin-dev.github.io/Responsive-web-design__Dental-clinic--Shine-Smile/'
                target='_blank'>
                Live
              </a>
              <a
                className='btn md:mt-1'
                href='https://github.com/Zenin-dev/Responsive-web-design__Dental-clinic--Shine-Smile'
                target='_blank'>
                Source
              </a>
            </div>
          </div>
        </div>
        {/* <!-- more btn --> */}
        <div className='flex justify-center pt-12 pb-16 rounded-lg'>
          <a
            className='btn px-5 py-3 tracking-widest'
            href='https://github.com/Zenin-dev'
            target='_blank'>
            MORE PROJECTS
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
