import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "./images/logo.png"
import Styles from '../../../styles/Home.module.css'

const Header = () => {
  const [expanded, setExpanded] = useState(false);
   const router = useRouter();
  return (
    <>
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link href="/" legacyBehavior>
        <a className="navbar-brand">
          <Image
            src={logo }
            alt="Logo"
            width={150}
            height={60}
            className='img-fluid'
          />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-expanded={expanded ? true : false}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto">
          <li className={router.pathname == "/" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}` }>
            <Link href="/" legacyBehavior>
              <a className="nav-link ">Home</a>
            </Link>
          </li>
          <li className={router.pathname == "/about" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
            <Link href="/about" legacyBehavior>
              <a className="nav-link">About Us</a>
            </Link>
          </li>
        {/* <li className={router.pathname == "/blog" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
          <Link href="/blog" legacyBehavior>
            <a className="nav-link">Blog</a>
          </Link>
        </li> */}
         {/*  <li className={router.pathname == "/faq" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
            <Link href="/faq" legacyBehavior>
              <a className="nav-link">FAQs</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Header
