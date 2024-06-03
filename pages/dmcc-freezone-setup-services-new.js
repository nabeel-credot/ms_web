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
import ADGM_Ms_Tax_Service from "../components/Accounting&Bookkeeping/ADGM_Ms_Tax_Service";
import ADGM_WHYMS from "../components/Accounting&Bookkeeping/ADGM_WHYMS";
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/ADGM_FAQ_Service";
import VideoCard from "../components/Accounting&Bookkeeping/VideoCard";
import Container from "../components/Common/Container";
import ADGM_newsblogs from "../components/Accounting&Bookkeeping/ADGM_newsblogs";
import ADGM_Ms_Coporate_Service from "../components/Accounting&Bookkeeping/ADGM_Ms_Coporate_Service";
import Appointment from "../components/Accounting&Bookkeeping/Appointment_schedule";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import Alreem_yMs from "../components/Accounting&Bookkeeping/Alreem_yMs";
import Media from "../components/Accounting&Bookkeeping/Media"
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";
import ADGM_Guidence from "../components/Accounting&Bookkeeping/ADGM_Guidence";
import Guidence from "../components/Accounting&Bookkeeping/Guidence";
import DMCC_services from "../components/Accounting&Bookkeeping/DMCC_services";
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
      title: "Corporate",
      content:
        "Navigate tax compliance seamlessly, ensuring financial accuracy for sustainable business growth.",
    image:"/images/dmcc_corporate.jpg",
    image1:"/images/dmcc_corporate.jpg",
    link:"/vat",
    
      },
    {
      title: "Compliance",
      content:
        "Corporate Tax Services in ADGM: Precision for compliance, strategic tax planning, and financial excellence, vital for success.",
    image:"/images/dmcc_compliance.jpg",
    image1:"/images/coperatetax.jpg",
    link:"/corporate-tax-service",
    
      },
  
    {
      title: " Accounting",
      content:
        "Ensure ESR compliances, prevent tax evasion, and maintain economic substance with regulatory services.",
    image:"/images/dmcc_accounting.jpg",
    image1:"/images/dmcc_accounting.jpg",
    link:"/esr"
      },
      {
        title: " Tax",
        content:
          "Ensure ESR compliances, prevent tax evasion, and maintain economic substance with regulatory services.",
      image:"/images/dmcc_tax.jpg",
      image1:"/images/dmcc_tax.jpg",
      link:"/esr"
        },
   
    
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>
        Expert Tax Consultancy Services | Tax Consultants in Abu Dhabi, Dubai, UAE - MS
        </title>
        <meta
          name="description"
          content="Looking for expert tax consultants in UAE? Look no further than MS. We provide taxation consultancy services to businesses and companies in Abu Dhabi, Dubai, UAE"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Expert Tax Consultancy Services | Tax Consultants in Abu Dhabi, Dubai, UAE - MS"
        />
        <meta
          property="og:description"
          content="Looking for expert tax consultants in UAE? Look no further than MS. We provide taxation consultancy services to businesses and companies in Abu Dhabi, Dubai, UAE"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/tax-service"
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
          href="https://ms-ca.com/tax-service"
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
      <div className={styles.banner_container_dmccsubservice}>
        <Banner
          heading={<div style={{ fontWeight: "400" }}>DMCC Freezone Setup Services</div>}
          height="428"
          //   white={true}
          detail="Discover an award-winning international financial center that follows international best practices, offering transparency and pioneering regulatory frameworks. With its business-friendly operations, application of English Common Law, independent legal jurisdiction, and strong local and international strategic partnerships, ADGM provides the ideal environment for the business community to thrive."
        />
        {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}
        <div className={styles.appointmentdiv}>
          <span className={styles.banner_popup} onClick={()=>setAppoint(true)} >
            <img src="/images/dmccappointment.svg" className={styles.appointmentImage} />
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
          fillcolor="#E40D75"

           background={`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000552 100%)`}
            imagePath="/images/ms_ceo.jpg"
            author="Mohammad Shafeek"
            title="Let MS empower your business in ADGM"
            position="Founder & Group CEO, MS"
          />
        </Container>
      </div>
      <div className={styles.mobvideo1}>
        <VideoCard
          fillcolor="#E40D75"
          imagePath="/images/CEO_mobile.png"
          title="Let MS empower your business in ADGM"
        />
      </div>
      <div>
        <ADGM_servicenew
        showBorderBottom={true}
          heading="MS | DMCC Freezone Setup Services"
          detail="With more than 22000 companies and 170 new ones who join each month, DMCC is the dedicated global centre for wide range of industries and sectors. If you are thinking about setting up a business in the DMCC Free Zone, MS is here to help you in Dubai every way possible starting from pre business setup services onwards. We can help you designing a unique plan and package, establish the best corporate structure, establish and complete the registration process in dmcc portal, locate the ideal location of your future company, and support you as you progress toward success in the world's top free zone. Write to us to know more about DMCC company formation and License Cost. "
          // showButton={true} 
        />
      </div>
      <div>
        <DMCC_services servicetitle={"Services in DMCC by MS"} contents={contents}/>
        {/* <ADGM_Ms_Coporate_Service contents={contents} servicetitle={<span>Tax Services in <span style={{fontWeight:"500"}}>ADGM <span style={{fontWeight:"300"}}> by </span> MS</span></span>}/> */}
      </div>
      <div className={styles.coporateserviceYms}>
      <Alreem_yMs title={'as your Service Provider '} 
      background={`url(/images/difcMs.jpg)`}
      content1={'Embark on a journey to achieve corporate excellence with MS in DMCC. We are a team of energetic, passionate, and curious technologists, lawyers, problem-solvers, and business builders with diverse expertise and backgrounds. We prioritise efficiency, transparency, and regulatory adherence, ensuring a smooth journey from incorporation to ongoing support. With our client-centric approach, cutting-edge technology, and in-depth understanding of the ecosystem, we empower your business to thrive in the DMCC.'}
      content2={' Consider MS not only as a service partner but also as a catalyst for your business excellence in the DMCC. Let us form a strategic collaboration that goes beyond conventional limits.'}/>
        {/* <ADGM_WHYMS buttonBackgroundColor="#D4AE31" buttonColor="#FFF"/> */}
      </div>
      <div className={styles.newsBlogWrapper} >
        <ADGM_newsblogs categorySlug="adgm" />
      </div>

      <Guidence/>


      <div className={styles.faqWrapper} >
        <ADGM_FAQ_Service />
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
 

  return { props: { smartupVideo: response1?.data?.videos?.edges } };
}

export default ADGM;
