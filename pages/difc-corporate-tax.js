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
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/corporate_tax_FAQ";
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
import Benefit from "../components/Accounting&Bookkeeping/difc_ctax_benefits";
import Corporate_Tax from '../components/Accounting&Bookkeeping/Corporatetax_difc'
import Service_ctax from '../components/Accounting&Bookkeeping/difc_corporatetax_service'
import Corporate_rate from '../components/Accounting&Bookkeeping/Corporate_tax_rate'



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
      title: " VAT Advisory & Compliance Support ",
      content:"Value Added Tax (VAT) compliance is of paramount significance for businesses operating in the Dubai International Financial Centre (DIFC).",
      image: "/images/corporate_business_1 (2).svg",
      image1:"/images/corporate_business_1 (2).svg",
      link:"/company-secretarial-services"
    },

    {
      title: "VAT Registration",
      content:"In the UAE, VAT registration is categorized as either Mandatory or Voluntary, based on a business's annual turnover",
      image: "/images/corporate_business_1.svg",
      image1:"/images/corporate_business_1.svg",
      link:"/directorship-services"
    },
    {
      title: "VAT Return Filing",
      content:"After FTA registration, businesses must regularly submit statutory declarations, including VAT Returns summarizing taxable transactions within specified periods.",
      image: "/images/corporate_business_2.svg",
      image1:"/images/corporate_business_2.svg",
      link:"/nominee-authorised-signatory-services"
    },
    {
      title: " Tourist Refund Schemes",
      content:"The FTA now offers VAT-free shopping for tourists in the UAE. Approved retailers can issue eligible VAT tax invoices for goods purchased by tourists, facilitating their refund.",
      image: "/images/corporate_business_4.svg",
      image1:"/images/corporate_business_4.svg",
      link:"/residency-services"
    },
    {
        title: "VAT De-registration",
        content:"If a tax registrant voluntarily applied for registration and, after 12 months, their turnover doesn't surpass AED 187,500 or the business ceases taxable supplies, they are required to initiate the VAT Deregistration process through VAT Online Services. T",
        image: "/images/corporate_business_4.svg",
        image1:"/images/corporate_business_4.svg",
        link:"/residency-services"
      },

  ];

  
  return (
    <div className={styles.container}>
      <Head>
        <title>
        Expert Corporate Tax Services in DIFC | MS
        </title>
        <meta
          name="description"
          content="Get expert corporate tax services in DIFC to ensure compliance and optimize financial strategies. Trust our professional team to deliver personalized service.
          "
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Expert Corporate Tax Services in DIFC | MS"
        />
        <meta
          property="og:description"
          content="Get expert corporate tax services in DIFC to ensure compliance and optimize financial strategies. Trust our professional team to deliver personalized service.
          "
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/difc-corporate-tax"
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
      <div className={styles.banner_container_difccorporate}>
        <Banner
          heading={<div style={{ fontWeight: "400" }}>Corporate Tax</div>}
          height="428"
          //   white={true}
          detail="Within the dynamic business landscape of DIFC, corporate tax is integral to fiscal operations for enterprises. Diligent administration extends beyond mere compliance, evolving into a catalyst for economic stability."
        />
               {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}
               <div className={styles.appointmentdiv}>
          <span className={styles.banner_popup_difc} onClick={()=>setAppoint(true)} >
            <img src="/images/appoinment_difc.svg" className={styles.appointmentImage} alt="appointment"/>
           <span className={styles.appointhover}> Schedule your Appointment</span>
          </span>
        </div>
      </div>
      <div className={styles.mobAppoint}>
          <span className={styles.banner_popupmob} onClick={()=>setAppoint(true)}>
            <img src="/images/mobAppoint1_difc.svg" alt="appointment"/>
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
          // position="CEO & Founder of MS"
          background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.42%)"
        />
      </div>
      <div>
        <DIFC_service_new
        // showBorderBottom={true}
          heading="Future Proofing Through Proactive Guidance"
          detail="Corporate Tax, also referred to as company tax, is the financial obligation a corporation faces 
          on its profits earned within a fiscal year. Similar to how income taxes apply to individual 
          earnings, corporate taxes are imposed on a corporation's net income. This tax is calculated 
          based on the organization's taxable income, derived by subtracting total expenses from total 
          revenues. The components of expenses include costs of goods sold, operating expenses, 
          research and development costs, marketing and selling expenses, general and administrative 
          costs, and depreciation costs. Corporate taxes serve as a revenue source for the government, 
          with the tax rate and slabs varying across different countries."
           showButton={true}
        />
      </div>
      {/* <Corporate_Tax/> */}
      <Corporate_rate/>
      <Service_ctax/>
      {/* <Benefit/> */}
      {/* <div className={styles.comapanyformWrapper}>
          <Company_Form_Banner/>
        </div> */}

       {/* <div>
        <DIFC_service_tax
          showherobanner={true}
           contents={contents}
          servicetitle={<span>VAT Consultancy Services <span style={{fontWeight:"500"}}>DIFC <span style={{fontWeight:"300"}}> by </span> MS</span></span>}
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
      title={' for Corporate Tax Services In DIFC'} 
      content1={<span>MS is equipped to handle taxation services for businesses of all sizes, emphasizing the critical 
        importance of timely VAT registration. Failure to register within the specified timeframe may 
        result in a penalty of AED 20,000. Our proficient team is well-acquainted with the complete 
        Corporate Tax registration process and ensures timely filing. We cater to a diverse array of 
        businesses, offering comprehensive CT services. Recognizing the significance of CT
        registration, we provide a wide range of services. For any inquiries regarding CT registration, 
        feel free to contact us and schedule your consultation promptly.
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