import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
//components
// import Banner from "../components/Accounting&Bookkeeping/Banner"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar"
import Banner1 from "../components/Accounting&Bookkeeping/A&B_Banner2"
import BookkeepinServiceWork from "../components/Accounting&Bookkeeping/BookkeepinServiceWork"
import Banner2 from "../components/Accounting&Bookkeeping/Banner2"
import WhatYouGetWithMs from "../components/Accounting&Bookkeeping/A&b_service2"


import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import BookCall from '../components/Popup/Popup';

function Accounting_service() {
  const [popup, setPopup] = useState(false)

  const handleCallback = (popup) => {
    setPopup(popup)
  }
  return (

    <div className={styles.container}>
      <Head>
        <title>Accounting & Bookkeeping Services | Accounting Firm Abu Dhabi, Dubai, UAE - MS</title>
        <meta name="description" content="MS provides accounting and bookkeeping services in Abu Dhabi, Dubai, UAE. We offer a wide range of accounting solutions to help you get the most out of your finances." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Accounting & Bookkeeping Services | Accounting Firm Abu Dhabi, Dubai, UAE - MS" />
        <meta property="og:description" content="MS provides accounting and bookkeeping services in Abu Dhabi, Dubai, UAE. We offer a wide range of accounting solutions to help you get the most out of your finances." />
        <meta property="og:url" content="https://ms-ca.com/accounting-bookkeeping" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-04-29T10:55:31+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="5 minutes" />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://ms-ca.com/accounting-bookkeeping" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      {/* <div className={styles.banner_container_Blue}>
        <Banner />
      </div> */}
       <div className={styles.banner_container_Blue}>
                <Banner heading={
                <>Accounting &amp; Bookkeeping<br/> Services in Abu Dhabi & Dubai (UAE)</>}
                  
                    height="428" white={true} />
            </div>
      <div className={styles.MenuBar}>
        <MenuBar />
      </div>

      <Banner1 />

      <BookkeepinServiceWork parentCallback={handleCallback} />

      <div className={styles.Banner2Wrap}>
        <Banner2 />
      </div>
      <div className={styles.WhatYouGetWithMsWrap}>
        <WhatYouGetWithMs />
      </div>

      <Section2 service="Accounting and Bookkeeping Services" />

      <div className={styles.marginTp}>
        <Section3 categorySlug="accounting"/>
      </div>


      <div className={Hstyles.footer}>
        <Footer />
      </div>
      {popup && <BookCall onClick={() => setPopup(false)} />}
    </div>


  )
}

export default Accounting_service