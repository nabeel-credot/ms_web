import React from 'react'
import Head from 'next/head'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/ADGM_banner";
import SectionN from "../components/Accounting&Bookkeeping/ADGM_newSection";
import Section2 from "../components/Accounting&Bookkeeping/ADGM_section2";
import Section3 from "../components/Accounting&Bookkeeping/ADGM_section3";
import Section4 from "../components/Accounting&Bookkeeping/ADGM_section4";
import Service from "../components/Accounting&Bookkeeping/ADGM_service";
import FAQ from "../components/Accounting&Bookkeeping/ADGM_FAQ";
import Download from "../components/Accounting&Bookkeeping/Download"
import Quote from "../components/Home/Quote"

function adgm() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ADGM</title>
                <meta name="description" content="ADGM-MS" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_adgm}>
                <Banner />
            </div>
            <SectionN />
            {/* <Section /> */}
            <Section2 />
            <div className={styles.redBgWrap}>
                <Section3 />
            </div>


            <div className={styles.ashBgWrap}>
                <Section4 />
            </div>
            <div className={styles.blueBgWrap}>
                <Service />
            </div>

            <FAQ />
            <div className={styles.downloadContainerWhiteMob}>
                <div className={styles.downloadContainerGray}>
                    <Download title="Know More About ADGM" action="files/file.docx" />
                </div>
            </div>
            <div className={styles.downloadContainerWhite}>
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

export default adgm