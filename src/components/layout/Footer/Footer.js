import React from 'react'
import Image from 'next/image'
import FooterLogo from './image/footerLogo.jpg'
import Styles from '../../../styles/Footer.module.css'
import Link from 'next/link';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
      <footer className={`text-white py-5 ${Styles.BackgroundColor}`} >
        <div className="container">
          <div className="row">

            <div className="col-md-4 mb-3">
              <Image src={FooterLogo} width={150} height={80} />
              <p className='mt-3'>RICE Renewables is offering Consulting Services to a Hong Kong based Project Developer to develop a 10 MWp Solar PV plant in South India. This is a complete Owner’s Engineer scope covering all aspects of Project Development.</p>
            </div>

            <div className="col-md-4 mb-3">
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li className='my-4 d-flex'>
                  <div> <PlaceIcon /></div>
                  <div className={Styles.Margin}> R I C E Renewables Pte. Ltd.
                    33 Ubi avenue 3, #08-68 Vertex, Singapore 408868 </div>
                </li>
                <li className='my-4 d-flex'>
                  <div><EmailIcon /></div>
                  <div className={Styles.Margin}>ricesgp.com</div>
                </li>
                <li className='my-4 d-flex'>
                  <div><CallIcon /></div>
                  <div className={Styles.Margin}>+6590092624</div>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h5 className='text-center'>Follow Us</h5>
              <ul className="list-unstyled d-flex justify-content-center mt-4">
                <li className='px-4'><Link href="#" legacyBehavior><a className='text-white'><FacebookIcon /></a></Link> </li>
                <li className='px-4'><Link href="" legacyBehavior><a className='text-white'><InstagramIcon /></a></Link></li>
                <li className='px-4'><Link href="" legacyBehavior><a className='text-white'><TwitterIcon /></a></Link></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
