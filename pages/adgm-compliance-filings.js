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
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/ADGM_FAQ_Service";
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

  const contents = [
   
    {
      title: "Company Secretarial Services ",
      content:
        "Ensure compliance excellence in ADGM. Our Company Secretarial Services streamline compliance and foster governance excellence in ADGM.",
      image: "/images/serve5.jpg",
      image1:"/images/serve55.jpg",
    },

    {
      title: "Directorship Services",
      content:
        "In ADGM, our Directorship Services are crucial, providing strategic guidance for effective governance, compliance, and successful business success in a dynamic marketplace.",
      image: "/images/serve4.jpg",
      image1:"/images/serve44.jpg"
    },
    {
      title: "Nominee Authorised Signatory Services",
      content:
        "In ADGM, Nominee Authorized Signatory Services are crucial for streamlined transactions, ensuring regulatory compliance.",
      image: "/images/serve7.jpg",
      image1:"/images/serve77.jpg",
    },
    {
      title: "Residency Services",
      content:
        "Residency Services in ADGM are crucial, simplifying relocation and fostering a conducive business environment.",
      image: "/images/serve3.jpg",
      image1:"/images/serve33.jpg"
    },
    {
      title: "Bank Account Assistance",
      content:
        "Bank Account Assistance in ADGM is key for seamless financial setup, enabling efficient transactions and international business operations.",
      image: "/images/serve2.jpg",
      image1:"/images/serve22.jpg"
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>
        Best Compliance Filings Services in ADGM | MS
        </title>
        <meta
          name="description"
          content="Optimize your compliance filings in ADGM with MS. Our expert team provides custom document preparation and strategic consulting to streamline your business.	"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Compliance Filings Services in ADGM | MS"
        />
        <meta
          property="og:description"
          content="Optimize your compliance filings in ADGM with MS. Our expert team provides custom document preparation and strategic consulting to streamline your business.	"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/adgm-compliance-filings"
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
          heading={<div style={{ fontWeight: "400" }}>Compliance Filings</div>}
          height="428"
          //   white={true}
          detail="In ADGM, compliance filings are paramount, ensuring businesses adhere to regulatory standards and maintain transparency. These filings not only demonstrate commitment to legal requirements but also foster trust, credibility, and sustained success in the globally recognized business environment of ADGM.
          "
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
          title="Let MS empower your business in ADGM"
          // position="CEO & Founder of MS"
        />
      </div>
      <div>
        <ADGM_servicenew
          heading="Mindful Compliance, Timely filings"
          detail="Compliance filings in ADGM are integral to business success, serving as a cornerstone for regulatory adherence and operational transparency. Ensuring timely and accurate submissions, these filings underscore a commitment to legal standards, mitigating risks and bolstering trust with stakeholders. Beyond regulatory compliance, they play a pivotal role in maintaining financial integrity, supporting strategic decision-making, and safeguarding a company's reputation. By navigating the intricate regulatory landscape of ADGM, businesses not only enhance their global standing but also demonstrate a dedication to ethical business practices, fostering long-term sustainability and credibility in the international marketplace."
          // showButton={true}
        />
      </div>
     
      <div>
      <Alreem_yMs  
      title={"as your partner for Compliance Filings in ADGM "}
      content1={"Compliance filings in ADGM with MS will be seamless with our expert team. MS turns as your reliable guide in the complex regulatory environment of ADGM. Our customized services, which range from accurate document preparation to strategic consulting, accelerate the compliance process and free up time for businesses to concentrate on their core competencies. "}
    content2={"Let your business be globally recognized with MS."}
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
