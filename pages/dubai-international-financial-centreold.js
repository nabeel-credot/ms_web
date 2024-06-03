import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import Hstyles from "../styles/Home.module.css";
//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Banner from "../components/Accounting&Bookkeeping/ADGM_bannerTop";
// import Banner from "../components/Accounting&Bookkeeping/Common_Banner_Lengthy";
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar11";
import Banner2 from "../components/Accounting&Bookkeeping/DIFC_bannerold";
import SectionN from "../components/Accounting&Bookkeeping/DIFC_newSection";
import Banner3 from "../components/Accounting&Bookkeeping/DIFC_Banner2";
// import PSection from "../components/Accounting&Bookkeeping/ADGM_process"
import Process from "../components/Accounting&Bookkeeping/DMCC_Process";
import Approach from "../components/Accounting&Bookkeeping/DMCC_Approach";

import License from "../components/Accounting&Bookkeeping/DIFC_license";
import PDF from "../components/Accounting&Bookkeeping/DIFC_pdf"
import FAQ from "../components/Accounting&Bookkeeping/DMCC_FAQ";
import DIFCservices from "../components/Accounting&Bookkeeping/DIFC_services"
import Talk from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import News from "../components/Accounting&Bookkeeping/News_LatestInsight";
import KeyPoints from "../components/Accounting&Bookkeeping/DIFC_keypoints";
import BookCall from "../components/Popup/Popup";
import Services from "../components/Accounting&Bookkeeping/DMCC_servicess";
import WhyDIFC from "../components/Accounting&Bookkeeping/DIFC_why";
import VideoSection from "../components/VideoGallery";
import gqlRequest from "../utilities/graphql";
import Image from "next/image";
import Link from "next/link";
import useRouter from "next/router";
function ADGM(props) {
  const [popup, setPopup] = useState(false);

  const [initialpopup, setInitialPopup] = useState(true);

  const handleClick = (popup) => {
    setPopup(popup);
  };

  const closepopup = () => {
    setInitialPopup(false);
  };
  return (
    <div className={styles.container}>
     
      <Head>
        <title>
          MS Chartered Accountants | DUBAI INTERNATIONAL FINANCIAL CENTRE - MS
        </title>
        <meta name="description" content="DUBAI INTERNATIONAL FINANCIAL CENTRE" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="MS Chartered Accountants | DUBAI INTERNATIONAL FINANCIAL CENTRE - MS"
        />
        <meta
          property="og:description"
          content="DUBAI INTERNATIONAL FINANCIAL CENTRE"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/dubai-internationl-financial-centre"
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
          href="https://ms-ca.com/dubai-internationl-financial-centre"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar
        color="#FFFFFF"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
      />
      
      <div className={styles.banner_container_difc}>
       
        <Banner
          heading={<>Dubai International Financial Centre (DIFC)</>}
          
          detail="Dubai International Financial Centre (DIFC) is the leading MEASA financial hub. With two decades of experience, it boosts trade and investment connections across 72 countries with a GDP of USD 8 trillion. DIFC links MEASA markets to Asia, Europe, and the Americas through its Dubai location, featuring an internationally recognized, independent regulator, and an English Common Law framework."
        />
      </div>
     
      <Banner2 />

      <SectionN />

      <div className={styles.marginTpW} style={{marginTop:"35px"}}>
        <Banner3 />
      </div>
<div>
<PDF/>
</div>
     
      <div className={styles.marginTp}>
        <License />
      </div>
      <div style={{backgroundColor: "#192b3a",marginBottom:"40px"}}>
<KeyPoints/>
   </div>
     
      
<div>
<DIFCservices/>
</div>
{/* <div className={styles.difcimage}>
  <Image src="/images/DIFC2.jpg" alt="img" layout='fill'className={styles.imagesize}/>
</div> */}
<div style={{backgroundColor: "#F5F5F5"}}>
      <WhyDIFC/>
    </div>

     

      <div className={Hstyles.footer}>
        <Footer />
      </div>
      {/* 
            {popup && <BookCall onClick={() => setPopup(false)} />} */}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const response1 = await gqlRequest({
    operationName: "getVideos",
    query: `query getVideos{
          videos {
            edges {
              node {
                title
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                videocategories {
                  edges {
                    node {
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
        
          }`,
    variables: {},
  });
  console.log("response1", response1);
  // const response2 = await gqlRequest({
  //     "operationName": "getVideoCategories",
  //     "query": `query getVideoCategories{
  //       videocategories{
  //           edges{
  //             node{
  //               id
  //               slug
  //               name
  //             }
  //           }
  //         }
  //       }`,
  //     "variables": {}
  //   })
  // console.log("response2", response2);

  return { props: { smartupVideo: response1?.data?.videos?.edges } };
}

export default ADGM;
