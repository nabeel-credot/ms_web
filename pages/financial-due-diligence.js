import React, { useState } from 'react'
import styles from '../styles/Advisory.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner4";
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar5"
import Banner2 from "../components/Accounting&Bookkeeping/TA_FD_Banner";
import Banner3 from "../components/Accounting&Bookkeeping/TA_FD_Banner2";

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Services from "../components/Accounting&Bookkeeping/TA_FD_service";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";

import BookCall from '../components/Popup/Popup';
function RM() {
    const [popup, setPopup] = useState(false)

    const handleCallback = (popup) => {
        setPopup(popup)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Financial Due Diligence (FDD) - MS</title>
                <meta name="description" content="When it comes to finding the best financial due diligence firms, look no further than MSATC. We offer comprehensive M&amp;A financial due diligence services that will help you make the right decision for your business. Contact us today to learn more!" />
  
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Financial Due Diligence (FDD) - MS" />
                <meta property="og:description" content="When it comes to finding the best financial due diligence firms, look no further than MSATC. We offer comprehensive M&amp;A financial due diligence services that will help you make the right decision for your business. Contact us today to learn more!" />
                <meta property="og:url" content="https://ms-ca.com/financial-due-diligence" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-07-21T13:19:16+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="8 minutes" />
                <link rel="canonical" href="https://ms-ca.com/financial-due-diligence" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_FDD}>
                <Banner heading="Financial Due Diligence"
                    parent={"TRANSACTION ADVISORY"} href="/transaction-advisory"
                    detail="Our financial due diligence service in UAE provides a 
                    comprehensive analysis of financial data to identify risks and opportunities. Our 
                    team of experts helps clients make informed investment decisions and mitigate 
                    potential risks." />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Banner2 />
            <Banner3 parentCallback={handleCallback} />
            <Services />
            <div className={styles.marginBt + " " + styles.marginT20}>
                <Section2 service="Financial Due Diligence" />
            </div>


            <Section3 />

            <div className={Hstyles.footer}>
                <Footer />
            </div>

            {popup && <BookCall onClick={() => setPopup(false)} />}
        </div>
    )
}

export default RM