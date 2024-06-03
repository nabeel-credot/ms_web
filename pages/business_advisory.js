import React from 'react'
import styles from '../styles/Accounting.module.css'
import Hstyles from '../styles/Home.module.css'

import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner"
import Section1 from "../components/Accounting&Bookkeeping/Business_advisory_section"
import Section2 from "../components/Accounting&Bookkeeping/Business_advisory_section2"
import Services from "../components/Accounting&Bookkeeping/Business_Advisory_services"
import FAQ from "../components/Accounting&Bookkeeping/Business_FAQ"
import Advisory from "../components/Accounting&Bookkeeping/Business_Advisory_process"
import Awards from "../components/Home/Awards"
function how_can_ms_help_my_business() {
    return (
        <div className={styles.container}>
            <Head>
                <title>MS</title>
                <meta name="description" content="MS" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="black" hoverClr="#D4AE31" img1="/images/downArrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container}>
                <Banner heading={<>Business Advisory<br /> Services – UAE</>}
                    detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy"
                    image="/images/corporateBg2.png" width="631" height="439" />
            </div>
            <div className={styles.redBgWrap + " " + styles.marginTmob}>
                <Section1 />
            </div>
            <Section2 />
            <div className={styles.AccountingServiceWrap}>
                <Services />
            </div>

            <FAQ />
            <Advisory />
            <div className={Hstyles.award_container}>
                <Awards />
            </div>
            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default how_can_ms_help_my_business