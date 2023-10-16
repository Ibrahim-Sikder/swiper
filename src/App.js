import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';

function App() {
  const changeTitle = (title) => {
    const movieTitle = document.querySelectorAll('.head-2');

    movieTitle.forEach(name => {
      name.classList.remove('active');
      if (name.classList.contains(title)) {
        name.classList.add('active');
      }
    });


  }
  return (
    <div className='test'>

      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}

        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 20,
          depth: 700,
          modifier: 1.3,

          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide onMouseEnter={changeTitle('title-1')}>
          <img src={img1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={changeTitle('title-2')}>
          <img src={img2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={changeTitle('title-3')}>
          <img src={img3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={changeTitle('title-4')}>
          <img src={img4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={changeTitle('title-5')}>
          <img src={img5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={changeTitle('title-6')}>
          <img src={img6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={changeTitle('title-7')}>
          <img src={img7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={changeTitle('title-8')}>
          <img src={img8} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
      <div className='last-div '>
        <h3 className='head-3'>Coming Soon</h3>
        <h2 className='head-2 title-1 active'>Title-1</h2>
        <h2 className='head-2 title-2'>Title-2</h2>
        <h2 className='head-2 title-3'>Title-3</h2>
        <h2 className='head-2 title-4'>Title-4</h2>
        <h2 className='head-2 title-5'>Title-5</h2>
        <h2 className='head-2 title-6'>Title-6</h2>
        <h2 className='head-2 title-7'>Title-7</h2>
        <h2 className='head-2 title-8'>Title-8</h2>
        <div className='last-div-2'>
          <p>2019-Movie-2h 10m</p>
          <div>
            <span className='imd'>IMDb</span>
            <span className='number'>7.4</span>
          </div>
        </div>
        <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum ex velit illum quam dolor modi animi suscipit ducimus! Quo nam illum dicta omnis tenetur hic, ratione sunt enim excepturi...<span className='read'>Read More</span> </p>
        <button>Watch Now</button>
      </div>
    </div>
  );
}

export default App;
