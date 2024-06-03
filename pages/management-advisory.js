import React from 'react'
import styles from '../styles/Advisory.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2";
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar7"
import Banner2 from "../components/Accounting&Bookkeeping/MA2_Banner";

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Services from "../components/Accounting&Bookkeeping/MA2_services";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";


function enterprise() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Management Advisory Specialist Services in Abu Dhabi, Dubai, UAE - MS</title>
                <meta name="description" content="MS offers premium Management Advisory Specialist Services in Abu Dhabi, Dubai, UAE. Let us assist you in strategizing & executing effective management solutions for your company." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Management Advisory Specialist Services in Abu Dhabi, Dubai, UAE - MS"/>
                <meta property="og:description" content="MS offers premium Management Advisory Specialist Services in Abu Dhabi, Dubai, UAE. Let us assist you in strategizing & executing effective management solutions for your company." />
                <meta property="og:url" content="https://ms-ca.com/management-advisory" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-04-29T10:55:31+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <link rel="canonical" href="https://ms-ca.com/management-advisory" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_MA2}>
                <Banner heading="Management Advisory"
                detail="We offer comprehensive Management Advisory services to 
                help businesses in the UAE optimize their operations, reduce costs, and achieve 
                their strategic goals. Our team of experts provides customized solutions to meet the
                unique needs of each client, ensuring long-term success and growth."
                />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>

            <Banner2 />
            <div className={styles.marginTp20}>
                <Section2 service="Management Advisory" />
            </div>

            <Services />

            <Section3 categorySlug="advisory"/>

            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default enterprise