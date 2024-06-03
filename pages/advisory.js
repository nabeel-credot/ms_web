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
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/ADGM_FAQ_Service";
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
import Benefit_advisory from "../components/Accounting&Bookkeeping/Benefit_advisory";

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
       Advisory
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
      bgcolor="none"
        color="#FFFFFF"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
      />
      
      <div className={styles.banner_container_advisorynew}>
        <Banner
          heading={
            <div style={{ fontWeight: "400" }}>Advisory </div>
          }
          height="428"
          //   white={true}
          detail="Maximize, Strategize, and thrive in the ever-changing UAE business landscape with MS Advisory services. With expert guidance for growth, clear communication, and strategic insights, our comprehensive services include market analysis, financial modelling, and precise business valuation for optimal outcomes in transactions. Trust us to maximize value and navigate complexities."
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
       <div className={styles.mobAppointmerge_aq}>
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
            imagePath="/images/ms_ceo.jpg"
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
       
        <ADGM_servicenew
        // showBorderBottom={true}
          heading="Overview"
          detail="At MS, we value your every penny. Our expert team is dedicated to guiding you through the complexities of today's market as your partner in growth. Whether you're expanding, selling, or buying a business, our advisors will assist you. We go beyond just explaining numbers and forecasts – we provide advice on complete restructuring. We value clear and honest communication from you, as it builds trust and minimizes disruptions. This helps us give you the right advice for the best course of action.
          With our experts having access to complete market analysis and financial modelling, and in-depth knowledge in performing valuation, businesses can make well-informed decisions regarding potential opportunities in market. Our advisory assist in accurately valuing businesses involved in the transaction. This ensures that the deal is fair and maximizes value for both parties, optimizing the financial outcome."
        />
      </div>
      <div className={styles.assistContainer}>

      <Ms_assist/>
      </div>
     
      
     <Benefit_advisory/>
     {/* <Benefits benifits={benifits}/> */}
     {/* <ADGM_WHYMS buttonColor="#FFFFFF"
    buttonBackgroundColor="#192B3A" title={<span><span>Why MS as your</span><br/><span>Partner in Executive</span><br/> Search</span>}
    content1={"Whether you are a C-suit qualified candidate or a company searching for the right talent to fill the Clevel opening in UAE, MS is your perfect choice. Our years of experience with various clients from different areas makes us stand out from others in executive search. The services of MS are not limited to recruiting. We are in search of aspirants for companies who can fit into lead their team and with us qualified candidates can search for your opportunity to head the best group."}/>
     */}
     
      <Alreem_yMs
      background={`url(/images/mergeMs.jpg)`}
        title={"as your partner in Advisory Services"}
        content1={
          "MS stands by your side every step of the way, from initial consultation to achieving strong performance, lasting value, and responsible growth. Our team is equipped with extensive knowledge and experience to deliver a seamless and efficient setup tailored to meet your unique business needs. We excel in navigating complex regulatory landscapes, making it our forte to ensure your business operates smoothly within the regulatory framework. Together, we can future-proof your business for sustainable success in tomorrow's world. "
        }
      />
     
      <div className={styles.newsBlogWrapper}>
        <ADGM_newsblogs categorySlug="adgm" />
      </div>
<div className={styles.advisory_guid}>
     <Guidence/>
     </div>
      {/* <div className={styles.faqWrapper}>
        <ADGM_FAQ_Service />
      </div> */}
    
      
        <div className={Hstyles.footer}>
          <Footer />
        </div>
      

      {popup && <BookCall onClick={() => setPopup(false)} />}
    </div>
  );
}



 

export default ADVISORY;
