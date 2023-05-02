import Head from 'next/head'
import { HomeSlider, Form, Associations, CardReferences, Propositions } from '../components/components'
import { Typography, Container, Box, Grid } from '@mui/material'
import Image from 'next/image'
import Img1 from '../../public/images/img1.png'
import Img3 from '../../public/images/img3.png'
import Styles from '../styles/Home.module.css'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



const Services = [
  { id: '1', text: 'Techno-Commercial feasibility study' },
  { id: '2', text: 'Due diligence including technical, commercial and environmental study' },
  { id: '3', text: 'Pre-contract negotiations, Vendor/Technology Selection' },
  { id: '4', text: 'Design, Engineering & Project Management' },
  { id: '5', text: 'Construction Management including acceptance testing' },
  { id: '6', text: 'Operational management services including asset management and training' },
  { id: '7', text: 'Market Study and Market Entry' },
  { id: '8', text: 'Financial Modeling' },
  { id: '9', text: 'Vendor Qualification and Plant Auditing' },
]
export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>home page</title>
        <meta name="description" content="home page description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/" />
      </Head>

      <main>
        <HomeSlider />
        <section>
          <Container maxWidth='xxl'>
            <Grid container>

              <Grid item xs={12} md={10} className='mx-auto' mt={2}>
                <Typography variant='h2' align='center' py={1}>Our Principles</Typography>
                <Box p={3}>
                  <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Image src={Img1} className='img-fluid' alt=""/>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box className={Styles.Space}>

                        <Box mb={3}>
                          <Typography variant="h3">We want to foster innovation</Typography>
                          <Typography variant="para">Interdisciplinary teams are the key for
                            your individual approaches</Typography>
                        </Box>

                        <Box mb={3}>
                          <Typography variant="h3">We strive for continuous learning</Typography>
                          <Typography variant="para">We try to improve ourselves and our
                            work with every step of the process</Typography>
                        </Box>

                        <Box mb={3}>
                          <Typography variant="h3">We place high value on enjoying our work</Typography>
                          <Typography variant="para">We solve your challenges with passion</Typography>
                        </Box>

                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>


              <Grid item xs={12} md={10} className='mx-auto' mt={2}>
                <Box p={3}>
                  <Grid container spacing={6}>

                    <Grid item xs={12} md={6}>
                      <Box className={Styles.Space}>
                      
                        <Box mb={3}>
                          <Typography variant="h3">We are purpose-driven</Typography>
                          <Typography variant="para">We develop business models that have a
                            lasting, positive impact for all stakeholders</Typography>

                        </Box>
                        <Box mb={3}>
                          <Typography variant="h3">We are quality-oriented</Typography>
                          <Typography variant="para">Providing high value for a client’s
                            investment in our service</Typography>
                        </Box>

                        <Box mb={3}>
                          <Typography variant="h3">We value openness and transparency</Typography>
                          <Typography variant="para">We openly communicate our
                            capabilities and deliverables to you</Typography>
                        </Box>

                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Box>
                        <Image src={Img1} className='img-fluid' alt="" />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        <Propositions />

        <section style={{ backgroundColor: `var(--light-gray)` }}>
          <Container maxWidth='xxl'>
            <Grid container>
              <Grid item xs={12} md={10} className='mx-auto' mt={2}>
                <Box p={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                      <Box>
                        <Image src={Img3} className='img-fluid' alt="" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Box>
                        <Typography variant='h2'>Consulting Services</Typography>
                        <Typography variant='h4' py={1}>Service covers all aspects of the project lifecycle</Typography>

                            <ul style={{ listStyleType: 'none' }}>
                              {Services.map((item) => (
                                <li key={item.id} className='p-1'>  <CheckCircleOutlineIcon style={{ color: `var(--Coper)`, marginRight: '0.5rem' }} />{item.text}</li>
                              ))}
                            </ul>

                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        
        <CardReferences />
        <Associations />
        <Form />
      </main>

    </>
  )
}
