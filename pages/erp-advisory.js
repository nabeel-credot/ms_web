import React from 'react'
import styles from '../styles/Advisory.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner4";
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar8"
import Banner2 from "../components/Accounting&Bookkeeping/Technology_ERP_Banner";

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Services from "../components/Accounting&Bookkeeping/Technology_ERP_service";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";


function enterprise() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ERP Advisory Experts | ERP Consulting Services in Abu Dhabi, Dubai, UAE - MS</title>
                <meta name="description" content="Team MS with our knowledgeable ERP consultants in Abu Dhabi, Dubai, UAE will assist you in choosing a provider that best meets your requirements for your future state business process." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="ERP Advisory Experts | ERP Consulting Services in Abu Dhabi, Dubai, UAE - MS" />
                <meta property="og:description" content="Team MS with our knowledgeable ERP consultants in Abu Dhabi, Dubai, UAE will assist you in choosing a provider that best meets your requirements for your future state business process." />
                <meta property="og:url" content="https://ms-ca.com/erp-advisory" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-05-27T11:02:02+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <link rel="canonical" href="https://ms-ca.com/erp-advisory" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_ERP}>
                <Banner heading="ERP Advisory"
                    parent={"TECHNOLOGY"} href="/technology"  />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Banner2 />

            {/* <div className={styles.marginTpW}> */}
                <Services />
            {/* </div> */}


            <div className={styles.marginBt+" "+styles.marginT20}>
                <Section2 service="ERP Advisory" />
            </div>


            <Section3 categorySlug="technology"/>
            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default enterprise