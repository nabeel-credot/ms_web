import React from 'react'
import Head from 'next/head'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar2"
import Banner2 from "../components/Accounting&Bookkeeping/vat_Banner"
import FAQ from "../components/Accounting&Bookkeeping/vat_FAQs"

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";
import Footer from "../components/Footer"

function vat() {
    return (
        <div className={styles.container}>
            <Head>
                <title>VAT Consultancy Services in Abu Dhabi, Dubai, UAE | VAT Consultants - MS</title>
                <meta name="description" content="Get expert VAT consultancy services in Abu Dhabi, Dubai, UAE with MS. Our skilled team of VAT consultants can assist with registration, return filing and more. Trust the best in the business." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="VAT Consultancy Services in Abu Dhabi, Dubai, UAE | VAT Consultants - MS" />
                <meta property="og:description" content="Get expert VAT consultancy services in Abu Dhabi, Dubai, UAE with MS. Our skilled team of VAT consultants can assist with registration, return filing and more. Trust the best in the business." />
                <meta property="og:url" content="https://ms-ca.com/vat-consultant" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-04-29T11:01:07+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="14 minutes" />
                <link rel="canonical" href="https://ms-ca.com/vat-consultant" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_Blue}>
                <Banner heading={<>VAT Consultant in<br /> Abu Dhabi, Dubai-UAE</>}

                    height="428" white={true} />
            </div>

            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Banner2 />

            <FAQ />
        
            <div className={styles.marginTp}>
                <Section2 service="VAT Consultant" />
            </div>
            <div className={styles.marginTp}>
                <Section3 categorySlug="taxes" />
            </div>
            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default vat