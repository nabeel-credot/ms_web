import React from 'react'
import Head from 'next/head'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/OtherServices_banner";
import Services from "../components/Accounting&Bookkeeping/Other_Services_section"
import Footer from "../components/Footer"

function other_services() {
    return (
        <div className={styles.container}>
            <Head>
        <title>MS</title>
        <meta name="description" content="MS" /> 
         <link rel="icon" href="/favicon.png" />
      </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_OtherServices}>
                <Banner />
            </div>
            <Services/>
            <div className={Hstyles.footer}>
      <Footer  />
      </div>
        </div>
    )
}

export default other_services