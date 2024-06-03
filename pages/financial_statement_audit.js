import React from 'react'
import styles from '../styles/Accounting.module.css'
import Head from 'next/head'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import Section1 from "../components/Accounting&Bookkeeping/FSA_section1"
import Section2 from "../components/Accounting&Bookkeeping/Lets_talk"
import Section3 from "../components/Accounting&Bookkeeping/FSA_Section2"
import Quote from "../components/Home/Quote"
import Services from '../components/Accounting&Bookkeeping/FSA_services'

import Awards from "../components/Home/Awards"

function business_startup() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Financial Statement Audits - MS</title>
        <meta name="description" content=">Financial Statement Audits - MS" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container}>
        <Banner heading={<>Financial Statement Audits</>}
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
          image="/images/vat_tBg.png" width="632" height="412" />
      </div>
      <Section1 />
      <div className={styles.AccountingServiceWrap}>
        <Section2 />
      </div>
      <Section3 />
      <Services />
      <div className={styles.downloadContainerWhite2}>
        <Quote image="/images/SHAFEEK.png" width="589px" height="568px"
          details={'"We build a bespoke service for our clients. Whether they want to advance an idea, a capability, or the world at large, MS is with you every step of the way."'}
          fontSize="32px" name="Mohammed Shafeek" desig="Founder & CEO, MS" />
      </div>
      <div className={styles.award_container}>
        <Awards />
      </div>
      <div className={Hstyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default business_startup