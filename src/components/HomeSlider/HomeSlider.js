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
          style={{ height: "550px" }}
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
                  <Typography className="text-white" variant='h1'>Invest in Solar Energy for a Brighter, More Sustainable Tomorrow.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide className={`slide ${Styles.slider2}`} id="home-hero-slider2">
            <Grid container style={{ height: 'inherit' }}>
              <Grid item xs={12} md={10} className="mx-auto d-flex justify-content-md-start justify-content-center align-items-center" style={{ height: 'inherit' }}>
                <Box p={1}>
                  <Typography className="text-white" variant='h1'>Research Partnerships for Solar Advancement: Shaping a Sustainable World.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide className={`slide ${Styles.slider3}`} id="home-hero-slider3">
            <Grid container style={{ height: 'inherit' }}>
              <Grid item xs={12} md={10} className="mx-auto d-flex justify-content-md-start justify-content-center align-items-center" style={{ height: 'inherit' }}>
                <Box p={1}>                
                  <Typography className="text-white" variant='h1'>Advancing Solar Technology: Joint Efforts for Cleaner Energy Solutions.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>

</Swiper>
</Container>
</>
);
};

export default HomeSlider;