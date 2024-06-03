import React from 'react'
import Head from 'next/head'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import Section from "../components/Accounting&Bookkeeping/Contact_section copy"

function contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - MS</title>
        <meta name="description" content="Contact - MS" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Contact - MS" />
        <meta property="og:url" content="https://ms-ca.com/contact" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-06-30T09:10:43+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="16 minutes" />
        <link rel="canonical" href="https://ms-ca.com/contact" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container_award}>
        <Banner heading="We are here to assist you."
          detail={<>Reach out to us for all your queries. Assuring you a best solution from the most energetic team at MS.</>}
          height="428" white={true} pay={true} />
      </div>
      <div className={styles.contactSection}>
        <Section />
      </div>


      <div className={Hstyles.footer}>
        <Footer />
      </div>

    </div>
  )
}

export default contact