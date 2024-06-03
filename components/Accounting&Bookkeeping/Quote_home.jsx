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
      <div className={styles.web_hometax}>
        <div style={{position:"relative",display:"flex" }}>
        <Container>
          <div className={styles.quote_left} data-aos="fade-right">
          <div className={styles.quotelogo}> <Image src={"/images/quote_hom.svg"} alt="logo" layout="fill"/> </div>
            <div className={styles.quotecontainer}>
            <span>Driven by unbreakable <br/>
passion, chasing a vision that makes better World</span>
              {/* <br /> opportunities in Abu Dhabi */}
            </div>
            <p className={styles.empowerpara} style={{color:"white"}}>
            MS’s foundation is laid on strong values and policies. MSians are driven by unbreakable passion, unequaled competence, and incomparable energy. We chase a vision that would make a positive impact in the whole wide world. For us, all of our stakeholders are real, and important. We are committed to delivering value 
to each of them, leading towards the success of our companies, communities and the country.
            </p>
          </div>
          </Container>
         <div className={styles.quote_rightimg}>
             <Image src="/images/quote_img.svg" layout="fill" alt="" />
             <div className={styles.namewrapper_quote}>
                        <span>Muhammed Shafeek</span>
                        <p>Founder & Group CEO, MS</p>
                        </div>
          </div>
        </div>
        </div>
       
<div className={styles.mob_dmcc}>
        <Container>
        <div className={styles.quote_rightimg}>
             <Image src="/images/quote_img.svg" width={340} height={340} alt=""/>
             <div className={styles.namewrapper_quote}>
                        <span>Muhammed Shafeek</span>
                        <p>Founder & Group CEO, MS</p>
                        </div>
          </div>
          <div className={styles.quote_left}>
            <div className={styles.quotecontainer}>
            <span>Driven by unbreakable passion, chasing a vision that makes better World</span>
              {/* <br /> opportunities in Abu Dhabi */}
            </div>
            <p className={styles.empowerpara} style={{color:"white"}}>
            MS’s foundation is laid on strong values and policies. MSians are driven by unbreakable passion, unequaled competence, and incomparable energy. We chase a vision that would make a positive impact in the whole wide world. For us, all of our stakeholders are real, and important. We are committed to delivering value 
to each of them, leading towards the success of our companies, communities and the country.
            </p>
          </div>
          </Container>
    </div>
    </div>
  );
}

// function Card({ image, title, content,number }) {
//   return (
//     <div className={styles.slidercontainer_dmcc} >
//       <div
//       className={styles.sliderinnercontainer_dmcc}
        
//       >
//         <div
//           className={styles.slideImagediv}
//           // style={{ position: "absolute", inset: 0 }}
//         >
//           <div className={styles.titlewrapper_dmcc}>
//           <span className={styles.slidertitle} style={{ paddingLeft: "20px" }}>
//         Why Dubai
//       </span>
//       </div>
//       <Image src={image} alt="why abu dhabi" width={512} height={540} />
//         </div>
//         <div className={styles.slidercontent_dmcc}>
//             <span className={styles.slidernumber_dmcc}>{number}</span>
//           <span className={styles.slidertitle_dmcc} style={{paddingLeft:"30px"}}>{title}</span>
//           <p className={styles.y_abudhabi} style={{padding:"0 20px 0 20px"}}>{content}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Opportunity_abudhabi;
