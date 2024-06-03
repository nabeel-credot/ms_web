import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Banner from "../components/Accounting&Bookkeeping/Bookkeeping_Banner"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar"

import Banner2 from "../components/Accounting&Bookkeeping/Bookkeeping_Banner2"
import BookKeepingService from "../components/Accounting&Bookkeeping/Bookkeeping_service_blue"
import OnlineBookingService from "../components/Accounting&Bookkeeping/OnlineBookingService"
import StartConversation from "../components/Accounting&Bookkeeping/StartConversation"

import Awards from "../components/Home/Awards"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function accounting_service() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bookkeeping Services</title>
        <meta name="description" content="Bookkeeping Services-MS" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container}>
        <Banner />
      </div>
      <div className={styles.MenuBar}>
        <MenuBar />
      </div>
      <Banner2 />
      <div className={styles.AccountingServiceWrap}>
        <BookKeepingService />
      </div>

      <OnlineBookingService />
      <div className={styles.StartConversation_container} >
        <StartConversation />
      </div>

      <div className={Hstyles.award_container}>
        <Awards  />
      </div>
      <div className={Hstyles.footer}>
        <Footer />
      </div>

    </div>


  )
}

export default accounting_service