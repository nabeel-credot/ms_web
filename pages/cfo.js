import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'

import Head from 'next/head'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar3"
import Section1 from "../components/Accounting&Bookkeeping/CFO_section1"
import Section2 from "../components/Accounting&Bookkeeping/CFO_section2"
import Section3 from "../components/Accounting&Bookkeeping/CFO_section3"
import Download from "../components/Accounting&Bookkeeping/Download"

function cfo() {
    return (
        <div className={styles.container}>
            <Head>
                <title>CFO SERVICES - MS</title>
                <meta name="description" content="CFO SERVICES - MS" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" menuStyle1={styles.menuTogglerY} menuStyle2={styles.menuTogglerNewY} />
            <div className={styles.banner_container}>
                <Banner heading=" CFO SERVICES"
                    detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
                    image="/images/cfoBg.png" width="632" height="412" />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Section1 />
           
            <div className={styles.AccountingServiceWrap}>
            <Section2 />
            </div>
            <div className={styles.ashBg}>
            <Section3 />
            </div>
            
            <div className={styles.whiteBg2 }>
                <div className={styles.downloadContainerGray}>
                    <Download title="Know More About ADGM" action="files/file.docx" />
                </div>
            </div>

            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default cfo