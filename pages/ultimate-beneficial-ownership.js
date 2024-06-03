import React from 'react'
import Head from 'next/head'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar2"
import Banner2 from "../components/Accounting&Bookkeeping/UBO_Banner"
import Section from "../components/Accounting&Bookkeeping/UBO_section"
import Section2 from "../components/Accounting&Bookkeeping/UBO_section2"

import Section3 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section4 from "../components/Accounting&Bookkeeping/News_LatestInsight";

import Footer from "../components/Footer"
function ubo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UBO Consultant | Ultimate Beneficial Ownership in Abu Dhabi, Dubai, UAE - MS</title>
        <meta name="description" content="MS is a leading consultancy firm in Abu Dhabi, Dubai, UAE that offers services in relation to Ultimate Beneficial Ownership (UBO). We provide expert advice and support to clients." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="UBO Consultant | Ultimate Beneficial Ownership in Abu Dhabi, Dubai, UAE - MS" />
        <meta property="og:description" content="MS is a leading consultancy firm in Abu Dhabi, Dubai, UAE that offers services in relation to Ultimate Beneficial Ownership (UBO). We provide expert advice and support to clients." />
        <meta property="og:url" content="https://ms-ca.com/ultimate-beneficial-ownership" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-04-29T11:15:07+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="5 minutes" />
        <link rel="canonical" href="https://ms-ca.com/ultimate-beneficial-ownership" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container_Blue}>
        <Banner heading={<>Ultimate Beneficial <br />Ownership (UBO)</>}

          height="428" white={true} />
      </div>

      <div className={styles.MenuBar}>
        <MenuBar />
      </div>
      <Banner2 />
      <div className={styles.AccountingServiceWrap}>
        <Section />
      </div>

      <Section2 />

      <div className={styles.marginTp40W}>
        <Section3 service="UBO" />
      </div>
      <div className={styles.marginTp}>
        <Section4 categorySlug="taxes"/>
      </div>


      <div className={Hstyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default ubo