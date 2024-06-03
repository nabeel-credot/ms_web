import React from 'react'
import { useRef } from "react";
import Head from 'next/head'

import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/Smartup_Banner"
import Banner2 from "../components/Home/BannerTwoSmartup"
import Section from '../components/Accounting&Bookkeeping/Smartup_section'
import Section2 from '../components/Accounting&Bookkeeping/SmartUP_section2'
import Section3 from '../components/Accounting&Bookkeeping/Smartup_section3'
import Section4 from '../components/Accounting&Bookkeeping/Smartup_section4'
import Subscribe from '../components/Accounting&Bookkeeping/Subscribe'
import Footer from "../components/Footer"

function Smartup() {
  const resultRef = useRef(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>E-commerce & Start Up Consulting Services in Abu Dhabi, Dubai, UAE | MS SmartUps</title>
        <meta name="description" content="MS SmartUps provides e-commerce and start-up consulting services in Abu Dhabi, Dubai, UAE to help you plan, run, and scale the business you’ve always dreamed of. Contact us today." />
        <meta property="og:title" content="E-commerce & Start Up Consulting Services in Abu Dhabi, Dubai, UAE | MS SmartUps" />
        <meta property="og:description" content="MS SmartUps provides e-commerce and start-up consulting services in Abu Dhabi, Dubai, UAE to help you plan, run, and scale the business you’ve always dreamed of. Contact us today." />
        <link rel="canonical" href="https://ms-ca.com/e-commerce-startup" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" menuIcon="true" />
      <div className={styles.banner_container}>
        <Banner />
        <Banner2 />
      </div>
      <div className={styles.redBgWrap}>
        <Section resultRef={resultRef} />
      </div>

      <Section2 resultRef={resultRef} />
      <div className={styles.blueBgWrap}>
        <Section3 />
      </div>

      <Section4 ref={resultRef} resultRef={resultRef} />

      {/* <div className={styles.whiteBg}> */}
        <div className={styles.yellowBgWrap}>
          <Subscribe />
        </div>
      {/* </div> */}


      <div className={Hstyles.footer}>
        <Footer />
      </div>

    </div>
  )
}

export default Smartup