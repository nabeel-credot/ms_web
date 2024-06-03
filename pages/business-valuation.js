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
import Valuation_FAQ from "../components/Accounting&Bookkeeping/Valuation_FAQ";
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
import TA_service from '../components/Accounting&Bookkeeping/TA_service'

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
        Business Valuation Advisory Services Firm in Abu Dhabi - MS	
        </title>
        <meta
          name="description"
          content="Discover top-notch business valuation services in Abu Dhabi. MS offers expert advisory for accurate business valuation. Trusted expertise for your needs.	"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Business Valuation Advisory Services Firm in Abu Dhabi - MS	"
        />
        <meta
          property="og:description"
          content="Discover top-notch business valuation services in Abu Dhabi. MS offers expert advisory for accurate business valuation. Trusted expertise for your needs.	"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/business valuation "
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
      
      <div className={styles.banner_container_subadvisorynew}>
        <Banner
          heading={
            <div style={{ fontWeight: "400" }}>Valuation </div>
          }
          height="428"
          //   white={true}
          detail="Our financial experts provide accurate and reliable business valuation services to help you make informed decisions. Trust us to deliver customized solutions tailored to your specific needs in UAE."
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
          detail="Understanding the value of your business is very important, even if it is not meant for any business transactions or for inheritance purposes. Value defines the worth. Choosing a transaction value that is fair to all parties and acceptable to them is crucial. Business valuation necessitates in-depth financial analysis, which should be performed by a team of valuation professionals. Understanding how value has been created in the past and how it will be created moving forward is essential for business valuation.
          Valuation is not a precise science. However, to determine the value that a business possess, the analysis cannot be done by just examining a company's past performance. We must comprehend the environment, including its economic, industrial, social, and other factors, as well as its internal resources and human capital, to evaluate its likelihood of future financial success."
          // showButton={true}
        />
      </div>

      {/* <TA_service/> */}
      
      {/* <Benefits headline={"Benefits of Transaction Advisory"}
      benifits={benifits}/> */}

      <Alreem_yMs
      background={`url(/images/mergeMs1.webp)`}
        title={"as your partner in Valuation"}
        content1={
          "MS team of professionals use multiple methods, approaches and applicable benchmarks while carrying out Business valuation services. MS will provide you genuine and accurate reports to help you make sound financial decisions, whether you are buying or selling a business."
        }
        
      />
     
      <div className={styles.newsBlogWrapper}>
        <ADGM_newsblogs categorySlug="adgm" />
      </div>

     <Guidence/>

      <div className={styles.faqWrapper}>
        <Valuation_FAQ />
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
