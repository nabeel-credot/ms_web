import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import Section from "../components/Accounting&Bookkeeping/Advisory_section"
import Services from "../components/Accounting&Bookkeeping/Advisory_services"
import Services1 from "../components/Accounting&Bookkeeping/Advisory_services_sec"
import Awards from "../components/Home/Awards"
function advisory() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Advisory - MS</title>
        <meta name="description" content="Advisory - MS" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container}>
        <Banner heading="MS Advisory Board"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
          image="/images/advisoryBg.png" width="632" height="412" />
      </div>

      <div className={styles.AccountingServiceWrap+" "+styles.marginTmob}>
        <Section />
      </div>
      <Services1 />
      <Services />
      <div className={Hstyles.award_container}>
        <Awards />
      </div>
      <div className={Hstyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default advisory