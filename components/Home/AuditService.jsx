import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Audit.module.css"

import Bstyles from "./Awards.module.css"

import YellowBorderCard from "../../components/YellowBorderCard"
import Link from 'next/link';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Container from '../Common/Container';
function AuditService() {


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    dotsClass: Bstyles.button__bar,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px"
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
          initialSlide: 0,
          infinite:true,

        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false
    })
  }, []);

  return (
    <Container>
      <div className={styles.audit_container}>
        <div className={styles.audit_left} data-aos="fade-right">
          <div 
          className={styles.box}>
           <YellowBorderCard src="/images/Setup.png" title={<>Setup in ADGM </>} href="/#abu-dhabi-global-market-uae" />
          </div>
          <div
         className={styles.box}>
  <YellowBorderCard src="/images/ADGM_compliance.png" title={<>Help me with<br/> ADGM compliances</>} href="/adgm-compliance-filings" />
          </div>
          <div className={styles.box}>
          <YellowBorderCard src="/images/audit3.svg" title={<>ADGM process<br/> advisory</>} href="/incorporation-advisory-and-assistance" />
          </div>
          <div  className={styles.box}>
          <YellowBorderCard src="/images/audit4.svg" title={<>Help my Company<br /> Grow</>} href="/e-commerce-startup" />
          </div>
          </div>


          <div className={styles.audit_right} data-aos="fade-left">
            <div className={styles.audit_heading}>
              <h3>
              MS at ADGM
              </h3>
            </div>
            <div className={styles.audit_detail}>
            MS can be your Setup-Specialist when you want to setup a new company in the Abu Dhabi Global Market (ADGM), UAE. With tailored focus on providing advisory and incorporation assistance for companies from all over the world, to set and expand one&apos;s roots in ADGM, we provide multifaceted services from incorporation assistance to helping the companies stay compliant when it comes to the ADGM annual filings, AML rules and reportings. Having a great team and solid expertise, we can ensure a fast, streamlined and hassle-free process in bringing your companies to the ADGM.
            </div>
            {/* <div className={styles.exploreLink}>
              <Link href="/other_services">Explore</Link>
            </div> */}
          </div>

        </div>

     

        <div className={styles.mobOnly}>
          <Slider {...settings} className={styles.mobOnly} style={{ marginTop: 30 }}>
            <div>
              <YellowBorderCard src="/images/audit1.svg" title={<>Setup in ADGM </>} href="/#abu-dhabi-global-market-uae" />
            </div>
            <div>
              <YellowBorderCard src="/images/audit2.svg" title={<>Help me with<br/> ADGM compliances</>} href="/adgm-compliance-filings" />
            </div>
            <div>
              <YellowBorderCard src="/images/audit3.svg" title={<>ADGM process<br/> advisory</>} href="/incorporation-advisory-and-assistance" />
            </div>
            <div>
              <YellowBorderCard src="/images/audit4.svg" title={<>Help my Company<br /> Grow</>} href="/e-commerce-startup" />
            </div>
          </Slider>
        </div>

    

      
    </Container >
  )
}

export default AuditService