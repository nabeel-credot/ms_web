import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/SmartUp.module.css";
import Hstyles from "../styles/Home.module.css";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer copy";
// import Banner from "../components/Accounting&Bookkeeping/ADGM_bannerTop";
import Banner from "../components/Accounting&Bookkeeping/DIFC_Bannernew";

import BookCall from "../components/Popup/Popup";

import { useRouter } from "next/router";

import gqlRequest from "../utilities/graphql";
import ADGM_overview from "../components/Accounting&Bookkeeping/ADGM_overview";
import ADGM_Ms_Compliance_Service from "../components/Accounting&Bookkeeping/ADGM_Ms_Compliance_Service";
import ADGM_WHYMS from "../components/Accounting&Bookkeeping/ADGM_WHYMS";
import ADGM_FAQ_Service from "../components/Accounting&Bookkeeping/ADGM_FAQ_Service";
import ADGM_Guidence from "../components/Accounting&Bookkeeping/ADGM_Guidence";
import VideoCard from "../components/Accounting&Bookkeeping/Videocard_dmcc";
import Media from "../components/Accounting&Bookkeeping/Media2";
import Container from "../components/Common/Container";
import ADGM_newsblogs from "../components/Accounting&Bookkeeping/ADGM_newsblogs";
import Dmcc_banner from "../components/Accounting&Bookkeeping/Dmcc gateway";
import Dmcc_freezone from "../components/Accounting&Bookkeeping/Dmcc_freezone";
import DMCC_pathway from "../components/Accounting&Bookkeeping/DMCC_pathway";
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
import DMCC_benefit from "../components/Accounting&Bookkeeping/Dmcc_benifit";
import Types_mergers from "../components/Accounting&Bookkeeping/Types_mergers";
import Guidence from "../components/Accounting&Bookkeeping/Guidence";
import Benefits from "../components/Accounting&Bookkeeping/Benefits";
import DMCC_SERVICE from "../components/Accounting&Bookkeeping/DMCC_Service"
import DIFC_TECH from "../components/Accounting&Bookkeeping/DIFC_Tech"
import ADV from "../components/Accounting&Bookkeeping/DIFC_Advantage"
import Business from "../components/Accounting&Bookkeeping/DIFC_Business"
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
        Dubai Multi Commodities Centres
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
        bgcolor="transparent"
        color="white"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
      />
      
      <div className={styles.banner_container_dmccnew}>
        <Banner
        // dmccbanner="true"
          heading={
            <div style={{ fontWeight: "400",textAlign:"center" }}>Dubai Multi Commodities Centres  </div>
          }
          height="428"
          //   white={true}
          detail="The world’s No.1 Free Zone and centre of global commodities trading
          DMCC is the perfect hub for expanding businesses in Dubai and beyond, serving as a gateway to global trade."
        />
        {appoint && (
          <div className={styles.appointwrapper}>
            {" "}
            <Appointment appoint={appoint} setAppoint={setAppoint} />
          </div>
        )}
        <div className={styles.appointmentdiv}>
          <span
            className={styles.banner_popup_dmcc}
            onClick={() => setAppoint(true)}
          >
            <img
              src="/images/dmcc appoint.svg"
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
      <div className={styles.mobAppoint} style={{backgroundColor:"#E40D75"}}>
        <span
          className={styles.banner_popupmob}
          onClick={() => setAppoint(true)}
        >
          <img src="images/Mobappoint_dmcc.svg" alt="appointment" />
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
            title={<span>Let&apos;s talk about how <span style={{fontWeight:"500"}}>MS</span> serving <span style={{fontWeight:"500"}}>DMCC</span></span>}
            position="Founder & Group CEO, MS"
          />
        </Container>
      </div>
      <div className={styles.mobvideo1}>
        <VideoCard
        background={`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000552 100%)`}
        fillcolor="#E40D75"
          imagePath="/images/CEO_mobile.png"
          title={<span>Let&apos;s talk about how <span style={{fontWeight:"500"}}>MS</span> serving <span style={{fontWeight:"500"}}>DMCC</span></span>}
        />
      </div>
      <div>
        {/* <ADGM_overview /> */}
        <ADGM_servicenew
        // showBorderBottom={true}
          heading={<span>MS in<br/>
          Dubai Multi Commodities Centre (DMCC)</span>}
          detail={<span>Nestled in the heart of Dubai, at the centre of Jumeirah Lakes Towers district, you will find everything you need to live, work, and grow your business. DMCC, also known as Made for Trade, provides all the resources required to set up and expand your business. Awarded nine times as the &apos;Global Free Zone of the Year&apos; by the Financial Times fDi magazine, it boasts a vibrant community, innovative infrastructure, world-class services, and a wide range of properties, all located just minutes away from excellent air, sea, and road transportation links to the world. DMCC offers limitless opportunities for global expansion, so come and discover where business meets the world.<br/>
          <br/>DMCC is a Free Zone that offers a unique mix of privileges, state-of-the-art commercial and residential real estate, premium commodities, and financial services. This combination makes DMCC stand out in a league of its own. Moreover, DMCC invests continually in highly interconnected and innovative infrastructure and top-notch business services, which makes trading seamless from this hub. With DMCC&apos;s exceptional offerings, conducting business from anywhere in the world is effortless and efficient.
      </span>}
        />
      </div>
      <Dmcc_banner appoint={appoint} setAppoint={setAppoint} />
      <Dmcc_freezone />
      <DMCC_benefit/>
    <div style={{marginTop:"50px",marginBottom:"50px"}}> <DMCC_SERVICE/></div>
     <div>
     <DMCC_pathway />
        {/* <Testimonial /> */}
      </div>
     {/* <ADGM_WHYMS buttonColor="#FFFFFF"
    buttonBackgroundColor="#192B3A" title={<span><span>Why MS as your</span><br/><span>Partner in Executive</span><br/> Search</span>}
    content1={"Whether you are a C-suit qualified candidate or a company searching for the right talent to fill the Clevel opening in UAE, MS is your perfect choice. Our years of experience with various clients from different areas makes us stand out from others in executive search. The services of MS are not limited to recruiting. We are in search of aspirants for companies who can fit into lead their team and with us qualified candidates can search for your opportunity to head the best group."}/>
     */}
      <Alreem_yMs
      background={`url(/images/difcMs.jpg)`}
        title={"as your Service Provider "}
        content1={
          "Embark on a journey to achieve corporate excellence with MS in DMCC. We are a team of energetic, passionate, and curious technologists, lawyers, problem-solvers, and business builders with diverse expertise and backgrounds. We prioritise efficiency, transparency, and regulatory adherence, ensuring a smooth journey from incorporation to ongoing support. With our client-centric approach, cutting-edge technology, and in-depth understanding of the ecosystem, we empower your business to thrive in the DMCC."
        }
        content2={
          "Consider MS not only as a service partner but also as a catalyst for your business excellence in the DMCC. Let us form a strategic collaboration that goes beyond conventional limits."
        }
        
      />
     
      <div className={styles.newsBlogWrapper}>
        <ADGM_newsblogs categorySlug="/dmcc" />
      </div>
<Guidence/>
    

      <div className={styles.faqWrapper}>
        <ADGM_FAQ_Service />
      </div>
      
     
        <div className={Hstyles.footer}>
          <Footer />
        </div>
     

      {popup && <BookCall onClick={() => setPopup(false)} />}
    </div>
  );
}



 

export default ADVISORY;
