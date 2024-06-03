import React from 'react'
import Head from 'next/head'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import Section from "../components/Accounting&Bookkeeping/Contact_sectionN"
import Section2 from "../components/Accounting&Bookkeeping/Contact_whyUs"
function contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - MS</title>
        <meta name="description" content="Contact - MS" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container_contact}>
        <Banner heading="We are here to assist you."
          detail="Reach out to us for all your queries. Assuring you a best solution from the most energetic team at MS."
          height="428" white={true} />
      </div>
      {/* <div className={styles.contactSection}> */}
      <Section />
      {/* </div> */}
      <div className={styles.yellowBgWrap}>
        <Section2 />
      </div>

        <div className={Hstyles.footer}>
          <Footer />
      
      </div>

    </div>
  )
}

export default contact