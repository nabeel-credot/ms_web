import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/SmartUp.module.css'
import Hstyles from '../styles/Home.module.css'
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import Banner from "../components/Accounting&Bookkeeping/ADGM_bannerTop";
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
//import Banner from "../components/Accounting&Bookkeeping/Common_Banner2"
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar12"
import Banner2 from "../components/Accounting&Bookkeeping/MASDAR_banner";
import Benefits from "../components/Accounting&Bookkeeping/MASDAR_Benefits";
import WhyMs from "../components/Accounting&Bookkeeping/MASDAR_WhyMs";
// import PSection from "../components/Accounting&Bookkeeping/ADGM_process"

import Approach from '../components/Accounting&Bookkeeping/MASDAR_Approach'

import License from "../components/Accounting&Bookkeeping/MASDAR_License";
import Process from "../components/Accounting&Bookkeeping/MASDAR_Process";

import FAQ from "../components/Accounting&Bookkeeping/MASDAR_FAQ";


import Talk from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import News from "../components/Accounting&Bookkeeping/News_LatestInsight";

import BookCall from '../components/Popup/Popup';
import Services from '../components/Accounting&Bookkeeping/MASDAR_servicess'

import VideoSection from "../components/VideoGallery"
import gqlRequest from "../utilities/graphql"
function ADGM(props) {

    // const [popup, setPopup] = useState(false)

    // const handleClick = (popup) => {
    //     setPopup(popup)
    // }

    return (
        <div className={styles.container}>
            <Head>
                <title>MS Chartered Accountants | MASDAR - MS</title>
                <meta name="description" content="MASDAR" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="MS Chartered Accountants | MASDAR - MS" />
                <meta property="og:description" content="MASDAR" />
                <meta property="og:url" content="https://ms-ca.com/masdar" />
                <meta property="og:site_name" content="MS" />
                <meta property="article:publisher" content="https://www.facebook.com/MSGroupUAE/" />
                <meta property="article:modified_time" content="2022-09-14T07:30:52+00:00" />
                <meta property="og:image" content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png" />
                <meta property="og:image:width" content="152" />
                <meta property="og:image:height" content="152" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MS" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="19 minutes" />
                <link rel="canonical" href="https://ms-ca.com/masdar" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            {/* <div className={styles.banner_container_adgm}>
                <Banner />
            </div> */}
            <div className={styles.banner_container_masdar}>
                {/* <Banner heading={<>Dubai Multi Commodities Centre</>}

                    height="428" white={true} /> */}
                <Banner heading={<>MASDAR</>}

                    height="428" white={true} />
            </div>
            <div className={styles.MenuBar}>
                <MenuBar />
            </div>
            <Banner2 />

            <Benefits />

            <div className={styles.marginTpW2}>
                <WhyMs />
            </div>

            <div className={styles.marginBt2}>
                <Process />
            </div>
            <div className={styles.marginTopM}>
                <License />
            </div>


            <div className={styles.blueBgWrap}>
                <Approach />
            </div>


            {/* <div className={styles.blueBgWrap}>
                <AnnualReq />
            </div> */}

            <FAQ />

            <div className={styles.marginVS}>
                <VideoSection smartupPosts={props.smartupVideo} service="MASDAR" />
            </div>

            <div className={styles.marginTp25mob} >
                <Talk service="MASDAR" />
            </div>
            <div className={styles.marginBtm}>
                <Services />
            </div>

            <div className={styles.marginTp25m}>
                <News categorySlug="masdar" />
            </div>

            <div className={Hstyles.footer}>
                <Footer />
            </div>
            {/* 
            {popup && <BookCall onClick={() => setPopup(false)} />} */}

        </div>

    )
}

// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
    const response1 = await gqlRequest({
        "operationName": "getVideos",
        "query": `query getVideos{
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
        "variables": {}
    })
    console.log("response1", response1,response1?.data?.videos?.edges,response1?.data?.videos?.edges?.length);
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

export default ADGM