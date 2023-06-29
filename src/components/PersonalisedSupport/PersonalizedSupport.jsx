import { Box, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Image from 'next/image';
import { Card, Container } from 'react-bootstrap';
import Img1 from "../../../public/images/img1.jpg"


const Cards = [
  { id: '1', title: 'Design Stage', description: ' Glass composition parameters, aesthetically appealing glass module design, ultra-realistic simulation of cells, quick-prototyping, ROI calculation.', image: Img1 },
  { id: '2', title: 'Energy Study', description: 'Energy  performance study, performance target evaluation, comprehensive study to reach  NZEB standards.', image: Img1 },
  { id: '3', title: 'Technical Services', description: 'Facade integration, full system design, installation supervision, commisioning and monitoring.', image: Img1 },
]
const PersonalizedSupport = () => {
  return (
    <>
      <Container maxWidth='xxl' className=' mx-auto'>
        <Grid container>
          <section>
            <Container maxWidth='xxl'>
              <Grid container>
                <Grid item xs={12} md={10} className='mx-auto' mt={2}>
                  <Typography variant='h3' align='center' py={1}>Project References</Typography>
                  <Box>
                    <Grid container spacing={3}>
                      {
                        Cards.map((data) => (
                          <Grid item xs={12} sm={6} lg={4} key={data.id}>
                            <Box m={2}>
                              <Card sx={{ minHeight: 520, maxHeight: 700 }}>
                                <div className='d-flex justify-content-around align-items-center'>     
                                <CardMedia
                                  sx={{ height: 120 ,width:120 }}
                                  image={data.image.src}
                                  title="green iguana"
                                   />
                                  <Typography variant="h5">
                                    {data.title}
                                  </Typography>
                                  </div>
                                <CardContent>
                                  <Typography variant="para" color="text.secondary">
                                    {data.description}
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Box>
                          </Grid>
                        ))
                      }
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>
          <Grid item xs={12} md={10} className='mx-auto' mt={2}>
            <Box p={3}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Image src={Img1} className='img-fluid' alt="" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box  >
                    <Box mb={3}>
                      <Typography variant="h4">Energy Study</Typography>
                      <Typography variant="para">New builds and renovation projects: detailed solar study of the facade to define the quantity and type of energy- generating glazing required for the project in order to turn it into an energy-efficient building.</Typography>
                    </Box>
                    <Box mb={3}>
                      <Typography variant="h4">Drawing & Mapping</Typography>
                      <Typography variant="para">Drawing and 3D modelling tools are used to conduct a complete solar study.</Typography>
                    </Box>
                    <Box mb={3}>
                      <Typography variant="h4">Data Analysis</Typography>
                      <Typography variant="para">Reports are produced detailing how much energy will be generated and saved, and what the impact will be on occupant comfort.</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default PersonalizedSupport



{/* <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="/path/to/image2.jpg"
                  alt="Card 2"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Energy Study
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description for Card 2
                  </Typography>
                </CardContent>
              </Card> */}


{/* <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="/path/to/image3.jpg"
                  alt="Card 3"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Technical Services
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description for Card 3
                  </Typography>
                </CardContent>
              </Card> */}


{/* <Card>
                <Box>
                  <Image src={Img1} alt="card1-img" className='' height="40px"/>
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Design Stage
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Glass composition parameters, aesthetically appealing glass module design, ultra-realistic simulation of cells, quick-prototyping, ROI calculation.
                  </Typography>
                </CardContent>
              </Card> */}

            //   <Grid item xs={12} md={10} className='mx-auto' mt={2}>
            //   <Typography variant='h3' align='center' py={1}>Personalized Support</Typography>
            //   <div className="cardContainer">
            //     <Grid item xs={12} sm={6} lg={4} md={4} >
            //       <Box m={2}>
            //         <Card sx={{ minHeight: 520, maxHeight: 700 }}>
            //           <Image src={Img1} alt="card1-img" className='mx-auto' height={100} />
            //           <CardContent>
            //             <Typography variant="h5">
            //               Design Stage
            //             </Typography>
            //             <Typography variant="para" color="text.secondary">
            //               Glass composition parameters, aesthetically appealing glass module design, ultra-realistic simulation of cells, quick-prototyping, ROI calculation.
            //             </Typography>
            //           </CardContent>
            //         </Card>
            //       </Box>
            //     </Grid>
            //     <Grid item xs={12} sm={6} lg={4} md={4}  >
            //       <Box m={2}>
            //         <Card sx={{ minHeight: 520, maxHeight: 700 }}>
            //           <Image src={Img1} alt="card1-img" className='mx-auto' height={100} />
            //           <CardContent>
            //             <Typography variant="h5">
            //               Energy Study
            //             </Typography>
            //             <Typography variant="para" color="text.secondary">
            //               Glass composition parameters, aesthetically appealing glass module design, ultra-realistic simulation of cells, quick-prototyping, ROI calculation.
            //             </Typography>
            //           </CardContent>
            //         </Card>
            //       </Box>
            //     </Grid>
            //     <Grid item xs={12} sm={6} lg={4} md={4} >
            //       <Box m={2}>
            //         <Card sx={{ minHeight: 520, maxHeight: 700 }}>
            //           <Image src={Img1} alt="card1-img" className='mx-auto' height={100} />
            //           <CardContent>
            //             <Typography variant="h5">
            //               Design Stage
            //             </Typography>
            //             <Typography variant="para" color="text.secondary">
            //               Glass composition parameters, aesthetically appealing glass module design, ultra-realistic simulation of cells, quick-prototyping, ROI calculation.
            //             </Typography>
            //           </CardContent>
            //         </Card>
            //       </Box>
            //     </Grid>
            //   </div>
            // </Grid>