import React, { useState } from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import Appointment from "./Appointment_schedule";
function Opportunity_abudhabi() {

  return (
    
    <div className={styles.empowerContainer}>
      <Container>
        <div  className={styles.web_dmcc}>
        <div className={styles.empowerright} data-aos="fade-right">
             <Image src="/images/Empower.webp" width={490} height={580} alt=""/>
          </div>
          </div>
          <div className={styles.empowerleft} data-aos="fade-left">
            <div className={styles.empowerTitle}>
            <span style={{color:"white"}}>Empower, Expand and <br/>Excel with MS </span>
              {/* <br /> opportunities in Abu Dhabi */}
            </div>
            <p className={styles.empowerpara} style={{color:"white"}}>
            If you’re a business with vision and ambition, we help you do good, do better. In the capital city of Abu Dhabi, the United Arab Emirates, we stand out for our capacity to connect worldwide, cater to local needs, and deliver services across different jurisdictions. We also specialise in helping businesses set up in Dubai with a pro-global and pro-business approach, providing clients exactly what they need, when they need it. The hands-on, proactive support from our award-winning team turns your businesses into success stories. 
It all begins with one great conversation to set the wheel toward success, so why not get in touch with us?
<br/>
<br/>
Let’s create the success stories together.
            </p>
          </div>
          </Container>
        
        
        <div className={styles.mob_empimg}>
          <Container>
          <div className={styles.empowerright}>
             <Image src="/images/Empower.webp" width={350} height={380} alt=""/>
          </div>
          </Container>
        </div>
      
    </div>

  );
}



export default Opportunity_abudhabi;
