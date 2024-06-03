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
import ADGM_Ms_Coporate_Service from "../components/Accounting&Bookkeeping/ADGM_Ms_Coporate_Service";

import BookCall from "../components/Popup/Popup";
import ADGM_services from "../components/Accounting&Bookkeeping/ADGM_services";
import { useRouter } from "next/router";
import VideoSection from "../components/VideoGallery";
import gqlRequest from "../utilities/graphql";
import ADGM_servicenew from "../components/Accounting&Bookkeeping/ADGM_servicenew";
import ADGM_Ms_Compliance_Service from "../components/Accounting&Bookkeeping/ADGM_Ms_Compliance_Service";
import ADGM_WHYMS from "../components/Accounting&Bookkeeping/ADGM_WHYMS";
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/Compliance_filling_adgm_faq";
import ADGM_Guidence from "../components/Accounting&Bookkeeping/ADGM_Guidence";
import VideoCard from "../components/Accounting&Bookkeeping/VideoCard";
import Container from "../components/Common/Container";
import ADGM_newsblogs from "../components/Accounting&Bookkeeping/ADGM_newsblogs";
import Appointment from "../components/Accounting&Bookkeeping/Appointment_schedule";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import Alreem_yMs from "../components/Accounting&Bookkeeping/Alreem_yMs";
import Media from "../components/Accounting&Bookkeeping/Media2"
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";



const contents = [
  {
    title: "Outsourced Finance Officer ",
    content:
      "An FO in ADGM is essential for precise financial management, regulatory compliance, and strategic decision-making, ensuring business success in ADGM.",
  image:"/images/Finance1Officer.webp",
  image1:"/images/FinanceOfficermob.webp",
  link:"FO-service"
    },
  {
    title: "Outsourced MLRO",
    content:
      "An MLRO Ensures anti-money laundering compliance, safeguards integrity, and mitigates financial risks for businesses.",
  image:"/images/mlro_1service.webp",
  image1:"/images/mlro_servicemob.webp",
link:"AML-compliance-and-outsourced-MLRO-services"
    },

  {
    title: "Outsourced Compliance Officer",
    content:
      "It ensures regulatory adherence, mitigates risks, and fosters a resilient, compliant business environment.",
  image:"/images/Compliance1Service.webp",
  image1:"/images/ComplianceServicemob.webp",
  link:"/compliance-officer"
    },
  {
    title: "Compliance Filings",
    content:
      "Submission of compliance filings in ADGM is critical, ensuring accuracy and timeliness to maintain regulatory standing and business integrity.",
  image:"/images/Compliance1Filings.webp",
  image1:"/images/ComplianceFilingsmob.webp",
  link:"/adgm-compliance-filings"
    },
];
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
        Compliance Services in ADGM | ADGM Compliance Services in Abu Dhabi, UAE | MS
        </title>
        <meta
          name="description"
          content="Choose MS for your compliance services in ADGM. We ensure to keep your business competitive. Explore our ADGM compliance services in Abu Dhabi, Dubai, UAE."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Compliance Services in ADGM | ADGM Compliance Services in Abu Dhabi, UAE | MS"
        />
        <meta
          property="og:description"
          content="Choose MS for your compliance services in ADGM. We ensure to keep your business competitive. Explore our ADGM compliance services in Abu Dhabi, Dubai, UAE."
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/adgm-compliance-filings-specialist-services-in-abu-dhabi-uae-ms"
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
          href="https://ms-ca.com/adgm-compliance-filings"
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
          heading={
            <div style={{ fontWeight: "400" }}>Compliance Services </div>
          }
          height="428"
          //   white={true}
          detail="Our Compliance Services offer essential oversight, helping organizations navigate evolving regulations seamlessly. We provide guidance to design and implement effective controls, safeguarding your business against compliance risks. By ensuring adherence to regulations, we position your business for sustained success in the competitive ADGM market, providing assurance to senior company leaders and regulators alike."
        />
                       {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}
                       <div className={styles.appointmentdiv}>
          <span className={styles.banner_popup} onClick={()=>setAppoint(true)} >
            <img src="/images/appointment.svg" className={styles.appointmentImage} />
           <span className={styles.appointhover}> Schedule your Appointment</span>
          </span>
        </div>
      </div>
      <div className={styles.mobAppoint}>
          <span className={styles.banner_popupmob} onClick={()=>setAppoint(true)}>
            <img src="images/mobAppoint.svg"/>
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
            title="Let MS empower your business in ADGM"
            // position="CEO & Founder of MS"
          />
      </div>
      <div>
        <ADGM_servicenew
        showBorderBottom={true}
          heading="Global Solutions, Local Expertise"
          detail="Selecting MS as your Compliance Services provider in ADGM means choosing a dedicated partner to strengthen your business foundation. In ADGM, our thorough approach ensures your business not only meets but exceeds compliance standards. Our experts navigate complexities, mitigating risks and ensuring seamless adherence to regulations, creating a secure operational environment. With MS, compliance isn't just a requirement—it's a strategic advantage. Our comprehensive services cover a range of critical areas, including outsourced finance officer, outsourced MLRO (Money Laundering Reporting Officer), outsourced compliance officer, and compliance filings. From managing financial operations to overseeing regulatory compliance, our expert team provides tailored solutions to safeguard your business in ADGM's competitive market. From assurance reviews to compliance remediation, data protection, and risk management, our experienced team offers timely and solution-oriented advice tailored to your evolving regulatory obligations and business needs."
          // showButton={true} 
        />
      </div>
      <div>
        <ADGM_Ms_Coporate_Service  contents={contents} servicetitle={<span>Compliance Services in <span style={{fontWeight:"500"}}>ADGM <span style={{fontWeight:"300"}}> by </span> MS</span></span>}/>
      </div>
      {/* <div>
        <ADGM_Ms_Compliance_Service />
      </div> */}
     <div className={styles.coporateserviceYms}>
     <Alreem_yMs title={'as your compliance service provider in ADGM'} 
     content1={'Choosing MS as your Compliance Services provider in ADGM is all you need to hold up your business. Within the ever-changing ADGM regulatory environment, what we are aiming is to raise your business beyond compliance standards. In MS, the experts help you to reduce the complexities, ease the risks, and ensure seamless adherence to regulations. Set yourself up for long-term success knowing that your operations and reputation in the competitive and evolving market of ADGM are safe with our dedicated Compliance Services.'}
      content2={" With MS, compliance is not just a requirement—it's a strategic advantage."}/>
        {/* <ADGM_WHYMS buttonColor="#FFF"
    buttonBackgroundColor="#D4AE31"/> */}
      </div>
      <div className={styles.newsBlogWrapper}>
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
