import React from 'react'
import Head from 'next/head'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner3"
import Section from "../components/Accounting&Bookkeeping/TeamMS_Banner"
import Sub1 from "../components/Accounting&Bookkeeping/Team_msian_Sub1"
import Sub2 from "../components/Accounting&Bookkeeping/Team_msian_Sub2"
// import Sub2 from "../components/Accounting&Bookkeeping/Team_MS2"
import Sub3 from "../components/Accounting&Bookkeeping/Team_msian_Sub3"

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";
import Footer from "../components/Footer"
function team_msian() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Team MS - MS</title>
                <meta name="description" content="Team MS - MS" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Team MS - MS" />
                <meta property="og:url" content="https://ms-ca.com/ms" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-04-29T10:49:28+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2020/04/linkedin.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="15 minutes" />
                <link rel="canonical" href="https://ms-ca.com/ms" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div className={styles.banner_container_Blue}>
                <Banner heading="Building Entrepreneur,
                                Transforming business"
                    detail="Being holistic and unique, we bring customized solutions and the best of MS to each client."
                    image="/images/award_winning_team.png" alt="" width="328" height="298" widthMob="156" heightMob="142" />
            </div>
            <Section templateTitle="teamMsianBookAConsulatation" />
            <Sub1 />
            {/* <Sub2 /> */}
            <Sub3 />
            <div className={styles.marginTp20M}>
                <Section2 />
            </div>
            <div className={styles.marginTp}>
                <Section3 categorySlug="about-us" />
            </div>
            <div className={Hstyles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default team_msian