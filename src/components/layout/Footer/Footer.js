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
              <Image src={FooterLogo} width={150} height={80} alt='footerLogo'/>
              <p className='mt-3'>R I C E Renewables is a PV consultancy and knowledge disseminator/system integrator of PV / BIPV solutions in the Asian Solar market. Incorporated in Singapore in the year 2017, we work with leading component suppliers, architects, project developers, EPCs, institutions and government bodies .</p>
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
                  <div className={Styles.Margin}><Link href="mailto:info@ricesgp.com" legacyBehavior><a className='text-white underline'>info@ricesgp.com
                  </a></Link></div>
                </li>
                <li className='my-4 d-flex'>
                  <div><CallIcon /></div>
                  <div className={Styles.Margin}><Link href="tel:+6590092624" className='text-white'>+6590092624</Link></div>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h5 className='text-center'>Follow Us</h5>
              <ul className="list-unstyled d-flex justify-content-center mt-4">
                <li className='px-4'><Link href="#" legacyBehavior><a className='text-white'><FacebookIcon /></a></Link> </li>
                <li className='px-4'><Link href="#" legacyBehavior><a className='text-white'><InstagramIcon /></a></Link></li>
                <li className='px-4'><Link href="#" legacyBehavior><a className='text-white'><TwitterIcon /></a></Link></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
