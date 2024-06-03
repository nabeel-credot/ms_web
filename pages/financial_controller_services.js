import React from 'react'
import styles from '../styles/Accounting.module.css'

import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import Section1 from "../components/Accounting&Bookkeeping/FCS_section"
import Section2 from "../components/Accounting&Bookkeeping/FCS_section2"
import Section3 from "../components/Accounting&Bookkeeping/FCS_Section3"
import Section4 from "../components/Accounting&Bookkeeping/FCS_section4"
import Quote from "../components/Home/Quote"
import Enterprise_services from '../components/Accounting&Bookkeeping/Enterprice_services2'
import Download from "../components/Accounting&Bookkeeping/Download"
import Awards from "../components/Home/Awards"

function business_startup() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Financial Controller Services - MS</title>
        <meta name="description" content="Financial Controller Services - MS" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container+" "+styles.whiteBgDown}>
        <Banner heading={<>Financial Controller Services </>}
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
          image="/images/fcsBg.png" width="632" height="412" />
      </div>

      <div className={styles.yellowBgWrap}>
        <Section1 />
      </div>
      <div className={styles.AccountingServiceWrap}>
        <Section2 />
      </div>
      <Section3 />
      <div className={styles.redBgWrap}>
        <Section4 />
      </div>

      <div className={styles.paddingBgMob1}>
        <Quote image="/images/SHAFEEK.png" width="589px" height="568px"
          details={'"MSATC’s foundation is laid on strong values. MSians are driven by unbreakable passion, and we chase is vision that would make a positive impact in the world. For us, all of our stakeholders are important. We are committed to delivering value to each of them, leading towards the success of our companies, communities and the country."'}
          fontSize="32px" name="Mohammed Shafeek" desig="Founder & CEO, MS" />
      </div>
      <Enterprise_services />

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