import React ,{useState} from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image"
import Appointment from "./Appointment_schedule"
function Adgm_benefits() {
  const [appoint,setAppoint]=useState(false)
    const benifits=[{
        content:"Independent judicial system based on 100% English Common Law."
    },{
        content:"Seamless digital experience for services in ADGM E-Courts."
    },
    {
        content:"100% foreign ownership."
    },
    {
        content:"Broad range of commercial activities."
    },
    {
        content:"Favourable tax conditions, providing the opportunity to repatriate profits and capital."
    },
    {
        content:"Attractive tax regime and access to UAE’s excellent network of double tax treaties."
    }
]
  return (
    <div className={styles.benefitContainer}>
      <Container>
        <div className={styles.B_outerdiv}>
          <div className={styles.benifitsnew_left} data-aos="fade-right">
            <h3 className={styles.benefitsTitle}>Benefits of <br/>Incorporating in ADGM</h3>
            <p style={{maxWidth:"424px"}}>
              In October 2015, Abu Dhabi Global Market (ADGM) became fully
              operational, opening its doors to welcome local and international
              enterprises and institutions. Located in the heart of Abu Dhabi,
              ADGM serves as a bridge between the east-west corridor. ADGM offers
              a secure and efficient platform for companies and financial
              institutions.
            </p>
           <div className={styles.settingbtnweb}> <button className={styles.settingbtn} onClick={()=>setAppoint(true)}><span>Setting up in ADGM</span></button></div>
            {/* <button>Speak to Our Team</button> */}
          </div>
          <div className={styles.benifitsnew_right} data-aos="fade-left">
         {benifits.map((item,index)=>{return <div className={styles.b_wrapper} key={index}>
           <div className={styles.benifit_imagediv}> <Image src="/images/tick.svg" width={27} height={27}/> </div>
            {/* <div className={styles.tickpoints}></div> */}
            <p className={styles.Bpoints}>{item?.content}</p> </div>}) }
            <button className={styles.settingbtnmob} onClick={()=>setAppoint(true)}><span>Setting up in ADGM</span></button>

          </div>
          {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

        </div>
        
      </Container>
    </div>
  );
}

export default Adgm_benefits;
