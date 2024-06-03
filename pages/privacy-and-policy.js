import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import Hstyles from "../styles/Home.module.css";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer copy";
// import Banner from "../components/Accounting&Bookkeeping/ADGM_bannerTop";
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2new";

import BookCall from "../components/Popup/Popup";

import { useRouter } from "next/router";

import gqlRequest from "../utilities/graphql";
import Privacy_policy from "../components/Accounting&Bookkeeping/Privacy_policy_para";
import Privacy_points from "../components/Accounting&Bookkeeping/Privacy_policy_contents"


function ADVISORY() {
    const [appoint, setAppoint] = useState(false);
    const [popup, setPopup] = useState(false);  
  return (
    <div className={styles.container}>
      <Head>
        <title>
        Expert Business Advisory in Abu Dhabi, Dubai, UAE | Sell Side Advisory Services | MS	
        </title>
        <meta
          name="description"
          content="Maximize your business potential with expert advisory in Abu Dhabi, Dubai, UAE. MS provides sell-side services for optimal outcomes.	"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Expert Business Advisory in Abu Dhabi, Dubai, UAE | Sell Side Advisory Services | MS	"
        />
        <meta
          property="og:description"
          content="Maximize your business potential with expert advisory in Abu Dhabi, Dubai, UAE. MS provides sell-side services for optimal outcomes.	"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/sell-side-advisory"
        />
        <meta property="og:site_name" content="MS" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/MSGroupUAE/"
        />
        <meta
          property="article:modified_time"
          content="2022-09-14T07:30:52+00:00"
        />
        <meta
          property="og:image"
          content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png"
        />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="19 minutes" />
        <link
          rel="canonical"
          href="https://ms-ca.com/mergers-and-aquisition"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <Navbar
      bgcolor="none"
        color="#FFFFFF"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
      /> */}
        <div >
       <Privacy_policy/>
        </div>
        <div className={styles.privacyContainer}>
        <Privacy_points/>
        </div>
        <div className={Hstyles.footer}>
          <Footer />
      
      </div>
    </div>
  );
}



 

export default ADVISORY;
