import React from 'react'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner3 from "../components/Accounting&Bookkeeping/Common_Banner3"
//import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import SectionNew from "../components/Accounting&Bookkeeping/Awards_section_new"
import Section from "../components/Accounting&Bookkeeping/Awards_section"

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";
function awards() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Awards - MSATC - MS</title>
        <meta name="description" content="Our Awards - MSATC - MS" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Our Awards - MSATC - MS" />
        <meta property="og:url" content="https://ms-ca.com/our-awards" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-04-29T10:50:59+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2019/12/Layer-5.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="21 minutes" />
        <link rel="canonical" href="https://ms-ca.com/our-awards" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
      <div className={styles.banner_container_Blue}>
       <Banner3 heading={<>Recognition & Achievements</>}
          detail="Awards are seen by us as professional validation of the usability and aesthetic excellence that result from months of diligent work and tight client involvement. Without our clients' insights and passion for creative design, we couldn't have succeeded."
                    image="/images/award_winning_team.png" alt="" width="328" height="298" widthMob="156" heightMob="142" />
        {/* <Banner heading={<>Recognition & Achievements</>}
          detail="Awards are seen by us as professional validation of the usability and aesthetic excellence that result from months of diligent work and tight client involvement. Without our clients' insights and passion for creative design, we couldn't have succeeded."
          white={true} /> */}
      </div>
      <SectionNew />
      <Section />

      <div className={styles.marginTp}>
        <Section2  />
      </div>
      <div className={styles.marginTp}>
        <Section3 categorySlug="about-us"/>
      </div>
      <div className={Hstyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default awards