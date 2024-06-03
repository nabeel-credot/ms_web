import React from 'react'
import Head from 'next/head'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar2"
import Banner2 from "../components/Accounting&Bookkeeping/usExpat_Banner"
import Service from "../components/Accounting&Bookkeeping/US_service"
import FAQ from "../components/Accounting&Bookkeeping/usExpat_FAQs"

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";

import LearnMoreMS from "../components/Accounting&Bookkeeping/LearnMoreMS"

import Footer from "../components/Footer"
function usExpat() {
  return (
    <div className={styles.container}>
      <Head>
        <title>US Expat Tax Services | Tax Consultant / Specialist Abu Dhabi, Dubai, UAE - MS</title>
        <meta name="description" content="Tax consultant or specialist in Abu Dhabi, Dubai, UAE to help with your US expat taxes? Look no further than MS. We have the expertise to file your taxes and get the most out of your return." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="US Expat Tax Services | Tax Consultant / Specialist Abu Dhabi, Dubai, UAE - MS" />
        <meta property="og:description" content="Tax consultant or specialist in Abu Dhabi, Dubai, UAE to help with your US expat taxes? Look no further than MS. We have the expertise to file your taxes and get the most out of your return." />
        <meta property="og:url" content="https://ms-ca.com/us-expat-tax-consultant" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-04-29T11:12:25+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="12 minutes" />
        <link rel="canonical" href="https://ms-ca.com/us-expat-tax-consultant" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container_Blue}>
        <Banner heading={<>US Expat Tax Consultant<br /> in UAE</>}

          height="428" white={true} />
      </div>

      <div className={styles.MenuBar}>
        <MenuBar />
      </div>
      <Banner2 />
      <Service />
      <div className={styles.marginTp}>
        <FAQ />
      </div>

      {/* <LearnMoreMS /> */}
      <div className={styles.marginTp}>
        <Section2 service="US Expat Tax" />
      </div>
      <div className={styles.marginTp}>
        <Section3 categorySlug="taxes"/>
      </div>

      <div className={Hstyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default usExpat