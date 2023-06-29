import React from 'react'
import { Container, Grid, Box, Typography, Card, CardContent, CardMedia } from '@mui/material'
import Card1 from './images/New_service_03.jpg';
import Card2 from './images/Service2.jpg'
import Card3 from './images/Service3.jpg'
import Card4 from './images/Service04.jpg'
import Card5 from './images/service5.jpg'
import Image from 'next/image'  

const Cards = [
  { id: '1', title: 'MICRO - GRID - PHILIPPINES 2 MWp', description: 'Complete Techno-Commercial feasibility study to integrate a 2 MWp Solar PV plant with 500 kWh storage to the existing 8 MWp Diesel operated utility plant. The service provider of a small Island in Visayas region is incorporating solar in the power mix as part of a green initiative and to lower the LCOE.', image: Card1 },
  { id: '2', title: 'GROUND MOUNT - INDIA 10 MWP, SOUTH INDIA', description: 'RICE Renewables is offering Consulting Services to a Hong Kong based Project Developer to develop a 10 MWp Solar PV plant in South India. This is a complete Owner’s Engineer scope covering all aspects of Project Development.', image: Card2 },
  { id: '3', title: 'ENGINEERING AND TECHNICAL SERVICE -BIPV, SINGAPORE', description: 'RICE Renewables has partnered with a Singapore based firm to offer BIPV solutions in Singapore and SE Asia. R I C E supports with Market Study and BIPV System Design, Engineering and Project Management.', image: Card3 },
  { id: '4', title: 'FOOD COURT, SIT PUNGGOL, SINGAPORE', description: 'The commercial project in Punggol, Singapore is nearing completion by June 2023. It features a vibrant food court with ample seating and culinary diversity. The innovative design incorporates integrated skylights and laminated glass-glass IGU modules, providing both aesthetic appeal and energy efficiency. With a rated system power of 57 kWp and an annual energy yield of 68,400 kWh, this project exemplifies sustainable architecture and enhances the dining experience.', image: Card4 },
  { id: '5', title: 'ECO ENVELOPE, SINGAPORE', description: 'Introducing "ECO ENVELOPE," a groundbreaking commercial project in Singapore. With a rated system power of 207.8 kWp and an annual energy yield of 210,000 kWh, it harnesses clean energy using glass-glass PV modules. Combining skylights (BIPV) and FINS construction, this innovative project is set to redefine sustainability. Anticipated completion is scheduled for July 2023, positioning ECO ENVELOPE as a remarkable symbol of energy efficiency and captivating design.', image: Card5 },
]

const CardReferences = () => {
  return (
    <>
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
                             <CardMedia
                              sx={{ height: 200 }}
                              image={data.image.src}                            
                              title="green iguana"
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
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default CardReferences


