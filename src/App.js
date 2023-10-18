import { useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import './App.css';

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

  // Set titles dynamically using state

  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(activeIndex)
  const swiperRef = useRef(null);
  const updateIndex = useCallback(
    () => setActiveIndex(swiperRef.current.swiper.realIndex),
    []
  );
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      swiperInstance.on('slideChange', updateIndex)
    }
    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', updateIndex);
      }
    };
  }, [updateIndex]);

  return (

    <div className='container'>
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
        ref={swiperRef}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className='last-div '>
        <h3 className='head-3'>Coming Soon</h3>
        {/* Dynamic title */}
        <h2 className='head-2'>
          {activeIndex === 0 && 'Puss in Boots'} {activeIndex === 1 && 'Dragon Huntings'} {activeIndex === 2 && 'Avengers'}
          {activeIndex === 3 && 'Bumblebee'} {activeIndex === 4 && 'Fast Curious-6'} {activeIndex === 5 && 'Avatar'}
          {activeIndex === 6 && 'Die hart'} {activeIndex === 7 && 'BloodShit'}
        </h2>
        <div className='last-div-2'>
          <p>2019-Movie-2h 10m</p>
          <div className='span'>
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
