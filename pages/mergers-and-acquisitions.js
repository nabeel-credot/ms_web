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
import MA_FAQ from "../components/Accounting&Bookkeeping/MA_FAQ";
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
      title:"Strategic Expertise",
      content:"Benefit from our seasoned professionals who bring deep industry knowledge and strategic insights to guide you through every phase of the M&A process."
  },
  {
      num:"02",
      title:"Tailored Solutions",
      content:"Receive personalized M&A strategies crafted to align with your unique business goals, ensuring a customized approach that maximizes value and minimizes risks."
  },
  {
      num:"03",
      title:"Seamless Integration",
      content:"Our meticulous approach to post-merger integration ensures a smooth transition, fostering operational efficiency and synergy realization for sustained business growth."
  },
  {
      num:"04",
      title:"Value Maximization",
      content:"Our commitment is to maximize the overall value of your M&A transactions, whether through cost savings, revenue synergies, or strategic positioning in the market. "
  },
  {
      num:"05",
      title:"Long-Term Success",
      content:"Our goal is not just immediate success but to lay the foundation for long-term prosperity, fostering a future where your business continues to thrive in the evolving business landscape."
  },
 
  ]    
  return (
    <div className={styles.container}>
      <Head>
        <title>
        Mergers & Acquisitions Services in Abu Dhabi, Dubai, UAE | M&A Consultant - MS

        </title>
        <meta
          name="description"
          content="Experience top-notch Mergers & Acquisitions Services in Abu Dhabi, Dubai, UAE with MS. Our expert team helps clients achieve business success through effective strategies."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Mergers & Acquisitions Services in Abu Dhabi, Dubai, UAE | M&A Consultant - MS
"
        />
        <meta
          property="og:description"
          content="Experience top-notch Mergers & Acquisitions Services in Abu Dhabi, Dubai, UAE with MS. Our expert team helps clients achieve business success through effective strategies."
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
      bgcolor="none"
        color="#FFFFFF"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
      />
      
      <div className={styles.banner_container_ma_advisorynew }>
        <Banner
          heading={
            <div style={{ fontWeight: "400" }}>Mergers and Acquisitions </div>
          }
          height="428"
          //   white={true}
          detail="Get rid of the complexities of mergers and acquisitions effortlessly with MS’s strategic expertise. From due diligence to integration, trust us to sculpt a future where your business thrives through smart M&A solutions. Elevate your business strategy for a future of unparalleled success."
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
              Schedule yours Appointment
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
          detail="Looking for entry into new markets through an acquisition or merger, our team is here to assist you in structuring transactions that align with your goals. Our M&A experts provide specialized advice throughout the M&A process, helping companies optimize operational efficiency. We strive to enhance transaction value and mitigate risks, drawing on our vast expertise in M&A. Having a strong grip on recent trends, our highly qualified team delivers tailored solutions for your strategy.
          Our extensive experience across industries, coupled with deep insights, enables us to bring tangible value to all your M&A transactions. Whether it's crafting the right strategy, addressing potential issues, or implementing changes, we guide our clients through the entire transaction life cycle, helping them attain maximum synergy.
          "
        />
      </div>
     
      <Benefits headline={"Benefits of availing MS"}
      benifits={benifits}/>
      {/* <div style={{paddingBottom:"50px"}}>

      <Ms_assist/>
      </div> */}
     
     {/* <Types_mergers/> */}
     <Types_mergers/>
      <Alreem_yMs
      background={`url(/images/mergeMs1.webp)`}
        title={"as your partner in Mergers and Acquisitions"}
        content1={
          "With a dedicated team of professionals possessing extensive experience in financial analysis, legal compliance, and strategic planning, we excel at identifying lucrative opportunities and mitigating potential risks in the M&A landscape. Our comprehensive approach involves meticulous due diligence, strategic negotiations, and post-merger integration support. We understand the complexities and nuances of M&A transactions, tailoring our services to align with the unique needs and objectives of each client."
        }
        
      />
     
      <div className={styles.newsBlogWrapper}>
        <ADGM_newsblogs categorySlug="adgm" />
      </div>

     <Guidence/>

      <div className={styles.faqWrapper}>
        <MA_FAQ />
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
