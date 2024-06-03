import React from 'react'
import Head from 'next/head'
import Navbar from "../components/Navbar"
import styles from '../styles/TAS.module.css'
import Section from "../components/Accounting&Bookkeeping/T_Due_deligence"
import Section2 from "../components/Accounting&Bookkeeping/T_PagesMob"
import Footer from "../components/Footer"
function overview() {
    return (
        <div className={styles.container}>
            <Head>
        <title>MS</title>
        <meta name="description" content="MS" /> 
         <link rel="icon" href="/favicon.png" />
      </Head>
            <Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container+" "+styles.webOnly}>
                <Section/>
            </div>
            <div className={styles.banner_container+" "+styles.mobOnly}>
                <Section2/>
            </div>
            {/* <Footer backgroundClr="#F5F5F5"/> */}
            <div className={styles.footer}>
      <Footer  />
      </div>
        </div>
    )
}

export default overview