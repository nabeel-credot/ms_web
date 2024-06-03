import React, { useEffect, useState } from 'react'
import styles from '../styles/Advisory.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner4";
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar4"
import Banner2 from "../components/Accounting&Bookkeeping/RA_IA_Banner";
import Banner3 from "../components/Accounting&Bookkeeping/RA_IA_Banner2";

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Services from "../components/Accounting&Bookkeeping/RA_IA_service";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";

import BookCall from '../components/Popup/Popup';
function IA() {

    const [popup,setPopup]=useState(false)

    const handleCallback = (popup)=>{
        setPopup(popup)
      
    }

    console.log(popup)
    return (
        <div className={popup?styles.lightContainer:styles.container}>
            <Head>
                <title>Internal Audit in Abu Dhabi, UAE - MS</title>
                <meta name="description" content="Internal Audit in Abu Dhabi, UAE - MS" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Internal Audit in Abu Dhabi, UAE - MS"/>
                <meta property="og:description" content="Internal Audit in Abu Dhabi, UAE - MS" />
                <meta property="og:url" content="https://ms-ca.com/internal-audit" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-04-29T10:55:31+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <link rel="canonical" href="https://ms-ca.com/internal-audit" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_IA}>
                <Banner heading="Internal Audit"
                  
                    parent={"Risk Advisory"} href="/risk-advisory" 
                    detail="We offer Internal Audit services to financial service 
                    providers in the UAE. Our team of experts ensures compliance and identifies 
                    opportunities for improvement to optimize business processes." />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Banner2 />
            <Banner3 parentCallback={handleCallback} />
            <Services />
            <div className={styles.marginBt+" "+styles.marginT20}>
                <Section2 service="Internal Audit" />
            </div>


            <Section3 />

    
            <div className={Hstyles.footer}>
                <Footer />
            </div>

            {popup && <BookCall onClick={()=>setPopup(false)} />}         
        </div>

        
    )
}

export default IA