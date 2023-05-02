import React from 'react'
import { CommanBanner, FaqSection } from '../../components/components'
import Banner from './images/FAQsSection.jpg'
import { Container, Box } from '@mui/material'

const Faq = () => {
  return (
    <>
      <CommanBanner image={Banner} title="FAQs" />
      <main style={{backgroundColor:'#D9D9D9'}}>
        <Container maxWidth="md" className='mx-auto'>
          <Box py={10}>
          <FaqSection />
          </Box>
        </Container>
      </main>

     
    </>
  )
}

export default Faq
