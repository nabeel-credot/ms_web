import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import Hstyles from "../styles/Home.module.css";
//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Banner from "../components/Accounting&Bookkeeping/ADGM_bannerTop";
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2";
import MenuBar from "../components/Accounting&Bookkeeping/MenuBar9";
import Banner2 from "../components/Accounting&Bookkeeping/ADGM_banner";
import SectionN from "../components/Accounting&Bookkeeping/ADGM_newSection";
import PSection from "../components/Accounting&Bookkeeping/ADGM_process";
import LSection from "../components/Accounting&Bookkeeping/ADGM_license";
import Approach from "../components/Accounting&Bookkeeping/Approach_ADGM";

import Service from "../components/Accounting&Bookkeeping/ADGM_service";
import AnnualReq from "../components/Accounting&Bookkeeping/ADGM_serviceOld";
import FAQ from "../components/Accounting&Bookkeeping/ADGM_FAQ";
import Image from "next/image";
import Link from "next/link";
import Talk from "../components/Accounting&Bookkeeping/Blue_Lets_talk";
import News from "../components/Accounting&Bookkeeping/News_LatestInsight";

import BookCall from "../components/Popup/Popup";
import ADGM_services from "../components/Accounting&Bookkeeping/ADGM_services";
import { useRouter } from "next/router";
import VideoSection from "../components/VideoGallery";
import gqlRequest from "../utilities/graphql";
function ADGM(props) {
  const [popup, setPopup] = useState(false);
  const [initialpopup, setInitialPopup] = useState(true);
  const handleClick = (popup) => {
    setPopup(popup);
  };
  const router = useRouter();
  const closepopup = () => {
    setInitialPopup(false);
  };
  return (
    <div className={styles.container}>
      {/* {initialpopup && (
        <div className={styles.popup_div}>
          <div className={styles.popup_container}>
            <div className={styles.popup_head2}>
              <div className={styles.popup_close}>
                <Image
                  src="/images/popupclose.svg"
                  layout="fill"
                  onClick={closepopup}
                />
              </div>

              <div className={styles.popup_img}>
                <Image src="/images/calicon.svg" layout="fill" />
              </div>
              <h3 className={styles.popup_bg_title}>
                Attention! Deadline alert to ADGM entities
              </h3>
              <span>
                Submit your &nbsp;
                <span className={styles.popup_headsub}>
                  ADGM Annual Accounts{" "}
                </span>
                <span style={{ fontWeight: "500px" }}>by</span>
                <span className={styles.popup_headsub}>
                  {" "}
                  September 30<sup>th</sup>{" "}
                </span>
              </span>
            </div>
            <div className={styles.popup_content}>
              <p>
                Attention to all Abu Dhabi Global Market (ADGM) Entities with
                the financial year ending on December 31st, 2022. You need to
                file your annual accounts by September 30th, 2023 . Hurry up and
                ensure timely submission to meet the regulatory requirements.
                Get in touch with MS today for hassle-free submissions.
              </p>
              <div className={styles.popup_button_div}>
                <button className={styles.popup_button} onClick={()=>router.push("/adgm-compliance-filings")}>
                  Know More
                </button>
                <button
                  className={styles.popup_button}
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
      <Head>
        <title>
          ADGM | Abu Dhabi Global Market Company Set up Services | MS Group
        </title>
        <meta
          name="description"
          content="MS provides comprehensive company set up services in Abu Dhabi Global Market (ADGM), including company registration, corporate governance, etc. Register with MS"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="ADGM | Abu Dhabi Global Market Company Set up Services | MS Group"
        />
        <meta
          property="og:description"
          content="MS provides comprehensive company set up services in Abu Dhabi Global Market (ADGM), including company registration, corporate governance, etc. Register with MS"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/#abu-dhabi-global-market-uae"
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
          href="https://ms-ca.com/#abu-dhabi-global-market-uae"
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
      <div className={styles.banner_container_adgm}>
        <Banner
          heading={<>Abu Dhabi Global Market</>}
          height="428"
          white={true}
          detail="Discover an award-winning international financial center that follows international best practices, offering transparency and pioneering regulatory frameworks. With its business-friendly operations, application of English Common Law, independent legal jurisdiction, and strong local and international strategic partnerships, ADGM provides the ideal environment for the business community to thrive."
        />
      </div>
      <div className={styles.MenuBar}>
        <MenuBar />
      </div>
      <Banner2 />
      <SectionN />

      <PSection />
      <div className={styles.blueBgWrap + " " + styles.marginTp}>
        <LSection />
      </div>
      <div className={styles.marginTp}>
        <Service />
      </div>

      <div className={styles.blueBgWrap}>
        <Approach />
      </div>

      {/* <div className={styles.blueBgWrap}>
                <AnnualReq />
            </div> */}

      <FAQ />

      <div className={styles.marginVG}>
        <VideoSection smartupPosts={props.smartupVideo} service="ADGM" />
      </div>

      <div className={styles.marginTp25mob}>
        <Talk service="ADGM" />
      </div>

      <div className={styles.marginTp25m}>
        <ADGM_services />
      </div>

      <div className={styles.marginTp25m}>
        <News categorySlug="adgm" />
      </div>

      <div className={Hstyles.footer}>
        <Footer />
      </div>

      {popup && <BookCall onClick={() => setPopup(false)} />}
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
