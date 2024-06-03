import React ,{useEffect} from 'react'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
import Head from 'next/head'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import TBanner from "../components/Accounting&Bookkeeping/ThankyouBanner"

import Section2 from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import Section3 from "../components/Accounting&Bookkeeping/News_LatestInsight";

import Script from 'next/script';
import { useRouter } from 'next/router'

function ThankYou() {
 // const router = useRouter();
  // useEffect(() => {
  //   alert(router.query.name); // Alerts 'Someone'
  // }, [router.query]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Thankyou - MS</title>
        <meta name="description" content="Thankyou - MS" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Thankyou - MS" />
        <meta property="og:url" content="https://ms-ca.com/thankyou-adgm" />
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
        <link rel="canonical" href="https://ms-ca.com/thankyou-adgm" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />

      <div className={styles.banner_container_Thanku}>
        <Banner heading="Thank you for your enquiry"

          height="428" white={true} />
      </div>
      <TBanner phoneNo={"+971 56 399 7841"}/>
      {/* <Banner2 /> 

      <Section2  />

      <div className={styles.marginTp}>
        <Section3 categorySlug="about-us"/>
      </div> */}

      <div className={styles.marginTp}>
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

export default ThankYou