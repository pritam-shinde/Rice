import React from 'react'
import { Container, Box, Grid, Typography, Card, CardContent } from '@mui/material'
import  Styles from '../../styles/Home.module.css'


const Values = [
    {id:'1', title:'Leading Expertise', description:'R I C E Renewables is uniquely placed in the Asian solar market. We bring our strong market study, consulting background and project development knowledge to build a complete understanding of the solar market.Our approach combines the macroscopic understanding of the market and the microscopic understanding of executing projects on the ground – a winning combination for a company looking to establish their solar business model in Asia.'},
    {id:'2', title:'Quality Driven', description:'Our approach to quality as a culture ensures that our documentation processes, adherence to timelines and deliverables are of the best quality. We have accomplished superior quality projects by servicing large international companies and investors.'},
    {id:'3', title:'Project Experience', description:'We have worked in the entire value chain of RE technologies from project appraisal and feasibility analysis, design, engineering, implementation and final evaluation. We also provide financial services related to the RE sector including market development, partner identification, techno-commercial due diligence, business plan preparation, fundraising (PE/VC funds, companies), technology and vendor selection.'},
    {id:'4', title:'Extensive Industry Experience', description:'We have been designing solar energy solutions, evaluating technologies, working with vendors, and managing installations for many years. That means you’ll get accurate, and reliable information, not vague opinions.'},
    {id:'5', title:'Intelligent Sourcing', description:'Unlike EPC companies who propose one technology solution, we evaluate and procure technology from a wide range of service providers. We leverage our industry experience to find the best pricing and the best solution for your particular needs.'},
    {id:'6', title:'Lean Team Model Approach', description:'We put together an expert team quickly as per the needs of the project, offering the best talent and thereby effectively optimizing time and resources.'},
] 

const Propositions = () => {
  return (
    <>
    <section>
    <Container maxWidth='xxl'>
      <Grid container>            
      <Grid item xs={12} md={10} className='mx-auto' mt={2} mb={4}>
      <Typography variant='h2' align='center' py={1} mb={2}>Value Propositions</Typography>
      <Box>
            <Grid container spacing={3}>
      {
        Values.map((data) => 
          
              <Grid item xs={12} md={6} lg={4}>
                <Box  mx={6}>              
                  <Card className={Styles.CardHeight}>                    
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {data.title}
                      </Typography>
                      <Box className={Styles.BorderLine} my={2}></Box>
                      <Typography variant="para" color="text.secondary">
                        {data.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
          )
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

export default Propositions

