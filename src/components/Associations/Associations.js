import React from 'react'
import { Container, Box, Grid, Typography, Card, } from '@mui/material'
import Image from 'next/image'
import Associations1 from './images/Asso1.png'
import Associations2 from './images/Asso2.png'
import Associations3 from './images/Asso3.png'
import Styles from '../../styles/Home.module.css'


const Associations = () => {
    return (
        <>
            <section>
                <Container maxWidth='xxl'>
                    <Grid container>

                        <Grid item xs={12} md={10} className='mx-auto' mt={2} justifyItems='center'>
                            <Typography variant='h2' align='center' py={1}>Associations</Typography>
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={4}>
                                        <Box m={2}>
                                            <Card className={Styles.radius}>
                                                <Image src={Associations1} className='img-fluid' alt="" />
                                            </Card>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box m={2}>
                                            <Card className={Styles.radius}>
                                                <Image src={Associations3} className='img-fluid' alt="" />
                                            </Card>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} md={4}>
                                        <Box m={2}>
                                            <Card className={Styles.radius}>
                                                <Image src={Associations2} className='img-fluid' alt="" />
                                            </Card>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Associations
