import React from 'react'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/Common_BannerNews"

import Section from "../components/VideoGallery"
import Footer from "../components/Footer"
function news_and_blogs() {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>News & Blogs - MS</title>
                <meta name="description" content="News & Blogs - MS" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_contact}>
                <Banner />
            </div>
           
            <div className={styles.whiteBg}>
                {/* <div className={styles.blueBgWrap}> */}
                    <Section />
                {/* </div> */}
            </div>


            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default news_and_blogs