import React from 'react'
import { Container, Box, Grid, Typography } from '@mui/material'
import ContactForm from './ContactForm/ContactForm'

const Form = () => {
    return (
        <>
            <section>
                <Container maxWidth='xxl'>
                    <Grid container>
                        <Grid item xs={12} md={10} className='mx-auto' mt={2}>
                            <Box p={3}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} lg={6}>
                                        <Box>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.190515299!2d103.67943666232988!3d1.314337886002242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sin!4v1682492437963!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={6}>

                                        <Box>
                                            <Typography variant='para'>For any inquiries, questions or commendations,
                                            please contact us or fill out the following form</Typography>
                                            <Box mt={3}>
                                            <ContactForm/>
                                            </Box>
                                            
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

export default Form
