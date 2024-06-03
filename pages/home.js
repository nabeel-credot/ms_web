import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import Hstyles from "../styles/Home.module.css";
import Quote from "../components/Accounting&Bookkeeping/Quote_home";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-Difc";
// import Banner from "../components/Accounting&Bookkeeping/ADGM_bannerTop";
import Banner from "../components/Accounting&Bookkeeping/Home_banner";

import BookCall from "../components/Popup/Popup";

import { useRouter } from "next/router";

import gqlRequest from "../utilities/graphql";
import ADGM_overview from "../components/Accounting&Bookkeeping/ADGM_overview";
import ADGM_Ms_Compliance_Service from "../components/Accounting&Bookkeeping/ADGM_Ms_Compliance_Service";
import ADGM_WHYMS from "../components/Accounting&Bookkeeping/ADGM_WHYMS";
import DIFC_FAQ_Service from "../components/Accounting&Bookkeeping/DIFC_FAQ service";
import ADGM_Guidence from "../components/Accounting&Bookkeeping/ADGM_Guidence";
import VideoCard from "../components/Accounting&Bookkeeping/VideoCard_difc";
import Media from "../components/Accounting&Bookkeeping/Media2";
import Container from "../components/Common/Container";
import ADGM_newsblogs from "../components/Accounting&Bookkeeping/ADGM_newsblogs";
import Al_reemBanner from "../components/Accounting&Bookkeeping/Al_reemBanner";
import Adgm_benefits from "../components/Accounting&Bookkeeping/Adgm_benefits";
import Opportunity_abudhabi from "../components/Accounting&Bookkeeping/Opportunity_abudhabi";
import ADGM_servicenew from "../components/Accounting&Bookkeeping/ADGM_servicenew";
import Testimonial from "../components/Accounting&Bookkeeping/Client_hom";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import Appointment from "../components/Accounting&Bookkeeping/Appointment_schedule";
import Alreem_yMs from "../components/Accounting&Bookkeeping/Alreem_yMs";
import Videotestimonial from "../components/Accounting&Bookkeeping/Videotestimonial";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Ms_assist from "../components/Accounting&Bookkeeping/DIFC_assist";
import Types_mergers from "../components/Accounting&Bookkeeping/Types_mergers";
import Guidence from "../components/Accounting&Bookkeeping/Guidence";
import Benefits from "../components/Accounting&Bookkeeping/Benefits";
import SERVICES from "../components/Accounting&Bookkeeping/Home_servicenew"
import Home_features from '../components/Accounting&Bookkeeping/Home_features'
import Home_empower from '../components/Accounting&Bookkeeping/Home_empower'
import Home_taxconsultant from '../components/Accounting&Bookkeeping/Home_taxconsultant'
import Home_business from '../components/Accounting&Bookkeeping/Home_business'
import Where_need from '../components/Accounting&Bookkeeping/whereyourneed_home'
import Adgm from '../components/Accounting&Bookkeeping/ms@adgm'
import Difc from '../components/Accounting&Bookkeeping/ms@difc'
import Y_ms from '../components/Accounting&Bookkeeping/y_mshom'
import Home_partners from '../components/Accounting&Bookkeeping/home_partners'
import How_help from '../components/Accounting&Bookkeeping/how_helphom'
import Being_ms from '../components/Accounting&Bookkeeping/being_ms'
import Achievements from '../components/Accounting&Bookkeeping/Achievements_hom'
import Connect from '../components/Accounting&Bookkeeping/Connect_hom'
import Have_Ques from '../components/Accounting&Bookkeeping/have_qns'
function ADVISORY() {
    const [appoint, setAppoint] = useState(false);
    const [popup, setPopup] = useState(false); 
    const benifits=[
      {
      num:"01",
      title:"Risk Identification and Mitigation",
      content:"Advisors identify potential risks early in the process, allowing businesses to develop strategies to mitigate these risks and helps in minimizing unforeseen challenges during and after the transaction."
  },
  {
      num:"02",
      title:"Valuation Expertise",
      content:"Accurate valuation is crucial in negotiating a fair deal. Transaction advisors bring expertise in valuation methodologies, ensuring that the deal reflects the true value of the business and satisfies the expectations of both the buyer and the seller."
  },
  {
      num:"03",
      title:"Synergy Identification",
      content:"Advisors assess potential synergies between the acquiring and target companies, helping to identify areas where the combined entity can achieve cost savings, operational efficiencies, and enhanced overall value."
  },
  {
      num:"04",
      title:"Efficient Execution",
      content:"Advisors streamline the entire M&A process, from due diligence to post-transaction integration, ensuring that each step is executed efficiently. "
  },
  {
      num:"05",
      title:"Regulatory Compliance",
      content:"Navigating the complex regulatory landscape is a critical aspect of any transaction. Transaction advisors ensure that the deal complies with legal and regulatory requirements, obtaining necessary approvals and addressing potential challenges."
  },
  {
      num:"06",
      title:"Enhanced Negotiation Position",
      content:"With comprehensive knowledge of the target company's strengths and weaknesses, advisors assist in negotiating favourable terms for their clients. "
  },
  ] 
  return (
    <div className={styles.container}>
      <Head>
        <title>
        HOME
        </title>
        <meta
          name="description"
          content="MS provides comprehensive company set up services in Abu Dhabi Global Market (ADGM), including company registration, corporate governance, etc. Register with MS"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Mergers and Aqusitions | MS Group"
        />
        <meta
          property="og:description"
          content="MS provides comprehensive company set up services in Abu Dhabi Global Market (ADGM), including company registration, corporate governance, etc. Register with MS"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/mergers-and-aquisition"
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
          href="https://ms-ca.com/mergers-and-aquisition"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar
      smartNav="true"
        color="white"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
        bgcolor="transparent"
      />
      
      <div className={styles.banner_container_home}>
        <Banner
          heading={
            <div style={{ fontWeight: "400" }}>MS Your Elite Partner for<br/> Global Business Success  </div>
          }
          height="428"
          //   white={true}
          detail={<span>Rooted in our pro-business ethos, backed by diverse expertise and global jurisdiction experience, trust forms our core. We ensure a single-source solution for all you’ve searched.</span>}
        />
        </div>
        <div className={styles.home_featuresContainer}>
        <Home_features/>
        </div>
        <Home_empower/>
    <div className={styles.Home_serviceContainer}> 
    <SERVICES/>
    </div>
<Home_taxconsultant/>
<div className={styles.yms_homContainer}>
<Y_ms/>
</div>
<div className={styles.home_businessContainer}><Home_business/></div>
    <Home_partners/>
     <Where_need/>
     <Have_Ques/>
     <div>
        <Adgm />
      </div>
      <Difc/>
      <Testimonial/>
     <Quote/>
     <How_help/>
     <Being_ms/>

    <Achievements/>
    <Connect/>
      
     
        <div className={Hstyles.footer}>
          <Footer />
        </div>
     

      {popup && <BookCall onClick={() => setPopup(false)} />}
    </div>
  );
}



 

export default ADVISORY;
