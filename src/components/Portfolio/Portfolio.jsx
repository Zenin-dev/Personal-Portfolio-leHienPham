/* eslint-disable no-unused-vars */
import projectImg_PygotoBlog from '/src/assets/img/project-Pygoto-Blog.png'
import projectImg_ZeninShop from '/src/assets/img/project-Zenin-Shop.png'
import projectImg_KanbanBoard from '/src/assets/img/project-Kanban-Board.png'
import projectImg_ShineSmile from '/src/assets/img/project-Shine-Smile.png'
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
            <img
              className='project__img'
              src={projectImg_PygotoBlog}
              alt='Pygoto Blog'
            />
          </div>
          <div className='project-content'>
            <h3 className='project__title'>
              <a
                href='https://zenin.pythonanywhere.com/'
                className='section-content__title project__title'
                target='_blank'>
                PYGOTO BLOG WEBSITE
              </a>
            </h3>
            <p className='project__desc'>
              Dự án tự học cá nhân, thiết kế website Pygoto Blog với các tính
              năng đăng ký, đăng nhập, CRUD blog và tương tác like, comment,
              follow, notification.
            </p>
            <ul className='project__tags back-end'>
              <li>Python</li>
              <li>Django</li>
              <li>mySQL</li>
            </ul>
            <ul className='project__tags front-end'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className='project__links'>
              <a
                className='btn'
                href='https://zenin.pythonanywhere.com/'
                target='_blank'>
                Live
              </a>
              <a
                className='btn md:mt-1'
                href='https://github.com/ZeninPhamDev/Pygoto_Blog--fullstack'
                target='_blank'>
                Source
              </a>
            </div>
          </div>
        </div>
        {/* <!-- project 2 --> */}
        <div className='project-item project-item-even'>
          <div className='project-media'>
            <img
              className='project__img'
              src={projectImg_ZeninShop}
              alt='Zenin Shop'
            />
          </div>
          <div className='project-content'>
            <h3 className='project__title'>
              <a
                href='https://zenin-shop.onrender.com/'
                className='section-content__title project__title'
                target='_blank'>
                ZENIN SHOP WEBSITE
              </a>
            </h3>
            <p className='project__desc'>
              Dự án tự học cá nhân, thiết kế website Zenin Shop với các chức
              năng thương mại điện tử cơ bản. Hoàn thiện kết nối API Back-end và
              Front-end.
            </p>
            <ul className='project__tags back-end'>
              <li>Node.js (TypeScript)</li>
              <li>Express JS</li>
              <li>MongoBD</li>
            </ul>
            <ul className='project__tags front-end'>
              <li>React JS (TypeScript)</li>
              <li>Bootstrap</li>
            </ul>
            <div className='project__links'>
              <a
                className='btn'
                href='https://zenin-shop.onrender.com/'
                target='_blank'>
                Live
              </a>
              <a
                className='btn md:mt-1'
                href='https://github.com/ZeninPhamDev/Zenin-Shop'
                target='_blank'>
                Source
              </a>
            </div>
          </div>
        </div>
        {/* <!-- project 3 --> */}
        <div className='project-item'>
          <div className='project-media'>
            <img
              className='project__img'
              src={projectImg_KanbanBoard}
              alt='Kan Board'
            />
          </div>
          <div className='project-content'>
            <h3 className='project__title'>
              <a
                href='https://kanban-board-zeninphamdev.vercel.app/'
                className='section-content__title project__title'
                target='_blank'>
                KANBAN BOARD WEBSITE
              </a>
            </h3>
            <p className='project__desc'>
              Dự án tự học cá nhân, tạo Website bảng Kanban với chức năng tạo
              mới, kéo thả, xóa cột và thẻ. Hoàn thiện kết nối API Back-end và
              Front-end.
            </p>
            <ul className='project__tags back-end'>
              <li>Node.js (JavaScript)</li>
              <li>Express JS</li>
              <li>MongoBD</li>
            </ul>
            <ul className='project__tags front-end'>
              <li>React JS (JavaScript)</li>
              <li>MUI</li>
            </ul>
            <div className='project__links'>
              <a
                className='btn'
                href='https://kanban-board-zeninphamdev.vercel.app/'
                target='_blank'>
                Live
              </a>
              <a
                className='btn md:mt-1'
                href='https://github.com/ZeninPhamDev/Kanban-Board'
                target='_blank'>
                Source
              </a>
            </div>
          </div>
        </div>
        {/* <!-- project 4 --> */}
        <div className='project-item  project-item-even '>
          <div className='project-media'>
            <img
              className='project__img'
              src={projectImg_ShineSmile}
              alt='Shine Smile'
            />
          </div>
          <div className='project-content'>
            <h3 className='project__title'>
              <a
                href='https://zeninphamdev.github.io/Shine-Smile--Dental-Clinic--Frontend/'
                className='section-content__title project__title'
                target='_blank'>
                SHINE SMILE WEBSITE
              </a>
            </h3>
            <p className='project__desc'>
              Dự án tự học cá nhân, tạo giao diện Responsive cho website giới
              thiệu phòng khám nha khoa.
            </p>
            <ul className='project__tags front-end'>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className='project__links'>
              <a
                className='btn'
                href='https://zeninphamdev.github.io/Shine-Smile--Dental-Clinic--Frontend/'
                target='_blank'>
                Live
              </a>
              <a
                className='btn md:mt-1'
                href='https://github.com/ZeninPhamDev/Shine-Smile--Dental-Clinic--Frontend'
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
