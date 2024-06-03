import React, { useState } from 'react'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import Banner2 from "../components/Accounting&Bookkeeping/Work_Banner"
import CV_upload from '../components/Popup_cv/Popup';

import Section4 from "../components/Accounting&Bookkeeping/Work_with_us_Section"

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";

import gqlRequest from "../utilities/graphql"

export default function MyPage() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Careers - MS</title>
        <meta name="description" content="Careers - MS" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Careers - MS" />
        <meta property="og:url" content="https://ms-ca.com/careers" />
        <meta property="og:site_name" content="MS" />
        <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
        <meta property="article:modified_time" content="2022-04-29T10:52:29+00:00" />
        <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="21 minutes" />
        <link rel="canonical" href="https://ms-ca.com/careers" />
        <link rel="icon" href="/favicon.png" />
        <script defer src="https://app.pyjamahr.com/asset-objects/careers-page-integration.js"></script>
      </Head>
      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />

      <div className={styles.banner_container_Work}>
        <Banner heading="Careers"

          height="428" white={true} />
      </div>
      <div className={styles.topWhiteBg}>
        <Section4 />
      </div>


      <div className={styles.marginBt}>
        <Section2 />
      </div>


      <div>
        <Section3 categorySlug="about-us" />
      </div>
      <div className={Hstyles.footer}>
        <Footer />
      </div>

    </div>
  );
}