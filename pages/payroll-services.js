import React from 'react'
import Head from 'next/head'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar"
import Banner2 from "../components/Accounting&Bookkeeping/Payroll_Banner2"
import Payroll_service from "../components/Accounting&Bookkeeping/Payroll_service"
import Payroll_service2 from "../components/Accounting&Bookkeeping/Payroll_services"
import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";
import VideoSection from "../components/VideoGallery"

import gqlRequest from "../utilities/graphql"
function payroll_services(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Payroll Services in Abu Dhabi, Dubai, UAE | Expert Service - MS</title>
                <meta name="description" content="MS is your ultimate solution for top-notch payroll services in Abu Dhabi, Dubai, UAE. Trust our experienced team to handle all your payroll needs and free up your time to focus on growing your business." />
                <link rel="canonical" href="https://ms-ca.com/payroll-services" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Payroll Services in Abu Dhabi, Dubai, UAE | Expert Service - MS" />
                <meta property="og:description" content="MS is your ultimate solution for top-notch payroll services in Abu Dhabi, Dubai, UAE. Trust our experienced team to handle all your payroll needs and free up your time to focus on growing your business." />
                <meta property="og:url" content="https://ms-ca.com/payroll-services" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-04-29T10:59:53+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="8 minutes" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />

            <div className={styles.banner_container_Blue}>
                <Banner heading={<>Payroll Services in<br /> Abu Dhabi & Dubai (UAE)</>}

                    height="428" white={true} pay={true} />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Banner2 />
            <div className={styles.AccountingServiceWrap}>
                <Payroll_service />
            </div>
            <Payroll_service2 />

            <div className={styles.marginTp}>
                <Section2 service="Payroll Services" />
            </div>

           

            <div className={styles.marginTp}>
                <Section3 categorySlug="accounting" />
            </div>

            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div >
    )
}

export default payroll_services