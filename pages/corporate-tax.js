import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar2"
import Banner2 from "../components/Accounting&Bookkeeping/CT_Banner"
import Section1 from "../components/Accounting&Bookkeeping/Corporate_section1"
import Section2 from "../components/Accounting&Bookkeeping/Corporate_section2"
import Section3 from "../components/Accounting&Bookkeeping/Corporate_section3"
import Section4 from "../components/Accounting&Bookkeeping/Corporate_section4"
import FAQs from "../components/Accounting&Bookkeeping/FAQs"
// import Section5 from "../components/Accounting&Bookkeeping/Corporate_Section5"
import Section6 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section7 from "../components/Accounting&Bookkeeping/News_LatestInsight";
function corporate_tax() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Corporate Tax Advisory Consultants in Abu Dhabi, Dubai, UAE - MS</title>
        <meta name="description" content="MS is a leading corporate tax advisory consultant in Abu Dhabi, Dubai, UAE. Our services include business setup and registration, corporate income tax filing, etc" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Corporate Tax Advisory Consultants in Abu Dhabi, Dubai, UAE - MS" />
        <meta property="og:description" content="MS is a leading corporate tax advisory consultant in Abu Dhabi, Dubai, UAE. Our services include business setup and registration, corporate income tax filing, etc" />
        <meta property="og:url" content="https://ms-ca.com/corporate-tax" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-07-21T13:21:59+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="17 minutes" />
        <link rel="canonical" href="https://ms-ca.com/corporate-tax" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container_Blue}>
        <Banner heading={<>Corporate Income TAX<br />in the UAE</>}

          height="428" white={true} detail="Looking for expert guidance on Corporate Income Tax in 
          the UAE? Our financial service provider’s offer tailored solutions to help your 
          business navigate the complexities of corporate taxation and comply with the latest
          regulations. Contact us today for assistance." />
      </div>
      <div className={styles.MenuBar}>
        <MenuBar />
      </div>
      <Banner2 />

      <Section1 />
      <div className={styles.ashBg}>
        <Section2 />
      </div>


      <Section3 />

      <div className={styles.marginTp}>
        <Section4 />
      </div>

      <div className={styles.marginTp}>
        <FAQs />
      </div>
      <div className={styles.marginTp}>
        <Section6 service="Corporate Income TAX" />
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

export default corporate_tax