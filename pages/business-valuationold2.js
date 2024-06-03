import React, { useState } from 'react'
import styles from '../styles/Advisory.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner4";
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar5"
import Banner2 from "../components/Accounting&Bookkeeping/TA_BV_Banner";

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Services from "../components/Accounting&Bookkeeping/TA_BV_service";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";

function RM() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Business Valuation - MS</title>
                <meta name="description" content="Business Valuation - MS" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Business Valuation - MS" />
                <meta property="og:url" content="https://ms-ca.com/business-valuation" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-04-29T11:40:16+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="17 minutes" />
                <link rel="canonical" href="https://ms-ca.com/business-valuation" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_BV}>
                <Banner heading="Business Valuation"

                    parent={"TRANSACTION ADVISORY"} href="/transaction-advisory" 
                    detail="Our financial experts provide accurate and reliable business
                    valuation services to help you make informed decisions. Trust us to deliver 
                    customized solutions tailored to your specific needs in UAE."/>
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Banner2 />

            <Services />
            <div className={styles.marginBt + " " + styles.marginT20}>
                <Section2 service="Business Valuation" />
            </div>


            <Section3 />


            <div className={Hstyles.footer}>
                <Footer />
            </div>


        </div>
    )
}

export default RM