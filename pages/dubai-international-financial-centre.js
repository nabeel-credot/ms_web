import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import Hstyles from "../styles/Home.module.css";

//components
import Navbar from "../components/Navbar_difc";
import Footer from "../components/Footer-Difc";
// import Banner from "../components/Accounting&Bookkeeping/ADGM_bannerTop";
import Banner from "../components/Accounting&Bookkeeping/DIFC_Bannernew";

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
import ADGM_servicenew from "../components/Accounting&Bookkeeping/DIFC_service_new";
import Testimonial from "../components/Accounting&Bookkeeping/Testimonial";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import Appointment from "../components/Accounting&Bookkeeping/Appointment_schedule_difc";
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
import COST_DETAILS from '../components/Accounting&Bookkeeping/DIFC_cost_and_details'
import Opportunity_dubai from "../components/Accounting&Bookkeeping/Opportunity_dubai"
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
        DIFC License for Tech Companies | DIFC Company Set Up - MS	
        </title>
        <meta
          name="description"
          content="Empower your tech start-up with a DIFC License. Explore fintech opportunities at DIFC Innovation Hub & DIFC Fintech Hive. Get started now!"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content=" DIFC License for Tech Companies | DIFC Company Set Up - MS	"
        />
        <meta
          property="og:description"
          content="Empower your tech start-up with a DIFC License. Explore fintech opportunities at DIFC Innovation Hub & DIFC Fintech Hive. Get started now!"
        />
        <meta
          property="og:url"
          content="	https://ms-ca.com/dubai-international-financial-centre"
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
        bgcolor="white"
        color="black"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
      />
      
      <div className={styles.banner_container_difcnew}>
        <Banner
          heading={
            <div style={{ fontWeight: "400" }}>Dubai International Financial Centre (DIFC)</div>
          }
          height="428"
          //   white={true}
          detail={<span>Dubai International Financial Centre (DIFC) is the leading MEASA financial hub. With two decades of experience, it boosts trade and investment connections across 72 countries with a GDP of USD 8 trillion. DIFC links MEASA markets to Asia, Europe, and the Americas through its Dubai location, featuring an internationally recognized, independent regulator, and an English Common Law framework.</span>}
        />
        {appoint && (
          <div className={styles.appointwrapper}>
            {" "}
            <Appointment appoint={appoint} setAppoint={setAppoint}  />
          </div>
        )}
        <div className={styles.appointmentdiv}>
          <span
            className={styles.banner_popup_difc}
            onClick={() => setAppoint(true)}
          >
            <img

              src="/images/difcappointment.svg"

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
      <div className={styles.mobAppoint} style={{background:"#3C166B"}}>
        <span
          className={styles.banner_popupmob}
          onClick={() => setAppoint(true)}
        >
          <img src="/images/mobAppoint1_difc.svg" alt="appointment" />
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
          title={<span>Let <span style={{fontWeight:"500"}}>MS</span> empower your business in <span style={{fontWeight:"500"}}>DIFC</span></span>}
            background={`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.42%)`}
        />
      </div>
      <div>
        {/* <ADGM_overview /> */}
        <ADGM_servicenew
        // showBorderBottom={true}
          heading="Your Bridge to the Future of Finance"
          detail="DIFC, the Dubai International Financial Centre, stands as a powerhouse of excellence in the world of finance. Renowned as a world-class financial centre, DIFC has redefined the landscape of global
          finance with its cutting-edge infrastructure, independent regulatory framework, and a vibrant,
          multinational community of businesses and professionals. As a hub for international financial
          institutions, law firms, and service providers, DIFC offers a dynamic ecosystem where innovation,
          growth, and global connectivity thrive. With its exceptional tax advantages, transparent legal system, and strategic location in the heart of Dubai, DIFC provides an unrivalled platform for businesses seeking to make their mark on the international financial stage.
          DIFC also offers the largest innovation community in the region, supporting companies and
generating new economic value. Discover the world of opportunities that DIFC presents to those who
aspire to be at the forefront of the financial industry.
          "
        />
      </div>
      <div className={styles.testimonialvideowrapper_difc}> 
<Videotestimonial/></div> 
      <div style={{paddingBottom:"70px"}}>

      <Ms_assist/>
      </div>
    <div className={styles.Difc_serviceContainer}> 
    <DIFC_SERVICE/>
    </div>
<DIFC_TECH/>
<COST_DETAILS/>
<div className={styles.advantage_container}><ADV/></div>
    
     <Business/>
     <Opportunity_dubai/>
     <div>
        <Testimonial />
      </div>
     {/* <ADGM_WHYMS buttonColor="#FFFFFF"
    buttonBackgroundColor="#192B3A" title={<span><span>Why MS as your</span><br/><span>Partner in Executive</span><br/> Search</span>}
    content1={"Whether you are a C-suit qualified candidate or a company searching for the right talent to fill the Clevel opening in UAE, MS is your perfect choice. Our years of experience with various clients from different areas makes us stand out from others in executive search. The services of MS are not limited to recruiting. We are in search of aspirants for companies who can fit into lead their team and with us qualified candidates can search for your opportunity to head the best group."}/>
     */}
      <Alreem_yMs
      background={`url(/images/y_ms_difc.webp)`}
        title={"Stands Out as Your Go-To Service Provider in DIFC"}
        content1={
          "With a wealth of expertise, MS stands as your trusted partner as the service provider within the Dubai International Financial Centre (DIFC). Navigating the regulatory landscape of DIFC is our specialty, from initial setup to year-round financial services, we are your trusted choice for ensuring a seamless, hassle-free business journey. Our commitment to excellence, tailored solutions, and support makes us the top choice for your corporate needs. Opt for MS in DIFC, where expertise meets efficiency, for a reliable and comprehensive service provider to support your business needs."
        }
        
      />
     
      <div className={styles.newsBlogWrapper}>
        <ADGM_newsblogs categorySlug="difc" />
      </div>

    <Guidence/>

      <div className={styles.faqWrapper}>
        <DIFC_FAQ_Service />
      </div>
      
     
        <div className={Hstyles.footer}>
          <Footer />
        </div>
     

      {popup && <BookCall onClick={() => setPopup(false)} />}
    </div>
  );
}



 

export default ADVISORY;
