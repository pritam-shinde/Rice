// import React, { useState } from 'react';
// import Image from 'next/image';
// import banner1 from './images/Banner1.jpg';
// import banner2 from './images/Banner2.jpg';
// import banner3 from './images/Banner3.jpg';


// const HomeSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrevClick = () => {
//     setActiveIndex(activeIndex === 0 ? 2 : activeIndex - 1);

//   };

//   const handleNextClick = () => {
//     setActiveIndex(activeIndex === 2 ? 0 : activeIndex + 1);
//   };

//   const currentClick = () => {
//     setActiveIndex(activeIndex);
//     console.log(activeIndex === 2 ? 0 : activeIndex + 1);
//   };

//   return (
//     <>
//       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
//             <Image src={banner1} className="d-block w-100 img-fluid" alt="Image 1" />
//           </div>
//           <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
//             <Image src={banner2} className="d-block w-100 img-fluid" alt="Image 2" />
//           </div>
//           <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
//             <Image src={banner3} className="d-block w-100 img-fluid" alt="Image 3" />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={handlePrevClick}>
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNextClick}>
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   )
// }

// export default HomeSlider

import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import SwiperCore, { EffectFade, Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Styles from '../../styles/Home.module.css';

SwiperCore.use([EffectFade, Pagination, Autoplay, Navigation]);

const HomeSlider = () => {
  return (
    <>
      <Container maxWidth="xxl" id="home_hero" className="p-0">
        <Swiper
          spaceBetween={30}
          effect="fade"
          pagination={{ clickable: true }}
          loop={true}
          style={{ height: "400px" }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="mySwiper"
        >
          <SwiperSlide className={`slide ${Styles.slider1}`} id="home-hero-slider1">
            <Grid container style={{ height: 'inherit' }}>
              <Grid item xs={12} md={10} className="mx-auto d-flex justify-content-md-start justify-content-center align-items-center" style={{ height: 'inherit' }}>
                <Box p={1}>
                  <Typography className="text-white">
                    {/* <span className={Styles.blueSpan}>Family Quality</span> <br />
                    <span className={Styles.whiteSpan}>Care</span> */}
                  </Typography>
                  <Typography className="text-white" variant='h3'>Invest in Solar Energy for a Brighter, More Sustainable Tomorrow.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide className={`slide ${Styles.slider2}`} id="home-hero-slider2">
            <Grid container style={{ height: 'inherit' }}>
              <Grid item xs={12} md={10} className="mx-auto d-flex justify-content-md-start justify-content-center align-items-center" style={{ height: 'inherit' }}>
                <Box p={1}>
                  <Typography className="text-white">
                    {/* <span className={Styles.blueSpan}>Experienced</span> <br />
                    <span className={Styles.whiteSpan}>Service</span> */}
                  </Typography>
                  <Typography className="text-white" variant='h3'>Invest in Solar Energy for a Brighter, More Sustainable Tomorrow.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide className={`slide ${Styles.slider3}`} id="home-hero-slider3">
            <Grid container style={{ height: 'inherit' }}>
              <Grid item xs={12} md={10} className="mx-auto d-flex justify-content-md-start justify-content-center align-items-center" style={{ height: 'inherit' }}>
                <Box p={1}>
                  <Typography className="text-white">
                    {/* <span className={Styles.blueSpan}>Child Dental</span> <br />
                    <span className={Styles.whiteSpan}>Benefit Scheme</span> */}
                  </Typography>
                  <Typography className="text-white" variant='h3'>Invest in Solar Energy for a Brighter, More Sustainable Tomorrow.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
{/* <div className="swiper-button-prev text-white "   />
<div className="swiper-button-next text-white "  /> */}
</Swiper>
</Container>
</>
);
};

export default HomeSlider;