import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar3"
import Section from "../components/Accounting&Bookkeeping/FDD_section"
import Download from "../components/Accounting&Bookkeeping/Download"
import Quote from "../components/Home/Quote"

function fdd() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Financial Due Diligence</title>
                <meta name="description" content="Financial Due Diligence" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container}>
                <Banner heading="Financial Due Diligence"
                    detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
                    image="/images/fddBg.png" width="632" height="412" />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Section />
 
            <div> 
                <div className={styles.downloadContainerGray}>
                    <Download title="Know More About Financial Due Diligence" action="files/file.docx" />
                </div>
             </div> 
            <div className={styles.downloadContainerWhite2}>
                <Quote image="/images/SHAFEEK.png" width="589px" height="568px"
                    details={'"We build a bespoke service for our clients. Whether they want to advance an idea, a capability, or the world at large, MS is with you every step of the way."'}
                    fontSize="32px" name="Mohammed Shafeek" desig="Founder & CEO, MS" />
            </div>
            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default fdd