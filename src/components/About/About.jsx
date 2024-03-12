import avatar from '/src/assets/img/avatar.jpg'

const About = () => {
  return (
    <section id='about' className='md:mt-[120px]'>
      <div className='container'>
        <div className='flex flex-col md:flex-row gap-12 items-center justify-center mt-20'>
          <div id='about-content' className='text-center md:text-left md:w-3/5'>
            <div
              id='about-hello'
              className='text-xl md:text-3xl md:leading-relaxed font-semibold'>
              Xin chào! <br></br>
              Tôi là Hiền, một
            </div>
            <h1
              id='about-title'
              className='mt-2 text-4xl md:text-6xl text-primary-5 dark:text-dark-primary-5 font-semibold'>
              Web Developer
            </h1>
            <p
              id='about-desc'
              className='mt-5 text-base md:leading-relaxed md:w-4/5'>
              Đến với lập trình, tôi tìm thấy niềm đam mê khi được tập trung sâu
              vào việc hoàn thành những dự án. Vì vậy, tôi đã quyết định tự học
              để trở thành một lập trình viên. Hiện tại, tôi có thể lập trình
              một trang web hoàn chỉnh và đang tìm kiếm công việc thực tập đầu
              tiên.
            </p>
            <button className='btn'>
              <a href='#portfolio'>PORTFOLIO</a>
            </button>
          </div>
          <div id='about-media' className='flex justify-center items-center'>
            <div
              id='about-img-wrapper'
              className='w-[150px] md:w-[250px] h-[150px] md:h-[250px] rounded-full truncate'>
              <img
                className='w-[150px] md:w-[250px]'
                src={avatar}
                alt='avatar'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
