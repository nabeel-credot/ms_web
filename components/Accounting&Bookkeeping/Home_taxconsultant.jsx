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
      <div  className={styles.web_hometax}>
        <div style={{position:"relative",display:"flex", }}>
          <div className={styles.taxconsultleft} data-aos="fade-right">
            <div className={styles.empowerTitle}>
            <span style={{color:"white"}}>Your Tax Consultant <br/>in Abu Dhabi</span>
              {/* <br /> opportunities in Abu Dhabi */}
            </div>
            <p className={styles.empowerpara} style={{color:"white"}}>
            Everyone either wants to reduce the amount of tax they pay or maximize their tax refund. Everybody also wishes that someone could take care of all the paperwork. This is where our role as your tax consultant comes into picture!
<br/>
<br/>
Many businesses in the UAE face several challenges while trying to understand the tax structure and implementing the same in their sector. Here comes our role if you choose MS as your tax consultant UAE who can help and support your business.
            </p>
          </div>
         <div className={styles.taxconsultright} data-aos="fade-left">
             <Image src="/images/home_taxconsult.png" width={450} height={530} alt=""/>
          </div>
        </div>
        </div>

        <div  className={styles.mob_dmcc}>
        <div style={{position:"relative",display:"flex",alignItems:"center" }}>
          <div className={styles.taxconsultleft}>
            <div className={styles.empowerTitle}>
            <span style={{color:"white"}}>Your Tax Consultant in Abu Dhabi</span>
              {/* <br /> opportunities in Abu Dhabi */}
            </div>
            <p className={styles.empowerpara} style={{color:"white"}}>
            Everyone either wants to reduce the amount of tax they pay or maximize their tax refund. Everybody also wishes that someone could take care of all the paperwork. This is where our role as your tax consultant comes into picture!
<br/>
<br/>
Many businesses in the UAE face several challenges while trying to understand the tax structure and implementing the same in their sector. Here comes our role if you choose MS as your tax consultant UAE who can help and support your business.
            </p>
          </div>
         <div className={styles.taxconsultright} >
             <Image src="/images/home_taxconsult.png" width={350} height={380} alt=""/>
          </div>
        </div>
        </div>
      </Container>
      
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
