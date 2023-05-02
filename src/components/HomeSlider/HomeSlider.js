import React, { useState } from 'react';
import Image from 'next/image';
import banner1 from './images/Banner1.jpg';
import banner2 from './images/Banner2.jpg';
import banner3 from './images/Banner3.jpg';


const HomeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? 2 : activeIndex - 1);

  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === 2 ? 0 : activeIndex + 1);
  };

  const currentClick = () => {
    setActiveIndex(activeIndex);
    console.log(activeIndex === 2 ? 0 : activeIndex + 1);
  };

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
            <Image src={banner1} className="d-block w-100 img-fluid" alt="Image 1" />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
            <Image src={banner2} className="d-block w-100 img-fluid" alt="Image 2" />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
            <Image src={banner3} className="d-block w-100 img-fluid" alt="Image 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={handlePrevClick}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNextClick}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default HomeSlider
