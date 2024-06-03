import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import Section1 from "../components/Accounting&Bookkeeping/MA_Section1"
import Section2 from "../components/Accounting&Bookkeeping/Lets_talk"
import Section3 from "../components/Accounting&Bookkeeping/MA_Section2"
import Quote from "../components/Home/Quote"
import Enterprise_services from '../components/Accounting&Bookkeeping/Enterprice_services2'

import Awards from "../components/Home/Awards"

function business_startup() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Management Accounting - MS</title>
        <meta name="description" content="Management Accounting - MS" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container}>
        <Banner heading={<>Management Accounting</>}
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
          image="/images/maBg.png" width="632" height="412" />
      </div>
      <Section1 />
      <div className={styles.AccountingServiceWrap}>
        <Section2 />
      </div>
      <Section3 />
      <Quote image="/images/SHAFEEK.png" width="589px" height="568px"
        details={'"MSATC’s foundation is laid on strong values. MSians are driven by unbreakable passion, and we chase is vision that would make a positive impact in the world. For us, all of our stakeholders are important. We are committed to delivering value to each of them, leading towards the success of our companies, communities and the country."'}
        fontSize="32px" name="Mohammed Shafeek" desig="Founder & CEO, MS" />
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