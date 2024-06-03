import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar2"
import Banner2 from "../components/Accounting&Bookkeeping/CBCR_Banner"
import Section from "../components/Accounting&Bookkeeping/CBCR_section"
import Section2 from "../components/Accounting&Bookkeeping/CBCR_Section2"
import Section3 from "../components/Accounting&Bookkeeping/CBCR_section3"
import Section4 from "../components/Accounting&Bookkeeping/CBCR_section4";

import Section5 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section6 from "../components/Accounting&Bookkeeping/News_LatestInsight";
function cbcr() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Country by Country Reporting (CBCR) Service in Abu Dhabi, Dubai,UAE - MS</title>
        <meta name="description" content="MS provides country-by-country reporting services for companies which are required to report their financial information under the new transparency rules of the Abu Dhabi, Dubai, UAE." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Country by Country Reporting (CBCR) Service in Abu Dhabi, Dubai,UAE - MS" />
        <meta property="og:description" content="MS provides country-by-country reporting services for companies which are required to report their financial information under the new transparency rules of the Abu Dhabi, Dubai, UAE." />
        <meta property="og:url" content="https://ms-ca.com/cbc-reporting" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-04-29T11:09:49+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="22 minutes" />
        <link rel="canonical" href="https://ms-ca.com/cbc-reporting" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container_Blue}>
        <Banner heading={<>CBC Reporting (OECD)</>}

          height="428" white={true} />
      </div>

      <div className={styles.MenuBar}>
        <MenuBar />
      </div>
      <Banner2 />
      <div className={styles.ashBg}>
        <Section />
      </div>
      <Section2 />
      <Section3 />
      <div className={styles.AccountingServiceWrap}>
        <Section4 />
      </div>

      <div className={styles.marginTp}>
        <Section5 service="Accounting services" />
      </div>
      <div className={styles.marginTp}>
        <Section6 categorySlug="taxes"/>
      </div>

      <div className={Hstyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default cbcr