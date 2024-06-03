import React from 'react'
import Head from 'next/head'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import Section from "../components/Accounting&Bookkeeping/Vat_advisory_Section"
import Section2 from "../components/Accounting&Bookkeeping/Vat_Advisory_section2"
import Quote from "../components/Home/Quote"
import Service from "../components/Accounting&Bookkeeping/Advisory_services_sec"
import Awards from "../components/Home/Awards"
import Footer from "../components/Footer"
function vat_advisory_and_compliance() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vat Advisory & Compliance Support - MS</title>
        <meta name="description" content="Vat Advisory & Compliance Support - MS" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container}>
        <Banner heading={<>Vat Advisory & Compliance Support</>}
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
          image="/images/vatAdvisoryBg.png" width="631" height="439" />
      </div>
      <div className={styles.redBgWrap + " " + styles.marginTmob}>
        <Section />
      </div>
      <div className={styles.AccountingServiceWrap}>
        <Section2 />
      </div>
      <div className={styles.paddingBgMob1}>
        <Quote image="/images/SHAFEEK.png" width="589px" height="568px"
          details={'"We build a bespoke service for our clients. Whether they want to advance an idea, a capability, or the world at large, MS is with you every step of the way."'}
          fontSize="32px" name="Mohammed Shafeek" desig="Project Lead, MS" />
      </div>
      <Service />
      <div className={Hstyles.award_container}>
        <Awards />
      </div>
      <div className={Hstyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default vat_advisory_and_compliance