import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import style from "../components/Accounting&Bookkeeping/videocard.module.css";
import Hstyles from "../styles/Home.module.css";
import newstyle from "../components/Accounting&Bookkeeping/Styles.module.css";
//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-Difc";
// import Banner from "../components/Accounting&Bookkeeping/ADGM_bannerTop";
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2new";
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
import Overview from "../components/Accounting&Bookkeeping/Accounting_overview";
import Account_service from "../components/Accounting&Bookkeeping/Accounting_subservices";
import ADGM_WHYMS from "../components/Accounting&Bookkeeping/ADGM_WHYMS";
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/Compliance_difc_FAQ";
import Guidence from "../components/Accounting&Bookkeeping/Guidence";
import VideoCard from "../components/Accounting&Bookkeeping/Videocard_accounting";
import Container from "../components/Common/Container";
import ADGM_newsblogs from "../components/Accounting&Bookkeeping/ADGM_newsblogs";
import Company_Form_Banner from "../components/Accounting&Bookkeeping/Company_Form_Banner";
import Appointment from "../components/Accounting&Bookkeeping/Appointment_schedule_difc";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import Alreem_yMs from "../components/Accounting&Bookkeeping/Alreem_yMs";
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";
import Media from "../components/Accounting&Bookkeeping/Media2"
import Y_Accounting from "../components/Accounting&Bookkeeping/Why-Accounting-payaroll"
import Accounting_ms from "../components/Accounting&Bookkeeping/y_msfor_accounting"
import Testimonial from "../components/Accounting&Bookkeeping/Testimonial";


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
        DIFC Compliance Officer in Abu Dhabi | MS	
        </title>
        <meta
          name="description"
          content="Looking for a DIFC Compliance Officer in Abu Dhabi? MS offers expert DIFC compliance services to ensure regulatory adherence and risk mitigation	"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="DIFC Compliance Officer in Abu Dhabi | MS		"
        />
        <meta
          property="og:description"
          content="Looking for a DIFC Compliance Officer in Abu Dhabi? MS offers expert DIFC compliance services to ensure regulatory adherence and risk mitigation		"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/difc_compliance_service"
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
          href="https://ms-ca.com/corporate-services"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar
        smartNav="true"
        color="#FFFFFF"
        hoverClr="#D4AE31"
        bgcolor="transparent"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
      />
      {/* <div className={styles.banner_container_adgm}>
                <Banner />
            </div> */}
      <div className={styles.banner_container_accounting}>
        <Banner
          heading={<div style={{ fontWeight: "400" }}>Payroll</div>}
          height="428"
          detail="Free yourself from payroll hassles in the UAE with MS. Our streamlined system handles everything from tax calculations to employee deposits, leaving you with more time to focus on what makes your business excel in the UAE. MS guarantees on-time and accurate payments, saving you time and money."
        />
               {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}
               <div className={styles.appointmentdiv}>
          <span className={styles.banner_popup_accounting} onClick={()=>setAppoint(true)} >
            <img src="/images/appointment_accounting.svg" className={styles.appointmentImage} alt="appointment"/>
           <span className={styles.appointhover}> Schedule your Appointment</span>
          </span>
        </div>
      </div>
      <div className={styles.mobAppoint} style={{background:"#002A3A"}}>
          <span className={styles.banner_popupmob} onClick={()=>setAppoint(true)}>
            <img src="images/mobAppoint_account.svg" alt="appointment"/>
          Schedule your Appointment
          </span>
          </div>
      {/* <div className={styles.video1}>
        <Container>
          <VideoCard
          fillcolor="#002A3A"
            imagePath="/images/ms_ceo1.webp"
            author="Mohammad Shafeek"
            title={<span>Let&apos;s talk about how  <span style={{fontWeight:"500"}}>MS</span> serving <span style={{fontWeight:"500"}}>DIFC</span></span>}
            position="CEO & Founder of MS"
            background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.42%)"
            
          />
        </Container>
      </div>
      <div className={styles.mobvideo1}>
        <VideoCard
        fillcolor="#002A3A"
          imagePath="/images/CEO_mobile.png"
          // author="Mohammad Shafeek"
          title={<span>Let&apos;s talk about how  <span style={{fontWeight:"500"}}>MS</span> serving <span style={{fontWeight:"500"}}>DIFC</span></span>}
          background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.42%)"
          
        />
      </div> */}
      <div>
        <Overview
        
          heading="Secure Payroll, Secure Business"
          detail="Payroll, often viewed as a routine task, can be a critical foundation for business success, especially in the UAE.  UAE payroll goes beyond just processing salaries, acting as the backbone of your operations. It ensures compliance with specific mainland regulations, keeps employees satisfied with timely payments, and fosters a productive work environment. They provide financial transparency into your workforce costs, simplify the administration of employee benefits, and streamline various aspects of workforce management, ultimately promoting organizational efficiency and compliance within the UAE's dynamic financial landscape. "
           showButton={true}
        />
      </div>
      <Y_Accounting/>
      {/* <Accounting_ms/>
      <Testimonial /> */}
      <Alreem_yMs 
      title={' for Payroll services in the UAE'} 
      content1={<span>In the UAE, say goodbye to payroll headaches with MS Payroll Services. Our team&apos;s deep regional knowledge ensures flawless and compliant processing, every time. We go beyond just ticking boxes – we become your trusted partner, navigating complex payroll challenges so you can focus on what truly matters: running your business. Imagine a workplace where happy employees and efficient operations go hand-in-hand. With MS, each paycheck reflects not just financial accuracy, but a commitment to your company&apos;s success and employee well-being. Choose MS and experience the difference – a dedicated team that understands the mainland&apos;s nuances, guaranteeing financial precision and a rhythm that drives success. 
        </span>}/>
      <div className={styles.newsBlogWrapper} >
        <ADGM_newsblogs categorySlug="DIFC" tag="DIFC" />
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
       <div className={styles.advisory_guid}>
      <Guidence />
      </div>
      {/* <div className={styles.faqWrapper} >
        <ADGM_FAQ_Service />
      </div> */}
      
      <div className={Hstyles.footer} >
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