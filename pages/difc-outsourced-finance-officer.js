import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import style from "../components/Accounting&Bookkeeping/videocard.module.css";
import Hstyles from "../styles/Home.module.css";
import newstyle from "../components/Accounting&Bookkeeping/Styles.module.css";
//components
import Navbar from "../components/Navbar_difc";
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
import DIFC_service_new from "../components/Accounting&Bookkeeping/DIFC_service_new";
import DIFC_service_tax from "../components/Accounting&Bookkeeping/Difc_tax_service";
import ADGM_WHYMS from "../components/Accounting&Bookkeeping/ADGM_WHYMS";
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/Outsourced_finance_FAQ";
import Guidence from "../components/Accounting&Bookkeeping/Guidence";
import VideoCard from "../components/Accounting&Bookkeeping/VideoCard_difc";
import Container from "../components/Common/Container";
import ADGM_newsblogs from "../components/Accounting&Bookkeeping/ADGM_newsblogs";
import Company_Form_Banner from "../components/Accounting&Bookkeeping/Company_Form_Banner";
import Appointment from "../components/Accounting&Bookkeeping/Appointment_schedule_difc";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import Alreem_yMs from "../components/Accounting&Bookkeeping/Alreem_yMs";
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";
import Media from "../components/Accounting&Bookkeeping/Media2"
import Finance_Responsibility from "../components/Accounting&Bookkeeping/Finance_officer_responsibility"
import Scrolling from "../components/Accounting&Bookkeeping/Outsource_finance_scroll"



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

  // const contents = [
   
  //   {
  //     title: "VAT ( Value Added Tax) ",
  //     content:"Value Added Tax (VAT) compliance is of paramount significance for businesses operating in the Dubai International Financial Centre (DIFC).",
  //     image: "/images/corporate_business_1 (2).svg",
  //     image1:"/images/corporate_business_1 (2).svg",
  //     link:"/company-secretarial-services"
  //   },

  //   {
  //     title: "Corporate Tax",
  //     content:"Corporate Tax, also referred to as company tax, is the financial obligation a corporation on its profits earned within a fiscal year.",
  //     image: "/images/corporate_business_1.svg",
  //     image1:"/images/corporate_business_1.svg",
  //     link:"/directorship-services"
  //   },
  //   {
  //     title: " Economic Substance Regulation",
  //     content:"Every DIFC-licensed company is mandated to submit its Economic Substance Regulations (ESR) notification to the DIFC Registrar of Companies within the stipulated timeframe",
  //     image: "/images/corporate_business_2.svg",
  //     image1:"/images/corporate_business_2.svg",
  //     link:"/nominee-authorised-signatory-services"
  //   },
  //   {
  //     title: " Transfer Pricing",
  //     content:"Transfer pricing is crucial in the Dubai International Financial Centre (DIFC) as it ensures fair and arm's length pricing for transactions between affiliated entities.",
  //     image: "/images/corporate_business_4.svg",
  //     image1:"/images/corporate_business_4.svg",
  //     link:"/residency-services"
  //   },

  // ];

  
  return (
    <div className={styles.container}>
      <Head>
        <title>
        Outsourced Finance Officer in DIFC | DIFC Compliance Officer| MS
        </title>
        <meta
          name="description"
          content="Looking for an outsourced finance officer in DIFC? Our professionals offer the expertise to streamline your financial operations and meet your business needs."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Outsourced Finance Officer in DIFC | DIFC Compliance Officer| MS"
        />
        <meta
          property="og:description"
          content="Looking for an outsourced finance officer in DIFC? Our professionals offer the expertise to streamline your financial operations and meet your business needs."
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/difc-outsourced-finance-officer"
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
        color="black"
        bgcolor="white"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
      />
      {/* <div className={styles.banner_container_adgm}>
                <Banner />
            </div> */}
      <div  className={styles.banner_container_difccorporate}>
        <Banner
          heading={<div style={{ fontWeight: "400" }}>Outsourced Finance Officer</div>}
          height="428"
          //   white={true}
          detail="The Finance Officer (FO) is crucial for ensuring compliance with financial 
          regulations and reporting requirements in firms within the Dubai International 
          Financial Centre (DIFC). Their role is vital in maintaining the financial integrity of the 
          organization. If an in-house appointment isn't possible, outsourcing a Finance Officer is a 
          practical solution. This provides access to specialized expertise while reducing costs and administrative burdens. "
        />
               {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}
               <div className={styles.appointmentdiv}>
          <span className={styles.banner_popup_difc} onClick={()=>setAppoint(true)} >
            <img src="/images/appoinment_difc.svg" className={styles.appointmentImage} alt="appointment"/>
           <span className={styles.appointhover}> Schedule your Appointment</span>
          </span>
        </div>
      </div>
      <div className={styles.mobAppoint} style={{background:"#3C166B"}}>
          <span className={styles.banner_popupmob} onClick={()=>setAppoint(true)}>
            <img src="images/mobAppoint1_difc.svg" alt="appointment"/>
          Schedule your Appointment
          </span>
          </div>
      <div className={styles.video1}>
        <Container>
          <VideoCard
          fillcolor="#773DBD"
            imagePath="/images/ms_ceo1.webp"
            author="Mohammad Shafeek"
            title={<span>Let <span style={{fontWeight:"500"}}>MS</span> empower your business in <span style={{fontWeight:"500"}}>DIFC</span></span>}
            position="CEO & Founder of MS"
            background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.42%)"
            
          />
        </Container>
      </div>
      <div className={styles.mobvideo1}>
        <VideoCard
        fillcolor="#773DBD"
          imagePath="/images/CEO_mobile.png"
          // author="Mohammad Shafeek"
          title={<span>Let <span style={{fontWeight:"500"}}>MS</span> empower your business in <span style={{fontWeight:"500"}}>DIFC</span></span>}
          background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.42%)"
          // position="CEO & Founder of MS"
        />
      </div>
      <div>
        <DIFC_service_new
        // showBorderBottom={true}
          heading="Simplify Compliance, Scale with Confidence"
          detail="In firms within the Dubai International Financial Centre (DIFC), 
          appointing a Finance Officer (FO) is crucial. The FO ensures financial probity and regulatory 
          compliance. Responsible for key functions like financial reporting and risk management, the FO plays 
          a vital role in upholding the integrity of financial operations within the highly regulated landscape of 
          the DIFC. The inhouse appointing of a Financial Officer can be daunting, so opting for an Outsourced Financial 
          Officer holds a practical solution. Their expertise ensures transparency, manages risks, and ensures regulatory 
          compliance. By entrusting this responsibility to an outsourced professional, firms can navigate regulatory complexities 
          effectively, ensuring compliance and safeguarding financial stability within the DIFC."
           showButton={true}
        />
      </div>
      <Scrolling/>
      <Finance_Responsibility/>
      {/* <div className={styles.comapanyformWrapper}>
          <Company_Form_Banner/>
        </div> */}

       {/* <div>
        <DIFC_service_tax
          showherobanner={true}
           contents={contents}
          servicetitle={<span>Tax Services in <span style={{fontWeight:"500"}}>DIFC <span style={{fontWeight:"300"}}> by </span> MS</span></span>}
          // title={<span>Type of Business under<span style={{ fontWeight: "500" }}> DIFC</span></span>}
/>
      </div>  */}

      {/* <div className={styles.banner_container_difcnew}>
        <Banner
          heading={<span>Role of <span style={{ fontWeight: "500" }}>DFSA</span><span style={{ fontWeight: "300" }}> in </span>DIFC</span>
        }
          height="428"
          //   white={true}
          detail="The Dubai Financial Services Authority (DFSA) serves as the autonomous regulator overseeing 
          financial services within the Dubai International Financial Centre (DIFC), a designated financial free 
          zone in Dubai, UAE. The DFSA's regulatory scope encompasses asset management, banking and 
          credit services, securities, collective investment funds, custody and trust services, commodities 
          futures trading, Islamic finance, insurance, as well as the operation of an international equities 
          exchange and an international commodities derivatives exchange.
          "
        />
        </div> */}
      <div className={styles.coporateserviceYms_difc}>
      <Alreem_yMs 
      background={`url(/images/y_ms_difc.webp)`}
      title={'for Outsourced Finance Officer in DIFC'} 
      content1={<span>As experts in this field, we seamlessly integrate into your team, 
        ensuring thorough financial compliance, reporting, and risk management. From Dubai 
        Financial Services Authority (DFSA) Prudential Investment Business (PIB) module adherence to 
        timely submissions and capital adequacy reporting, we&apos;ve got you covered. Maximize efficiency and 
        minimize risk with our dedicated Financial Officers, allowing you to focus on your core business while 
        we handle the financial details. Trust us to safeguard your financial stability and keep you ahead in 
        the competitive landscape. </span>}/>
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
         <Guidence />

      <div className={styles.faqWrapper} >
        <ADGM_FAQ_Service />
      </div>
   
    
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
