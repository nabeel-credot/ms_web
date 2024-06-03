import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import styles1 from "../styles/SmartUp.module.css"
//components
import Banner from "../components/Home/Banner";
import BannerTwo from "../components/Home/BannerTwo";
import Services from "../components/Home/Services";
// import WhyMs from "../components/Home/WhyMs1"
// import WhyMs from "../components/Accounting&Bookkeeping/HOME_service"
import WhyMsN from "../components/Home/WhyMs2";
import TaxConsultant from "../components/Home/TaxConsultant";
import SME from "../components/Home/SME";
import MeetYourTeam from "../components/Home/MeetYourTeam";
import Slider from "../components/Home/Slider";
import HaveAnyQue from "../components/Home/HaveAnyQue";
import AuditService from "../components/Home/AuditService-new";
import Quote from "../components/Home/Quote";
// import HowCanWeHelp from "../components/Home/HowCanWeHelp"
import HowCanWeHelp from "../components/Accounting&Bookkeeping/Home_How_Banner";
import LetsConnect from "../components/Home/LetsConnect";
import Msian from "../components/Home/MSian";
import Awards from "../components/Home/Awards";

import Clients from "../components/Home/Clients";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoCard from "../components/Accounting&Bookkeeping/VideoCard";
import Container from "../components/Common/Container";

export default function Home() {
  const sectionRef = useRef();

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log('Section is in view!');
          setIsVisible(true);
          // do something when section is in view
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // cleanup function
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>
          MS | Chartered Accountants | Tax Consultant in Abu Dhabi, Dubai, UAE |
          Corporate Tax - MS
        </title>
        <meta
          name="description"
          content="MS is an award-winning firm from Abu Dhabi, UAE extends its services in Accounting, Bookkeeping, VAT & Audits, and Advisory for your business. Get started!"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MS | Chartered Accountants | Tax Consultant in Abu Dhabi, Dubai, UAE | Corporate Tax - MS"
        />
        <meta property="og:description" content="MS is an award-winning firm from Abu Dhabi, UAE extends its services in Accounting, Bookkeeping, VAT & Audits, and Advisory for your business. Get started!" />
        <meta property="og:url" content="https://ms-ca.com" />
        <meta property="og:site_name" content="MS" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/MSGroupUAE/"
        />
        <meta
          property="article:modified_time"
          content="2022-07-29T09:55:01+00:00"
        />
        <meta
          property="og:image"
          content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png"
        />
        <meta property="og:image:width" content="152" />
        <meta property="og:image:height" content="152" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MS | Chartered Accountants | Tax Consultant in Abu Dhabi, Dubai, UAE | Corporate Tax - MS"
        />
        <meta
          name="twitter:description"
          content="MS is an award-winning firm from Abu Dhabi, UAE extends its services in Accounting, Bookkeeping, VAT & Audits, and Advisory for your business. Get started!"
        />
        <meta
          name="twitter:image"
          content="https://ms-ca.com/wp-content/uploads/2022/06/banner-logo-new-e1655374996651.png"
        />
        <meta name="twitter:site" content="@MS" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="29 minutes" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar
        color="#FFFFFF"
        hoverClr="#D4AE31"
        img1="/images/darrow.svg"
        img2="/images/uarrow.svg"
        menuIcon="true"
      />
      <div className={styles.banner_container}>
        <Banner />
      </div>
      {/* <div style={{backgroundColor: "#192B3A",paddingBottom:"25px"}}>
      <div className={styles1.video1home}>
        <Container>
          <VideoCard
            imagePath="/images/mainimage.jpg"
            author="Mohammad Shafeek"
            title="Let MS empower your business in ADGM"
            position="CEO & Founder of MS"
          />
        </Container>
      </div>
      <div className={styles1.mobvideo1home}>
      <VideoCard
            imagePath="/images/CEO_mobile.png"
           
            title="Let MS empower your business in ADGM"
           
          />
      </div>
            </div> */}
      <div className={styles.sliderContainer}>
        <Slider />
      </div>
      <div className={styles.bannerTwo_container}>
        <BannerTwo />
      </div>
      <div className={styles.service_container}>
        <Services />
      </div>
      {/* <div className={styles.whyMs_container}>
        <WhyMs />
      </div> */}
      <div className={styles.whyMs_container}>
        <WhyMsN />
      </div>
      <div className={styles.taxConsultant_container}>
        <TaxConsultant />
        <SME />
      </div>
      <div className={styles.meetYourteam_container}>
        <MeetYourTeam />
      </div>
      <div className={styles.haveAnyQue_container}>
        <HaveAnyQue />
      </div>
      <div className={styles.audit_container}>
        <AuditService />
      </div>
      <div className={styles.ClientsContainer} ref={sectionRef}>
        <Clients isVisible={isVisible} />
      </div>
      <div className={styles.QuoteContainer}>
        <Quote
          image="/images/photo-ceo.png"
          // width="589px"
          // height="568px"
          details={
            '"MS’s foundation is laid on strong values and policies. MSians are driven by unbreakable passion, unequaled competence, and incomparable energy. We chase a vision that would make a positive impact in the whole wide world. For us, all of our stakeholders are real, and important. We are committed to delivering value to each of them, leading towards the success of our companies, communities and the country."'
          }
          heading={
            <>
              Driven by unbreakable passion,
              <br />
              chasing a vision that makes <br />
              better World.
            </>
          }
          fontSize="18px"
          name="Mohammed Shafeek"
          desig="Founder & Group CEO, MS"
        />
      </div>
      <div className={styles.howCan_container}>
        <HowCanWeHelp />
      </div>

      <div className={styles.mscontainer}>
        <Msian />
      </div>
      <div className={styles.lets_container}>
        <LetsConnect />
      </div>

      <div className={styles.award_container}>
        <Awards />
      </div>

      {/* <div className={styles.be_container}>
        <BePartCompany />
      </div> */}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
