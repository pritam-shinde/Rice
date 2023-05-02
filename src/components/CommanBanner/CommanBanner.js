import React from 'react'
import { Typography } from '@mui/material'
import Style from '../../styles/Commonbanner.module.css'

const CommanBanner = ({image, title}) => {
  return (
    <>
    <section className={Style.hero} style={{backgroundImage:`url(${image.src})`}}>    
     <Typography variant='h1' className= {Style.bannerTitle}>{title}</Typography>
    </section>
    </>
  )
}

export default CommanBanner
