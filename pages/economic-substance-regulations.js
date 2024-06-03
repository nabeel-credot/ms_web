import React from 'react'
import Head from 'next/head'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// import Banner from "../components/Accounting&Bookkeeping/Common_BannerVideo"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar2"
import ESR_Banner from "../components/Accounting&Bookkeeping/ESR_Banner"
import Services from "../components/Accounting&Bookkeeping/ESR_service"
import CIGA from "../components/Accounting&Bookkeeping/CIGA"
import Section from "../components/Accounting&Bookkeeping/ESR_section"
import Section2 from "../components/Accounting&Bookkeeping/ESR_section2"
import Section3 from "../components/Accounting&Bookkeeping/ESR_section3"
import Section5 from "../components/Accounting&Bookkeeping/ESR_section5"
import Section6 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section7 from "../components/Accounting&Bookkeeping/News_LatestInsight";

function esr() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Economic Substance Regulations (ESR) Filing in Abu Dhabi, Dubai, UAE - MS</title>
        <meta name="description" content="MS offers expert Economic Substance Regulations (ESR) Filing & Reporting services in Abu Dhabi, Dubai, UAE. Stay compliant with the latest ESR requirements and trust us for seamless ESR filing submission." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Economic Substance Regulations (ESR) Filing in Abu Dhabi, Dubai, UAE - MS" />
        <meta property="og:description" content="MS offers expert Economic Substance Regulations (ESR) Filing & Reporting services in Abu Dhabi, Dubai, UAE. Stay compliant with the latest ESR requirements and trust us for seamless ESR filing submission." />
        <meta property="og:url" content="https://ms-ca.com/economic-substance-regulations" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-05-27T11:02:02+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="24 minutes" />
        <link rel="canonical" href="https://ms-ca.com/economic-substance-regulations" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      {/*   
      <div className={styles.banner_container_Blue}>
        <Banner heading={<span>Economic Substance <br />Regulations (ESR)</span>}   
    />
      </div> */}
      <div className={styles.banner_container_Blue}>
        <Banner heading={<>Economic Substance <br />Regulations (ESR) in UAE </>}

          height="428" white={true} detail="The Economic Substance Regulations (ESR) in UAE require 
          businesses to demonstrate their economic activity and ensure it aligns with their 
          presence in the country. Our financial services can assist you in meeting these 
          regulatory requirements." />
      </div>

      <div className={styles.MenuBar}>
        <MenuBar />
      </div>
      <ESR_Banner />
      <CIGA />
      <div className={styles.AccountingServiceWrap}>
        <Services />
      </div>

      <div className={styles.AccountingServiceWrap}>
        <Section />
      </div>

      <Section2 />
      <div className={styles.AccountingServiceWrap}>
        <Section3 />
      </div>

      <Section5 />

      <div className={styles.marginTpW}>
        <Section6 service="Economic Substance Regulations " />
      </div>
      <div className={styles.marginTp}>
        <Section7 categorySlug="taxes"/>
      </div>
      <div className={Hstyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default esr