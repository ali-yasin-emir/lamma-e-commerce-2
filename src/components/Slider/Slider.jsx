import React, { useState } from 'react';
import img1 from './img/img1.mp4';
import img2 from './img/img2.jpg';
// import img3 from './img/img3.jpg';
import img3 from './img/img4.jpg';
import img4 from './img/img5.png';
// import img6 from './img/img6.jpg';
import img5 from './img/img7.jpg';

import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import './Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [img1, img2, img3, img4, img5];
  console.log(data.length);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className='slider'>
      <div
        className='container'
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
          width: `${data.length * 100}vw`,
        }}
      >
        <video autoPlay muted loop type='video/mp4' src={img1} />
        <img src={img2} alt='' />
        <img src={img3} alt='' />
        <img style={{ objectFit: 'contain' }} src={img4} alt='' />
        <img src={img5} alt='' />
      </div>
      <div className='icons'>
        <div onClick={prevSlide} className='icon'>
          <KeyboardArrowLeftOutlinedIcon />
        </div>
        <div onClick={nextSlide} className='icon'>
          <KeyboardArrowRightOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
