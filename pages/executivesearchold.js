
import React, { useState } from "react";
import Head from "next/head";
import styles from '../styles/Advisory.module.css';
import Hstyles from "../styles/Home.module.css";
//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Footercopy from "../components/Footer copy";
import Banner from "../components/Accounting&Bookkeeping/Common_Banner2new";
import ADGM_servicenew from "../components/Accounting&Bookkeeping/ADGM_servicenew";
import Alreem_yMs from "../components/Accounting&Bookkeeping/Alreem_yMs";
import VideoCard from "../components/Accounting&Bookkeeping/VideoCard";
import FAQ from "../components/executive/FAQ";
import Guidence from "../components/Accounting&Bookkeeping/ADGM_Guidence";
import OutsourcinGallerys from "../components/executive/outsourcegallery";
import ExecutiveServices from "../components/executive/executive_services";
import ExeBenefits from "../components/executive/executive_benifits";
import ADGM_newsblogs from "../components/Accounting&Bookkeeping/ADGM_newsblogs";
import Appointment from "../components/Accounting&Bookkeeping/Appointment_schedule"

import BookCall from "../components/Popup/Popup";
import { useRouter } from "next/router";
import Container from "../components/Common/Container";


function ExecutiveSearchPage(props) {
  const [popup, setPopup] = useState(false);
  const [initialpopup, setInitialPopup] = useState(true);
  const handleClick = (popup) => {
    setPopup(popup);
  };
  const [appoint,setAppoint]=useState(false)
  const router = useRouter();
  const closepopup = () => {
    setInitialPopup(false);
  };
  return (
    <div  className={styles.container}>
     <Head>
        <title>
        Executive Search | MS Group
        </title>
        <meta
          name="description"
          content="MS provides comprehensive company set up services in Abu Dhabi Global Market (ADGM), including company registration, corporate governance, etc. Register with MS"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Executive Search | MS Group"
        />
        <meta
          property="og:description"
          content="MS provides comprehensive company set up services in Abu Dhabi Global Market (ADGM), including company registration, corporate governance, etc. Register with MS"
        />
        <meta
          property="og:url"
          content="https://ms-ca.com/#abu-dhabi-global-market-uae"
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
          href="https://ms-ca.com/#abu-dhabi-global-market-uae"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
            <Navbar color="#FFFFFF" hoverClr="#D4AE31" img1="/images/darrow.svg" img2="/images/uarrow.svg" />
            <div  className={styles.banner_container_EXE}>
                <Banner heading="Executive Search In Abu Dhabi, Dubai, UAE"
                detail=" Tomorrow’s success begins with the vision of a leader today. Through compassion, confidence, and capability, evolving leadership shapes a better world. Our versatile exposure in the industry helps you to make the move today for a better future by choosing the right talent."
                />
                <div className={styles.banner_tip} onClick={()=>setAppoint(true)}>
                  <img src="./images/bennertip.svg"/>
                  <h4>Schedule your Appointment</h4>
                </div>
                  {appoint && <div className={`${styles.appointwrapper} ${styles.appointwrappernew}`}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

            </div>
            <div>
              <Container >
      <div style={{padding:"50px 0px"}}></div>
                <div >
                  <VideoCard 
                  imagePath="/images/exevideo.webp"
                  title="Let MS empower your business in ADGM"
                  author="Mohammad Shafeek"
                  position="CEO & Founder of MS"
                  />
                </div>
              </Container>

      <div className={styles.marginTp25m}>
        <ADGM_servicenew 
        heading="Overview Of Executive 
        Search "
        detail="When opportunities meet preparation, great results can be achieved. Human-centric approaches for on-demand talent in headhunting is an opportunity for a transition that starts from today for a progressive tomorrow. The preparation here is to have a best shot in search solution. The leadership advisory that MS provides will cater to executive excellence and deliver a timely solution that aligns with the trends and requirements of the industry and of your organization. The transition we offer always starts from the people who can empower your organization for the time ahead.
        Beyond that, we nurture your talent further to make you the best fit with our exceptional training and providing you with development possibilities. Our expertise lies in identifying and securing C-level professionals in Compliance, Finance, Tax, and Technology. Count on us to bring you top-tier talent that will play a key role in driving the advancement and success of your business for tomorrow. Shape today’s choices with the best consultive advisory for a better tomorrow.
        "
        />
      </div>
      <OutsourcinGallerys/>
      <ExecutiveServices/>
        <ExeBenefits/>
     <div> <Alreem_yMs
      background={`url('/images/m1.webp')`}
      title="as your Partner in Executive Search"
      content1="Whether you're a high-flying C-suite contender or a company in a search for top-tier talent to lead, MS is your go-to choice. With a track record of excellence and innovative search solutions, we stand out from the crowd. At MS, we're not just about recruitment; we're matchmakers, connecting companies with the transformational leaders and helping skilled individuals uncover opportunities to lead the best in the business.
      "
      content2="Revolutionize the senior level retained search with MS."
      />
      </div>
      <div style={{padding:"50px 0px"}}></div>
      <ADGM_newsblogs/>
      <Guidence/>
      <div  style={{background:" #F5F5F5"}}>
                <FAQ />
                </div>
            </div>
            <div className={Hstyles.footer}>
                <Footercopy />
            </div>

            <div className={styles.marginTp}>
      </div>
      {popup && <BookCall onClick={() => setPopup(false)} />}
    </div>
  );
};

export default ExecutiveSearchPage;