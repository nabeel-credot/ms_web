import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import Hstyles from "../styles/Home.module.css";
import estyles from '../components/executive/executivenew.module.css'

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer copy";
// import Banner from "../components/Accounting&Bookkeeping/ADGM_bannerTop";
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2";

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
import Ms_assist from "../components/Accounting&Bookkeeping/DIFC_assist";
import Types_mergers from "../components/Accounting&Bookkeeping/Types_mergers";
import Guidence from "../components/Accounting&Bookkeeping/Guidence";
import Benefits from "../components/Accounting&Bookkeeping/Benefits";
import DIFC_SERVICE from "../components/Accounting&Bookkeeping/DIFC_servicenew"
import DIFC_TECH from "../components/Accounting&Bookkeeping/DIFC_Tech"
import ADV from "../components/Accounting&Bookkeeping/DIFC_Advantage"
import Business from "../components/Accounting&Bookkeeping/DIFC_Business"
import OutsourcinGallerys from "../components/executive/outsourcegallerynew"
import ExecutiveServices from "../components/executive/executive_servicenew"
import ExeBenefits from "../components/executive/executivebenifits-new"

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
        Top Executive Recruiting Firm | Executive Recruitment Consultant | MS
        </title>
        <meta
          name="description"
          content="Enhance your leadership team with top executive recruiting services. Partner with experienced executive recruitment consultants for strategic hires. Contact us!	"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Top Executive Recruiting Firm | Executive Recruitment Consultant | MS"
        />
        <meta
          property="og:description"
          content="Enhance your leadership team with top executive recruiting services. Partner with experienced executive recruitment consultants for strategic hires. Contact us!	"
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
bgcolor={"transparent"}
color="white"
hoverClr="#D4AE31"
img1="/images/darrow.svg"
img2="/images/uarrow.svg"/>
      
      <div className={estyles.banner_container_executive}>
        <Banner
          heading={
            <div style={{ fontWeight: "400" }}>Executive Search In Abu Dhabi, Dubai, UAE  </div>
          }
          height="428"
          //   white={true}
          detail=" To make your business escalate, you need great leaders in the diverse UAE market. With  years of experience in handling multiple industry - based clients makes us the perfect choice to hire the top C-suit talent for your company or to make you the primary preference of companies as their head."
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
            imagePath="/images/ms_ceo.jpg"
            author="Mohammad Shafeek"
            title={<span>Let&apos;s talk about how <span style={{fontWeight:"500"}}>MS</span> serving <span style={{fontWeight:"500"}}>ADGM</span></span>}
            position="CEO & Founder of MS"
            background="linear-gradient(180deg, rgba(0, 70, 109, 0) 0%, #192B3A 68.42%)"
            
          />
        </Container>
      </div>
      <div className={styles.mobvideo1}>
        <VideoCard

          imagePath="/images/CEO_mobile.png"
          title="Let MS empower your business in ADGM"
            background={`linear-gradient(180deg, rgba(0, 70, 109, 0) 0%, #192B3A 68.42%)`}
        />
      </div> */}
      <div>
        {/* <ADGM_overview /> */}
        <ADGM_servicenew
        // showBorderBottom={true}
          heading="Overview Of Executive 
          Search "
          detail="Deciding on the right talent to fit into your team 
          can bring magic to your business. MS offers you a 
          platform where you can find the apt pick to C-suit 
          level talent for your team or you could head a 
          service of an eminent business firm, if you got the 
          flair that MS is searching for. The hiring process 
          with us will be affordable and always surge the 
          quality of your talent pool. Our personalized hiring 
          will be only after knowing your unique needs. MS 
          gives priority to quality hiring with a timely 
          approach considering the demands of UAE business 
          landscape. Not just hiring, we also train the 
          candidate in a way that you will get someone who 
          is already completely aware of your business and 
          its key areas. We provide you with C- level 
          candidates in Compliance, Finance and Tax, 
          keeping the success of your company as the 
          priority.
          "
          paddingBottom="24px"
        />
      </div>
    
      <OutsourcinGallerys/>
      {/* <ExecutiveServices/> */}
      <div><ExeBenefits/></div>
      <Alreem_yMs
      background={'url("./images/m1.webp")'}
        title={"as your Partner in Executive Search"}
        content1={
          "Whether you are a C-suit qualified candidate or a company searching for the right talent to fill the C-level opening in UAE, MS is your perfect choice. Our years of experience with various clients from different areas makes us stand out from others in executive search. The services of MS are not limited to recruiting. We are in search of aspirants for companies who can fit into lead their team and with us qualified candidates can search for your opportunity to head the best group. Revolutionize the C level recruiting with MS."
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
