import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import style from "../components/Accounting&Bookkeeping/videocard.module.css";
import Hstyles from "../styles/Home.module.css";
import newstyle from "../components/Accounting&Bookkeeping/Styles.module.css";
//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer copy";
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
import ADGM_servicenew from "../components/Accounting&Bookkeeping/ADGM_servicenew";
import ADGM_Ms_Service from "../components/Accounting&Bookkeeping/ADGM_Ms_Service";
import ADGM_WHYMS from "../components/Accounting&Bookkeeping/ADGM_WHYMS";
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/Alreem_FAQ";
import ADGM_Guidence from "../components/Accounting&Bookkeeping/ADGM_Guidence";
import VideoCard from "../components/Accounting&Bookkeeping/VideoCard_alreem";
import Container from "../components/Common/Container";
import ADGM_newsblogs from "../components/Accounting&Bookkeeping/ADGM_newsblogs";
import AdgmWings from "../components/Accounting&Bookkeeping/AdgmWings copy";
import Alreem_yMs from "../components/Accounting&Bookkeeping/Alreem_yMs";
import Appointment from "../components/Accounting&Bookkeeping/Appointment_schedule";
import Island from "../components/Accounting&Bookkeeping/Alreem_island";
import Ourgoal from "../components/Accounting&Bookkeeping/Ourgoal";
import Videotestimonial from "../components/Accounting&Bookkeeping/Videotestimonial";

function ADGM(props) {
  const adgmVideos = props.smartupVideo.filter((item) => {
    return item.node.videocategories.edges.some(
      (edge) => edge.node.name === "ADGM"
    );
  });
  console.log(adgmVideos);
  const carouselTest = adgmVideos.map((item, index) => {
    const stripHtmlTags = (html) => {
      return html.replace(/(<([^>]+)>)/gi, "");
    };

    return {
      key: index,
      imagePath: item?.node?.title,
      title: stripHtmlTags(item?.node?.content),
      bgimage: item?.node?.featuredImage?.node?.sourceUrl,
    };
  });
  const [popup, setPopup] = useState(false);
  const [initialpopup, setInitialPopup] = useState(true);
  const [appoint, setAppoint] = useState(false);
  const [state, setState] = useState(0);
  const handleNext = () => {
    setState((i) => {
      if (carouselTest.length > i + 1) return i + 1;
      else return 0;
    });
  };

  const handleClick = (popup) => {
    setPopup(popup);
  };
  const router = useRouter();
  const closepopup = () => {
    setInitialPopup(false);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Al Reem Island Expansion by ADGM</title>
        <meta
          name="description"
          content="Explore the expansion to Al Reem Island by ADGM with MS, offering pro bono license conversion, free transition advisory for small retail businesses, and streamlined company formations under ADGM jurisdiction."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Al Reem Island Expansion by ADGM | MS"
        />
        <meta
          property="og:description"
          content="Explore the expansion to Al Reem Island by ADGM with MS, offering pro bono license conversion, free transition advisory for small retail businesses, and streamlined company formations under ADGM jurisdiction."
        />
        <meta property="og:url" content="https://ms-ca.com/al-reem-island" />
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
        <link rel="canonical" href="https://ms-ca.com/al-reem-island" />
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
      <div className={styles.banner_container_al_reem}>
        <Banner
          heading={
            <div style={{ fontWeight: "400" }}>
              Al Reem Island Expansion by ADGM | MS
            </div>
          }
          height="428"
          //   white={true}
          detail="Explore the expansion to Al Reem Island by ADGM with MS, offering pro bono license conversion, free transition advisory for small retail businesses, and streamlined company formations under ADGM jurisdiction."
        />
        {appoint && (
          <div className={styles.appointwrapper}>
            {" "}
            <Appointment appoint={appoint} setAppoint={setAppoint} />
          </div>
        )}
        <div className={styles.appointmentdiv}>
          <span
            className={styles.banner_popup}
            onClick={() => setAppoint(true)}
          >
            <img
              src="/images/appointment.svg"
              className={styles.appointmentImage}
            />
            Schedule your Appointment
          </span>
        </div>
      </div>
      <div className={styles.mobAppoint}>
        <span
          className={styles.banner_popupmob}
          onClick={() => setAppoint(true)}
        >
          <img src="images/mobAppoint.svg" />
          Schedule your Appointment
        </span>
      </div>
      <div className={styles.adgm_wing_cointainer}>
        <AdgmWings />
      </div>
      <VideoCard
        imagePath="/images/al-reem.jpg"
        title="Fastest growing financial district"
        url="https://youtu.be/XS_cao7PZEY"
      />
      <Ourgoal />
      <div className={styles.islandcontainer}>
        <Island />
      </div>
      <div className={styles.testimonialvideowrapper}>
        <Videotestimonial />
      </div>
      <Alreem_yMs
        content1={
          "Simplify your business journey with MS, your single-source solution for Migrations and Company Formations in Al Reem Island.  With our mainland experience and expertise, we ease your journey, ensuring a seamless and successful company setup."
        }
        title={
          <span>
            as your partner for{" "}
            <span style={{ fontWeight: "500" }}>
              Migrations and Company Formations
            </span>{" "}
            in Al Reem Island?
          </span>
        }
        content2={"Trust MS to make your expansion hassle-free."}
      />

      {/* <div style={{ marginTop: "70px" }}>
        <ADGM_newsblogs categorySlug="adgm" />
      </div> */}
      <div className={styles.faqWrapper_alreem}>
        <ADGM_FAQ_Service />
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
