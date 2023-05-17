import React from 'react'
import Head from 'next/head'
import { CommanBanner } from '@/components/components'
import AboutBanner from './image/About.jpg'
import { Container, Grid, Typography, Box } from '@mui/material'
import Image from 'next/image'
import AboutImage from '../about/image/About image.png'


const About = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <CommanBanner image={AboutBanner} title="About Us" />
      <main>
        <Container maxWidth="xxl" style={{ backgroundColor: '#D9D9D9' }}>
          <Grid container>
            <Grid item xs={12} md={10} className='mx-auto' mt={2}>
              <Typography variant='h2' align='center' py={4}>About Us</Typography>
              <Box mb={6}>
                <Typography variant="para">R I C E Renewables is a PV consultancy and knowledge disseminator/system integrator of PV / BIPV solutions in the Asian Solar market.
                  Incorporated in Singapore in the year 2017, we work with leading component suppliers, architects, project developers, EPCs, institutions and government bodies
                  We bridge the gap between stakeholders in the Solar PV market offering Technical and Commercial expertise and provide sustainable solutions for the World’s growing energy needs. </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={10} className='mx-auto' mt={2}>
            <Box px={2}>
                <Image src={AboutImage} className='img-fluid' alt='aboutImg'/>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>

    </>
  )
}

export default About
