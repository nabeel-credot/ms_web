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
import Buy_side_FAQ from "../components/Accounting&Bookkeeping/Buy-side-FAQ";
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
      title:"Expertise and Experience",
      content:"Get wealth of experience and knowledge to the table, navigating the complexities of the acquisition process and providing valuable insights."
  },
  {
      num:"02",
      title:"Market Insight and Research",
      content:"We conduct thorough market research to verify whether potential target companies align with the buyer's strategic objectives."
  },
  {
      num:"03",
      title:"Valuation Services",
      content:"Determining the fair market value of a target company is critical. We employ various valuation methods to assess the worth of the target, ensuring that the buyer pays a reasonable and competitive price.      "
  },
  {
      num:"04",
      title:"Negotiation Skills",
      content:"Negotiating the terms of the deal, including purchase price and other relevant conditions, is a delicate process. We leverage their negotiation skills to secure favorable terms for the buyer, maximizing value and minimizing risks."
  },
  {
      num:"05",
      title:"Confidentiality",
      content:"Maintaining confidentiality during the acquisition process is essential. We play a key role in managing the flow of information and ensuring that sensitive details are protected throughout the transaction.      "
  },
  {
      num:"06",
      title:"Speed and Efficiency",
      content:"With their experience and resources, we can expedite the acquisition process. This speed and efficiency are particularly valuable in competitive markets where swift decision-making can be a key advantage."
  },
  ]  
  return (
    <div className={styles.container}>
      <Head>
        <title>
        Merger & Acquisition Advisory in Abu Dhabi | Buy Side Services - MS
        </title>
        <meta
          name="description"
          content="Explore comprehensive merger and acquisition advisory services in Abu Dhabi. Expert buy-side advisory for mergers and acquisitions. Contact MS today.	"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Merger & Acquisition Advisory in Abu Dhabi | Buy Side Services - MS"
        />
        <meta
          property="og:description"
          content="Explore comprehensive merger and acquisition advisory services in Abu Dhabi. Expert buy-side advisory for mergers and acquisitions. Contact MS today.	"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/buy-side-advisory"
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
      
      <div className={styles.banner_container_buy_side_advisorynew}>
        <Banner
          heading={
            <div style={{ fontWeight: "400" }}>Buy Side Advisory </div>
          }
          height="428"
          //   white={true}
          detail="Chart Your Growth Journey with Confidence through Expert Buy-Side Advisory Services. From Target Identification to Seamless Integration, We Empower Your Success. Unleash Opportunities, Minimize Risks – Choose MS for Informed Acquisitions and Sustainable Business Transformation."
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
          <img src="images/mobAppoint.svg" alt="appointment" />
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
          detail="Acquiring businesses can be a highly cost-effective strategy for business expansion. Companies evolve meticulously over time, tailoring their operations to align with organizational goals. However, if not executed judiciously, implementing excessive changes can affect a company's long-term sustainability.
          Engaging buy-side services holds several advantages for those contemplating a business acquisition. While you may have a general idea of your acquisition goals and anticipated benefits, a specialized buy-side advisor can expedite the process. We, the team at MS, bring extensive expertise to the table, simplifying the journey by negotiating and advocating for your best interests throughout the entire process.
          
          "
        />
      </div>
      <Benefits headline={"Benefits of Buy Side Advisory"}
      benifits={benifits}/>
      {/* <div style={{paddingBottom:"50px"}}>

      <Ms_assist/>
      </div> */}
     
     {/* <Types_mergers/> */}
    
      <Alreem_yMs
      background={`url(/images/mergeMs1.webp)`}
        title={"as your partner in Buy Side Advisory"}
        content1={
          "At MS, we are your dedicated partner in navigating the complex realm of buy-side advisory. With our client-centric approach and a proven track record in successful acquisitions, we stand ready to add significant value to your buy-side experience. Partner with us to unlock the full potential of your investment and achieve a transformative acquisition."
        }
        
      />
     
      <div className={styles.newsBlogWrapper}>
        <ADGM_newsblogs categorySlug="adgm" />
      </div>

     <Guidence/>

      <div className={styles.faqWrapper}>
        <Buy_side_FAQ />
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
