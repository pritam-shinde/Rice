 import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Img1 from "../../../public/images/Design stage 500 x 200.png";
import Img2 from "../../../public/images/Energy study  500 x 200.png";
import Img3 from "../../../public/images/Technical services  500 x 200.png"
import SolarBar  from "../../../public/images/Panel_Roof.jpg"

 const Cards = [
  { id: '1', title: 'Design Stage', description: ' Glass composition parameters, aesthetically appealing glass module design, ultra-realistic simulation of cells, quick-prototyping, ROI calculation.', image: Img1 },
  { id: '2', title: 'Energy Study', description: 'Energy  performance study, performance target evaluation, comprehensive study to reach  NZEB standards.', image: Img2 },
  { id: '3', title: 'Technical Services', description: 'Facade integration, full system design, installation supervision, commisioning and monitoring.', image: Img3 },
]
const PersonalizedSupportRice = () => {
  return (
    <section>
        <Container maxWidth='xxl' className="m-2 mx-auto ">
          <Grid container spacing={2}>
            <Grid item xs={12} md={10} className='mx-auto' mt={2}>
              <Typography variant='h3' align='center' py={1}>Personalized Support</Typography>
              <Box >
                <Grid container spacing={2} >
                  {
                    Cards.map((data) => (
                      <Grid item xs={12} sm={6} lg={4} key={data.id} className="d-flex justify-content-center align-items-center">
                        <Box m={1}>
                          <Card sx={{ minHeight: 320, maxHeight: 500 ,width:280 }}>
                             <CardMedia
                              sx={{ height: 120 ,borderRadius: '5px'  }}
                              image={data.image.src}                            
                              title="green iguana"
                              style={{padding:"20px" }}
                            />
                            <CardContent>
                              <Typography variant="h5">
                                {data.title}
                              </Typography>
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
                <Grid item xs={12} md={10} className='mx-auto' mt={1}>
               <Box p={2}>
                 <Grid container spacing={6}>
                   <Grid item xs={12} md={6}>
                     <Box>
                       <Image src={SolarBar} className='img-fluid' alt="" />
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
      </section>
  );
};

export default PersonalizedSupportRice