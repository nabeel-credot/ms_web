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
import ADGM_Ms_Coporate_Service from "../components/Accounting&Bookkeeping/ADGM_Ms_Coporate_Service";
import ADGM_WHYMS from "../components/Accounting&Bookkeeping/ADGM_WHYMS";
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/Bank_Assistance_FAQ";
import ADGM_Guidence from "../components/Accounting&Bookkeeping/ADGM_Guidence";
import VideoCard from "../components/Accounting&Bookkeeping/VideoCard";
import Container from "../components/Common/Container";
import ADGM_newsblogs from "../components/Accounting&Bookkeeping/ADGM_newsblogs";
import Company_Form_Banner from "../components/Accounting&Bookkeeping/Company_Form_Banner";
import Appointment from "../components/Accounting&Bookkeeping/Appointment_schedule";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import Alreem_yMs from "../components/Accounting&Bookkeeping/Alreem_yMs";
import Media from "../components/Accounting&Bookkeeping/Media2"
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";


function ADGM(props) {
  const adgmVideos = props.smartupVideo.filter(item => {
    
    return item.node.videocategories.edges.some(edge => edge.node.name === 'ADGM');
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
  const [appoint,setAppoint]=useState(false)
  const [state, setState] = useState(0);
  const handleNext = () => {
    setState((i) => {
      if (carouselTest.length > i + 1) return i + 1;
      else return 0;
    });
  };
  const handlePrev = () => {
    setState((i) => {
      if (i - 1 >= 0) return i - 1;
      else return carouselTest.length - 1;
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
        <title>
        Best Bank Account Assistance in ADGM | MS
        </title>
        <meta
          name="description"
          content="Trust MS for bank account assistance in ADGM. From paperwork to local insights, we provide not just solutions but complete support in bank account assistance."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Bank Account Assistance in ADGM | MS"
        />
        <meta
          property="og:description"
          content="Trust MS for bank account assistance in ADGM. From paperwork to local insights, we provide not just solutions but complete support in bank account assistance."
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/bank-opening-assistance"
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
          href="https://ms-ca.com/bank-opening-assistance"
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
      <div className={styles.banner_container_service}>
        <Banner
          heading={<div style={{ fontWeight: "400" }}>Bank Account Assistance</div>}
          height="428"
          //   white={true}
          detail="Business Bank Account Assistance is pivotal, ensuring the essential foundation for financial operations. MS simplifies the process, acknowledging the critical role of seamless banking solutions in fostering the smooth and efficient functioning of your business."
        />
               {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}
               <div className={styles.appointmentdiv}>
          <span className={styles.banner_popup} onClick={()=>setAppoint(true)} >
            <img src="/images/appointment.svg" className={styles.appointmentImage} alt="appointment"/>
           <span className={styles.appointhover}> Schedule your Appointment</span>
          </span>
        </div>
      </div>
      <div className={styles.mobAppoint}>
          <span className={styles.banner_popupmob} onClick={()=>setAppoint(true)}>
            <img src="images/mobAppoint.svg" alt="appointment"/>
          Schedule your Appointment
          </span>
          </div>
      <div className={styles.video1}>
        <Container>
          <VideoCard
            imagePath="/images/ms_ceo1.webp"
            author="Mohammad Shafeek"
            title="Let MS empower your business in ADGM"
            position="Founder & Group CEO, MS"
          />
        </Container>
      </div>
      <div className={styles.mobvideo1}>
        <VideoCard
          imagePath="/images/CEO_mobile.png"
          // author="Mohammad Shafeek"
          title="Let MS empower your business in ADGM"
          // position="CEO & Founder of MS"
        />
      </div>
      <div>
        <ADGM_servicenew
          heading="Expert-Guided Account Opening: Guaranteed Compliance"
          detail="Opening a bank account for an ADGM entity is a foundational step with far-reaching implications for businesses. We specialize in streamlining compliance procedures, ensuring that all regulatory requirements are met efficiently and effectively. With our expertise, we speed up the account opening process by cutting down on the time usually needed for Know Your Customer (KYC) checks. We are here to guide you through every steps guaranteeing compliance and efficiency, saving your time and resources while ensuring adherence to ADGM regulations. "
          // showButton={true}
        />
      </div>
     
      <div>
      <Alreem_yMs 
      title={"for Bank Account Assistance in ADGM"}
       content1={"Having a trusted partner like MS in ADGM for Bank Account Assistance is all you can wish for. Getting the paperwork done, understanding the local nuances, overcoming the hurdles - we've been there. Here, not just solutions, but support is what we offer. Establish your business easily in ADGM by opening a bank account and step towards hassle-free journey."}
   content2={"Be successful with MS."}
   />
        {/* <ADGM_WHYMS buttonColor="#FFF" buttonBackgroundColor="#D4AE31" /> */}
      </div>
      <div className={styles.newsBlogWrapper} >
        <ADGM_newsblogs categorySlug="adgm" />
      </div>

      {/* <div className={styles.servicemedia}>
        <Container>
          <div className={`${styles.video2} ${styles.customtitlediv}`}>
            <div
              className={newstyle.servicenewTitle}
              // style={{ marginBottom: "59px" }}
            >
              Media
            </div>
            
          </div>

          <div className={style.videocarousel1}>
            <div className={style.leftimage}>
              <img src="/images/media1.png" alt="adgm media" />
            </div>

            
 
              <Media
              
                service="ADGM"
                
                 styles={{ width: "100%", flex: 1, borderRadius: "25px" }}
               
              />

             
            <div className={style.rightimage}>
              <img src="/images/media2.png" alt="adgm media" />
            </div>
            
          </div>
        </Container>
      </div> */}

      <div className={styles.faqWrapper} >
        <ADGM_FAQ_Service />
      </div>
      <div className={styles.guidenceWraper} >
        <ADGM_Guidence />
      </div>
      <div className={styles.footerWrapper}>
      <div className={Hstyles.footer} >
        <Footer />
      </div></div>

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
