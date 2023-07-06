import React from 'react'
import Head from 'next/head'
import { CommanBanner } from '@/components/components'
import AboutBanner from './image/About.jpg'
import { Container, Grid, Typography, Box } from '@mui/material'
import Image from 'next/image'
import AboutImage from '../about/image/New_research.png'
import Img1 from "../about/image/New_reasearch_01.png"
import Img2 from "../about/image/New_reasearch_02.png"

const About = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>  About Us | Rice Renewables</title>
        <meta name="description" content=" Rice Renewables: PV consultancy & system integrator in Asian solar market. Technical & commercial expertise. Sustainable solutions for global energy needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/" />
      </Head>
      <CommanBanner image={AboutBanner} title="About Us" />
      <main>
        <Container maxWidth="xxl" style={{ backgroundColor: '#fff' }}>
          <Grid container>
            <Grid item xs={12} md={10} className='mx-auto' mt={2}>
              <Typography variant='h2' align='center' py={4}>About Us</Typography>
              <Box mb={3}>
                <Typography variant="para">R I C E Renewables is a PV consultancy and knowledge disseminator/system integrator of PV / BIPV solutions in the Asian Solar market.
                  Incorporated in Singapore in the year 2017, we work with leading component suppliers, architects, project developers, EPCs, institutions and government bodies
                  We bridge the gap between stakeholders in the Solar PV market offering Technical and Commercial expertise and provide sustainable solutions for the World’s growing energy needs. </Typography>
              </Box>
              <Box>
                <Typography variant="h6">We are a BCA Registered Contractor for Solar PV Integration – ME03 L1 </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={10} className="mx-auto about-img" mt={2}>
              <Box px={2} className="text-center image-container">
                <Image src={AboutImage} className="img-fluid img-md" alt="aboutImg" />
                <Image src={Img1} className="img-fluid image" alt="aboutImg" />
                <Image src={Img2} className="img-fluid image" alt="aboutImg2" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default About
 