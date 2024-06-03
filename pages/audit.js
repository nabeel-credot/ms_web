import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar"
import Banner2 from "../components/Accounting&Bookkeeping/Audit_Banner2"
import Services from "../components/Accounting&Bookkeeping/Audit_services"
import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";

function audit_services() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Top Audit Assistance Services | Annual Audit Firm in Abu Dhabi, Dubai, UAE - MS</title>
                <meta name="description" content="MS is the top audit service and auditing firm in Abu Dhabi, Dubai, UAE. We provide a wide range of auditing and consulting services to businesses and organizations." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Top Audit Assistance Services | Annual Audit Firm in Abu Dhabi, Dubai, UAE - MS" />
                <meta property="og:description" content="MS is the top audit service and auditing firm in Abu Dhabi, Dubai, UAE. We provide a wide range of auditing and consulting services to businesses and organizations." />
                <meta property="og:url" content="https://ms-ca.com/audit" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-05-27T11:02:02+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <link rel="canonical" href="https://ms-ca.com/audit" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />

            <div className={styles.banner_container_Blue}>
                <Banner heading={<>Audit Services in<br /> Abu Dhabi & Dubai (UAE)</>}
                  
                    height="428" white={true} />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Banner2 />
            <Services />
           
                <Section2 service="Audit Services" />
       
            <div className={styles.marginTp}>
                <Section3 categorySlug="accounting"/>
            </div>

            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default audit_services