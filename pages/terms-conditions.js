import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import Hstyles from "../styles/Home.module.css";
//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Accounting&Bookkeeping/Common_Banner3"

import Banner2 from "../components/Accounting&Bookkeeping/Terms-and-condition";

// import PSection from "../components/Accounting&Bookkeeping/ADGM_process"

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
          MS Chartered Accountants | TERMS & CONDITIONS - MS
        </title>
        <meta name="description" content="TERMS & CONDITIONS" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="MS Chartered Accountants | TERMS & CONDITIONS - MS"
        />
        <meta
          property="og:description"
          content="TERMS & CONDITIONS"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/terms-conditions"
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
          href="https://ms-ca.com/terms-conditions"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar
        color="#FFFFFF"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
      />
      {/* <div className={styles.banner_container_adgm}>
                <Banner />
            </div> */}
      <div className={styles.banner_container_dmcc}>
        {/* <Banner heading={<>Dubai Multi Commodities Centre</>}

                    height="428" white={true} /> */}
       <Banner
  heading={<>TERMS & CONDITIONS</>}
  detail='The following pages contain our Terms and Conditions ("Terms") applicable to the Event, in relation to the registration, and participation (if any), and where applicable cancellation of the attendees ("you", "your", "yours") of the Event whether physical or virtual with the use of video or web conferencing tools/platforms. We reserve the right to reject any request notably for an Event, it deems inappropriate.'
  image="/images/storyBgMob.svg" alt="" width="313" height="314" widthMob="156" heightMob="157" white={true}/>
      </div>
     
      <Banner2 />

      <div className={Hstyles.footer}>
        <Footer />
      </div>
     
    </div>
  );
}


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
  
  return { props: { smartupVideo: response1?.data?.videos?.edges } };
}

export default ADGM;
