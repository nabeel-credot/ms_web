import React from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
import Link from "next/link"
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Slider from 'react-slick'
import { contextType } from "react-modal";
import Appointment from "./Appointment_schedule"
import { useState } from 'react';

const award=[
  {
      image:"/images/msian_1.svg",
      content:"MS AWARDS",
      desc:"Egestas faucibus dui sit sagittis mi. Leo tempusinit",
  },
  {
      image:"/images/msian_2.svg",
      content:"LIFE OF AN MSIAN",
      desc:"  MSians are driven by unbreakable passion, unequaled competence and incompetent energy."
  },{
      image:"/images/msian_3.svg",
      content:"JOBS IN MS",
      desc:"Egestas faucibus dui sit sagittis mi. Leo tempusinit."
  },
  ]
function ADGM_newservice() {
  const [appoint,setAppoint]=useState(false);
  const slider = React.useRef(null);
  const settings = {
      infinite: true,
      speed: 200,
      slidesToShow: 1,
       centerPadding: "50px",
     
      slidesToScroll: 1,
      // autoplay: true,
      dots:true,
       arrows: false,
      loop: true,
      cssEase: 'linear', 
      // prevArrow: <NextArrow />,
      // nextArrow: <PrevArrow />,
      
    };
  return (
    <div className={styles.being_banner}>
      <div className={styles.web_dmcc}>
    <Container >
       <div className={styles.beingTitle} data-aos="fade-up">Being an MSian</div>
      <div className={styles.services_being}>
        <div style={{ position: "relative" }}>
          <div className={styles.being_msdiv} data-aos="fade-up">
            <div className={styles.being_serviceimg}> 
            <Image src={"/images/msian_1.svg"} alt="logo" width={200} height={200}/></div>
            <p>MS AWARDS</p>
            <div className={styles.readmore_being}>
                <p>
            Globally Recognized Advisor</p>
                <p className={styles.readmore_border}>Read more</p></div>
            </div>
        
        </div>

        <div style={{ position: "relative" }}>
        
          <div className={styles.being_msdiv} data-aos="fade-up">
          <div className={styles.being_serviceimg}> 
            <Image src={"/images/msian_2.svg"} alt="logo" width={200} height={200}/></div>
            <p>LIFE OF AN MSIAN</p>
            <div className={styles.readmore_being}>
            <p>
            MSians are driven by unbreakable passion, unequaled competence and incompetent energy.
            </p>
            <p className={styles.readmore_border}>Read more</p></div>
          </div>
     
        </div>

        <div style={{ position: "relative" }}>
        
          <div className={styles.being_msdiv} data-aos="fade-up">
          <div className={styles.being_serviceimg}> 
            <Image src={"/images/msian_3.svg"} alt="logo" width={200} height={200}/></div>
            <p>JOBS IN MS</p>
    
            <div className={styles.readmore_being}>
            <p>
           Our team is built of advisors,accountants, and lawyers who are enthusiastic and take pride in each of their projects.
            </p> <p className={styles.readmore_border}>Read more</p></div>
          </div>
  

        </div>
      </div>
      <div className={styles.being_bottomborder} data-aos="fade-up"></div>
      <div className={styles.being_bottomContent} data-aos="fade-up">
        <div className={styles.being_bottomContent_left}>
        <p>We’re a people company. Whether you want to advance an idea, a capability, or the world at large, 
MS is with you every step of the way.</p>
</div>
<div className={styles.being_bottomContent_right}>
<button className={styles.settingbtnhom} onClick={()=>setAppoint(true)}><span>Our Team</span></button>
{appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}
      </div>
      </div>
    </Container>
    </div>

<div className={styles.mob_dmcc}>
<Container style={{paddingBottom:"30px"}}>
<div className={styles.beingTitle}>Being an MSian</div>
<div className={styles.being_bottomContent}>
        <div className={styles.being_bottomContent_left}>
        <p>We’re a people company. Whether you want to advance an idea, a capability, or the world at large, 
MS is with you every step of the way.</p>
</div>
<div className={styles.being_bottomContent_right}>
<button className={styles.settingbtnhom} onClick={()=>setAppoint(true)}><span>Our Team</span></button>
      </div>
      </div>
    <Slider ref={slider} {...settings} >
        { award.map((item,index)=>{
            return(

              <div style={{ position: "relative" }} key={index}>
                    <div className={styles.being_msdivmob} >
            <div className={styles.being_serviceimg}> 
            <Image src={item?.image} alt={item?.content} width={200} height={200}/></div>
            <p >{item?.content}</p>
                    <div className={styles.readmore_beingmob}>
            <p>{item?.desc}</p>
             <p className={styles.readmore_bordermob}>Read more</p></div>
                        
                        </div>
                        </div>
                        
                
                )
           }
           )
          } 
            </Slider>
            </Container>
            </div>
    </div>
  );
}

export default ADGM_newservice;