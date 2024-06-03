import React, { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from "./Audit.module.css"

import Bstyles from "./Awards.module.css"

import YellowBorderCard from "../../components/YellowBorderCardES"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AuditService() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay:true,
        dotsClass: Bstyles.button__bar,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode:true,
          centerPadding:"50px"
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode:true,
        centerPadding:"50px"
            }
          },
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            //     centerMode:true,
            // centerPadding:"10px"
              
            }
          }
        ]
      };

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false,
        })},[]);
        
    return (

        <div className={styles.audit_container}>
            <div className={styles.audit_right} data-aos="fade-left">
            <div className={styles.audit_heading}>
                    <h3>Other Enterprise Services</h3>
                </div>
             
            </div>
            <Slider {...settings} className={styles.mobOnly} style={{marginTop:30}}>
            <YellowBorderCard src="/images/enterprise1.svg"  title={<>Business Startup</>}  href="/business_startup"/>
        <YellowBorderCard src="/images/enterprise2.svg"  title={<>Business Scale Up</>}  href="/business_scaleup"  />
        <YellowBorderCard src="/images/enterprise3.svg"   title={<>Freelancers <br/>Influencers Support</>} 
         />  
         <YellowBorderCard src="/images/enterprise4.svg"  title={<>Family Business Advisory</>}  href="/family_business_advisory"/>
            </Slider>
            
        </div>
    )
}

export default AuditService