const Portfolio = () => {
  return (
    <section id='portfolio' className='pt-10'>
      <div className='container mx-auto px-5'>
        <div className='section-heading'>
          <h2 className='text-4xl text-grey-1 font-semibold font-secondary'>
            Portfolio
          </h2>
          <div className='w-[60px] h-[3px] bg-primary-5 mt-2'></div>
        </div>
        {/* <!-- project 2 --> */}
        <div className='project mt-10 p-5 rounded-lg shadow-lg shadow-black/20'>
          <div className='project-media'>
            <img
              className='rounded-lg'
              src='./src/assets/img/project-Shine-Smile.png'
              alt='Shine Smile'
            />
          </div>
          <div className='project-content'>
            <h3 className='mt-10 text-20 text-grey-1 font-secondary font-bold tracking-wider'>
              <a
                href='https://zenin-dev.github.io/Responsive-web-design__Dental-clinic--Shine-Smile/'
                className='section-content__title project__title'
                target='_blank'>
                SHINE SMILE WEBSITE
              </a>
            </h3>
            <p className='project__desc mt-5 tracking-wider'>
              Dự án tự học cá nhân, thiết kế responsive website Shine Smile giới
              thiệu phòng khám nha khoa.
            </p>
            <ul className='flex items-center gap-8 mt-5 ml-5 text-xs font-secondary tracking-wider list-disc'>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className='grid grid-cols-2 gap-3 mt-3 text-center pb-10'>
              <a
                className='mt-7 text-base leading-normal font-semibold rounded-lg px-3 py-1 bg-primary-5 hover:scale-105 hover:bg-primary-6 duration-200'
                href='https://zenin-dev.github.io/Responsive-web-design__Dental-clinic--Shine-Smile/'
                target='_blank'>
                Live
              </a>
              <a
                className='mt-7 text-base leading-normal font-semibold rounded-lg px-3 py-1 bg-primary-5 hover:scale-105 hover:bg-primary-6 duration-200'
                href='https://github.com/Zenin-dev/Responsive-web-design__Dental-clinic--Shine-Smile'
                target='_blank'>
                Source
              </a>
            </div>
          </div>
        </div>
        {/* <!-- project 1 --> */}
        <div className='mt-10 p-5 rounded-lg shadow-lg shadow-black/20'>
          <div className='project-media'>
            <img
              className='rounded-lg'
              src='./src/assets/img/project-Lesson.png'
              alt='Shine Smile'
            />
          </div>
          <div className='project-content'>
            <h3 className='mt-10 text-20 text-grey-1 font-secondary font-bold tracking-wider'>
              <a
                href='https://zenin-dev.github.io/Responsive-web-design__Dental-clinic--Shine-Smile/'
                className='section-content__title project__title'
                target='_blank'>
                LESSON. WEBSITE
              </a>
            </h3>
            <p className='project__desc mt-5 tracking-wider'>
              Dự án tự học cá nhân, chuyển từ giao diện Figma website Lesson.
              giới thiệu khóa học thiết kế, lập trình, marketing
            </p>
            <ul className='flex items-center gap-8 mt-5 ml-5 text-xs font-secondary tracking-wider list-disc'>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className='grid grid-cols-2 gap-3 mt-3 text-center pb-10'>
              <a
                className='mt-7 text-base leading-normal font-semibold rounded-lg px-3 py-1 bg-primary-5 hover:scale-105 hover:bg-primary-6 duration-200'
                href='https://zenin-dev.github.io/Responsive-web-design__Dental-clinic--Shine-Smile/'
                target='_blank'>
                Live
              </a>
              <a
                className='mt-7 text-base leading-normal font-semibold rounded-lg px-3 py-1 bg-primary-5 hover:scale-105 hover:bg-primary-6 duration-200'
                href='https://github.com/Zenin-dev/Responsive-web-design__Dental-clinic--Shine-Smile'
                target='_blank'>
                Source
              </a>
            </div>
          </div>
        </div>
        {/* <!-- more btn --> */}
        <div className='flex justify-center mt-5 py-12 rounded-lg'>
          <a
            className='text-base leading-normal font-semibold rounded-lg px-5 py-3 tracking-widest bg-primary-5 hover:scale-105 hover:bg-primary-6 duration-200'
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
