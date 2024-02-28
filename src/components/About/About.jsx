const About = () => {
  return (
    <section id='about'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-center mt-20'>
          <div id='about-content' className='text-center'>
            <div id='hello' className='text-xl text-grey-2 font-semibold'>
              Xin chào! <br></br>
              Tôi là Hiền, một
            </div>
            <h1
              id='title'
              className='mt-2 text-2xl text-primary-5 font-semibold'>
              Web Developer
            </h1>
            <p id='about-desc' className='mt-5 text-base text-grey-3'>
              Đến với lập trình, tôi tìm thấy niềm đam mê khi được tập trung sâu
              vào việc hoàn thành những dự án. Vì vậy, tôi đã quyết định tự học
              để trở thành một lập trình viên. Hiện tại, tôi có thể lập trình
              Front End và đang tìm kiếm công việc thực tập đầu tiên.
            </p>
            <button className='mt-7 text-base leading-normal rounded-lg px-3 py-1 bg-primary-5 hover:scale-105 hover:bg-primary-6 duration-200'>
              <a href='#portfolio'>PORTFOLIO</a>
            </button>
          </div>
          <div id='about-media'>
            <div
              id='about-img-wrapper'
              className='w-[150px] h-[150px] mt-12 rounded-full truncate'>
              <img
                className='w-[150px]'
                src='./src/assets/img/avatar.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
