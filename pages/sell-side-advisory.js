import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import Hstyles from "../styles/Home.module.css";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer copy";
// import Banner from "../components/Accounting&Bookkeeping/ADGM_bannerTop";
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2new";

import BookCall from "../components/Popup/Popup";

import { useRouter } from "next/router";

import gqlRequest from "../utilities/graphql";
import ADGM_overview from "../components/Accounting&Bookkeeping/ADGM_overview";
import ADGM_Ms_Compliance_Service from "../components/Accounting&Bookkeeping/ADGM_Ms_Compliance_Service";
import ADGM_WHYMS from "../components/Accounting&Bookkeeping/ADGM_WHYMS";
import Sell_side_FAQ from "../components/Accounting&Bookkeeping/Sell_side_FAQ";
import ADGM_Guidence from "../components/Accounting&Bookkeeping/ADGM_Guidence";
import VideoCard from "../components/Accounting&Bookkeeping/VideoCard";
import Media from "../components/Accounting&Bookkeeping/Media2";
import Container from "../components/Common/Container";
import ADGM_newsblogs from "../components/Accounting&Bookkeeping/ADGM_newsblogs";
import Al_reemBanner from "../components/Accounting&Bookkeeping/Al_reemBanner";
import Adgm_benefits from "../components/Accounting&Bookkeeping/Adgm_benefits";
import Opportunity_abudhabi from "../components/Accounting&Bookkeeping/Opportunity_abudhabi";
import ADGM_servicenew from "../components/Accounting&Bookkeeping/ADGM_servicenew";
import Testimonial from "../components/Accounting&Bookkeeping/Testimonial";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import Appointment from "../components/Accounting&Bookkeeping/Appointment_schedule";
import Alreem_yMs from "../components/Accounting&Bookkeeping/Alreem_yMs";
import Videotestimonial from "../components/Accounting&Bookkeeping/Videotestimonial";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Ms_assist from "../components/Accounting&Bookkeeping/Ms_assist";
import Types_mergers from "../components/Accounting&Bookkeeping/Types_mergers";
import Guidence from "../components/Accounting&Bookkeeping/Guidence";
import Benefits from "../components/Accounting&Bookkeeping/Benefits";

function ADVISORY() {
    const [appoint, setAppoint] = useState(false);
    const [popup, setPopup] = useState(false);  
    const benifits=[
      {
          num:"01",
      title:"Optimized Valuation",
      content:"Our experienced team conducts a thorough analysis of your business, leveraging market insights and financial expertise to determine the optimal valuation. We work to maximize the value of your business in the current market."
  },
  {
      num:"02",
      title:"Confidentiality Assurance",
      content:"We understand the sensitivity of selling a business. Our robust confidentiality protocols ensure that the process remains discreet, safeguarding your business's reputation and minimizing disruption to daily operations."
  },
  {
      num:"03",
      title:"Professional Representation",
      content:"Presenting your business in the best light is essential. Our team provides professional representation, showcasing the strengths and potential of your company to potential buyers."
  },
  {
      num:"04",
      title:"Streamlined Process",
      content:"Selling a business can be complex. Our team efficiently manages the entire process, from preparing marketing materials to coordinating due diligence, ensuring a smooth and timely transaction."
  },
  {
      num:"05",
      title:"Negotiation Expertise",
      content:"Negotiating the best terms is a critical aspect of the sale. Our experienced negotiators work tirelessly to secure favorable terms for you, maximizing your returns and ensuring a successful transaction."
  },
  {
      num:"06",
      title:"Focus on Your Core Business",
      content:"With us handling the complexities of the sale, you can stay focused on managing and growing your business until the deal is successfully closed."
  },
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>
        Expert Business Advisory in Abu Dhabi, Dubai, UAE | Sell Side Advisory Services | MS	
        </title>
        <meta
          name="description"
          content="Maximize your business potential with expert advisory in Abu Dhabi, Dubai, UAE. MS provides sell-side services for optimal outcomes.	"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Expert Business Advisory in Abu Dhabi, Dubai, UAE | Sell Side Advisory Services | MS	"
        />
        <meta
          property="og:description"
          content="Maximize your business potential with expert advisory in Abu Dhabi, Dubai, UAE. MS provides sell-side services for optimal outcomes.	"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/sell-side-advisory"
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
      bgcolor="none"
        color="#FFFFFF"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
      />
      
      <div className={styles.banner_container_sell_side_advisorynew}>
        <Banner
          heading={
            <div style={{ fontWeight: "400" }}>Sell Side Advisory </div>
          }
          height="428"
          //   white={true}
          detail="Add more value to your M&A endeavours with our premier sell-side advisory services. Trust us to seamlessly execute your sell-side strategy, leveraging our insights and network to unlock endless opportunities."
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
              alt="appointment"
              className={styles.appointmentImage}
            />
            <span className={styles.appointhover}>
              {" "}
              Schedule your Appointment
            </span>
          </span>
        </div>
      </div>
      <div className={styles.mobAppoint}>
        <span
          className={styles.banner_popupmob}
          onClick={() => setAppoint(true)}
        >
          <img src="/images/mobAppoint.svg" alt="appointment" />
          Schedule your Appointment
        </span>
      </div>
      {/* <div className={styles.video1}>
        <Container>
          <VideoCard
          background={`linear-gradient(180deg, rgba(0, 70, 109, 0) 0%, rgba(25, 43, 58, 1) 100%)`}
            imagePath="/images/ms_ceo1.webp"
            author="Mohammad Shafeek"
            title={<span>Let&apos;s talk about how <span style={{fontWeight:"500"}}>MS</span> serving <span style={{fontWeight:"500"}}>ADGM</span></span>}
            position="Founder & Group CEO, MS"
          />
        </Container>
      </div>
      <div className={styles.mobvideo1}>
        <VideoCard
          imagePath="/images/CEO_mobile.png"
          title={<span>Let&apos;s talk about how <span style={{fontWeight:"500"}}>MS</span> serving <span style={{fontWeight:"500"}}>ADGM</span></span>}
        />
      </div> */}
      <div>
        {/* <ADGM_overview /> */}
        <ADGM_servicenew
        // showBorderBottom={true}
          heading="Overview"
          detail="Navigating the sale of a business is a complex and time-intensive undertaking. Numerous challenging tasks must be addressed before the selling process commences. Strategic value planning is a key in positioning your firm accurately in the market and securing an optimal valuation. Engaging MS, on the sell-side business advisory is a prudent choice, as our expertise can assist in prompt preparation, ensuring a seamless and stress-free transaction experience.
          Organizations can identify the value of their portfolios and reduce interruptions with the aid of MS sell-side advisory services. Our team of specialists assist you to secure optimal value in your business transactions through deal strategy, buyer identification, financial modelling, value optimization, negotiation and deal execution."
        />
      </div>
      <Benefits headline={"Benefits of Sell Side Advisory"}
      benifits={benifits}/>
      {/* <div style={{paddingBottom:"50px"}}>

      <Ms_assist/>
      </div> */}
     
     {/* <Types_mergers/> */}
    
      <Alreem_yMs
      background={`url(/images/mergeMs1.webp)`}
        title={"as your partner in Sell Side Advisory"}
        content1={
          "From meticulously valuing your business to crafting compelling marketing materials, conducting thorough due diligence, and negotiating favourable terms, MS orchestrate every step of the process with precision. Our expertise extends beyond transactions to strategic positioning, ensuring that your business is showcased to its full potential. With a client-centric approach and a track record of successful deals, we are poised to add significant value to your sell-side experience."
        }
        
      />
     
      <div className={styles.newsBlogWrapper}>
        <ADGM_newsblogs categorySlug="adgm" />
      </div>

     <Guidence/>

      <div className={styles.faqWrapper}>
        <Sell_side_FAQ />
      </div>
      {/* <div className={styles.guidenceWraper}>
        <ADGM_Guidence />
      </div> */}
    
        <div className={Hstyles.footer}>
          <Footer />
      
      </div>

      {popup && <BookCall onClick={() => setPopup(false)} />}
    </div>
  );
}



 

export default ADVISORY;
