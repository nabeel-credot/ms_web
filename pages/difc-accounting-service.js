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
import DIFC_service_accounting from "../components/Accounting&Bookkeeping/DIFC_service_accounting";
import ADGM_WHYMS from "../components/Accounting&Bookkeeping/ADGM_WHYMS";
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/Difc_Accounting_FAQ";
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

  const contents = [
   
    {
      title: " Bookkeeping ",
      content:"In DIFC, bookkeeping is indispensable for financial transparency, regulatory compliance, and informed decision-making.",
      image:"/images/bookkeepin11.webp",
      image1:"/images/bookkeepin1.webp",
      link:"/difc-bookkeeping"
    },

    {
      title: " Payroll",
      content:"Within DIFC, payrolls extend beyond mere transactions, serving as the indispensable heartbeat of business operations. ",
      image: "/images/payroll1.webp",
      image1:"/images/payroll.webp",
       link:"/difc-payroll"
    },
    // {
    //   title: "Fintech and Innovation",
    //   image: "/images/corporate_business_2.svg",
    //   image1:"/images/corporate_business_2.svg",
    //   link:"/nominee-authorised-signatory-services"
    // },
    // {
    //   title: "Retail and Leisure",
    //   image: "/images/corporate_business_4.svg",
    //   image1:"/images/corporate_business_4.svg",
    //   link:"/residency-services"
    // },

  ];

  
  return (
    <div className={styles.container}>
      <Head>
        <title>
        DIFC Accounting Services in Abu Dhabi | MS	
        </title>
        <meta
          name="description"
          content="Explore top-notch DIFC accounting services in Abu Dhabi with MS. Expertise in accounting services tailored to your needs.	"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="DIFC Accounting Services in Abu Dhabi | MS		"
        />
        <meta
          property="og:description"
          content="Explore top-notch DIFC accounting services in Abu Dhabi with MS. Expertise in accounting services tailored to your needs.	"
        />
        <meta
          property="og:url"
          content="	https://ms-ca.com/difc_accounting_service"
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
          heading={<div style={{ fontWeight: "400" }}>Accounting</div>}
          height="428"
          //   white={true}
          detail="Within DIFC, precise financial management, regulatory compliance, and strategic 
          decision-making rely on essential accounting services. At MS, our dedicated experts guarantee accuracy, 
          transparency, and efficiency in accounting processes, delivering businesses the crucial financial insights 
          required for sustainable growth in the ever-evolving environment of DIFC."
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
        showBorderBottom={true}
          heading="You Drive, We Optimize: Empowering Accounting Decisions"
          detail="In the fast-changing business world of DIFC, accounting services are crucial for staying financially stable and following the rules. We offer personalized accounting support to help you grow and succeed. Our services cover everything from keeping your books in order to managing payroll, making your financial life easier.

          With our support, you can focus on growing your business confidently, knowing your finances are in capable hands. Plus, we offer strategic financial planning to help you make informed decisions for long-term success in DIFC."
           showButton={true}
        />
      </div>
      {/* <div className={styles.comapanyformWrapper}>
          <Company_Form_Banner/>
        </div> */}

       <div style={{marginBottom:"70px"}}>
        <DIFC_service_accounting
          showherobanner={true}
           contents={contents}
          servicetitle={<span>Accounting Services in <span style={{fontWeight:"500"}}>DIFC <span style={{fontWeight:"300"}}> by </span> MS</span></span>}
          // title={<span>Type of Business under<span style={{ fontWeight: "500" }}> DIFC</span></span>}
/>
      </div> 

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
      title={'for your Accounting Services DIFC'} 
      content1={<span>In the dynamic business environment of DIFC, where adherence 
        to regulations is crucial, accounting serves as the foundation of stability 
        and compliance. At MS, our accounting services are shaped to meet the specific 
        needs of your company, emphasizing clarity, precision, and efficiency. From managing 
        finances to compliance, we handle it all. Whether you&apos;re setting up or running operations, 
        count on us for thorough accounting services. With MS, focus on your business while we ensure 
        compliance with DIFC regulations.
        </span>}/>
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
