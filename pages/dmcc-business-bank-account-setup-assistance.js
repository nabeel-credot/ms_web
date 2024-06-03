import React from 'react'
import styles from '../styles/Advisory.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner4";
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar11"
import Banner2 from "../components/Accounting&Bookkeeping/DMCC_BO_Banner";

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
// import Services from "../components/Accounting&Bookkeeping/ADGM_IA_service";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";


function enterprise() {
    return (
        <div className={styles.container}>
         <Head>
                <title>Bank Account Opening Assistance in Abu Dhabi, Dubai, UAE | Corporate Accounts - MS</title>
                <meta name="description" content="MS is the best bank account opening assistance provider in Abu Dhabi, Dubai, UAE. We provide all types of services related to bank account opening and will assist throughout." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Bank Account Opening Assistance in Abu Dhabi, Dubai, UAE | Corporate Accounts - MS" />
                <meta property="og:description" content="MS is the best bank account opening assistance provider in Abu Dhabi, Dubai, UAE. We provide all types of services related to bank account opening and will assist throughout." />
                <meta property="og:url" content="https://ms-ca.com/dmcc_business_bank_account_setup_assistance" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-05-27T11:02:02+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <link rel="canonical" href="https://ms-ca.com/dmcc_business_bank_account_setup_assistance" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_dmcc2}>
                <Banner heading={<>DMCC Business Bank <br/>Account Setup Assistance</>}
                
                    parent={"DUBAI MULTI COMMODITIES CENTRE (DMCC)"}  href="/dubai-multi-commodities-centre" />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Banner2 />
          
            {/* <Services /> */}
            <div className={styles.marginBt+" "+styles.marginT20}>
                <Section2 service="DMCC Business Bank Account Setup Assistance" />
            </div>


            <Section3 categorySlug="adgm" />
            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default enterprise