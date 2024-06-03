import React ,{useState} from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image"
import Appointment from "./Appointment_schedule"
function Adgm_benefits() {
  const [appoint,setAppoint]=useState(false)
    const benifits=[{
        content:"Accounting and Bookkeeping Services"
    },{
        content:"Corporate Finance Advisory Service"
    },
    {
        content:"Business Plan / Feasibility Study / Projection"
    },
    {
        content:"VAT Advisory & Compliance Support"
    },
    {
        content:"CBCR reporting / Economic substance Regulations"
    },
    {
        content:"Business Valuation Services"
    }
]
  return (
    <div className={styles.home_businessContainer}>
      <Container>
        <div className={styles.B_outerdiv}>
          <div className={styles.business_left} data-aos="fade-right">
            <h3 className={styles.businessTitle_hom}>Helping Businesses with Holistic Solutions</h3>
            <p>
            We bring together a wide range of services under one roof, giving you a clear edge. Our commitment to delivering solutions promptly and accurately means we grow alongside our clients. We hold ourselves to the highest corporate governance standards. Our services cover everything from corporate needs, compliance, tax and accounting, advisory, visa assistance, executive search and more.
            </p>
           <div className={styles.settingbtnweb}> <button className={styles.settingbtnhom} onClick={()=>setAppoint(true)}><span>Meet Our Team</span></button></div>
            {/* <button>Speak to Our Team</button> */}
            {/* {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>} */}
          </div>
          <div className={styles.business_right} data-aos="fade-left">
         {benifits.map((item,index)=>{return <div className={styles.b_wrapper} key={index}>
           <div className={styles.benifit_imagediv}> <Image src="/images/yellowtick.svg" width={27} height={27} alt=""/> </div>
            {/* <div className={styles.tickpoints}></div> */}
            <p className={styles.Bpoints}>{item?.content}</p> </div>}) }
            <button className={styles.settingbtnhommob1} onClick={()=>setAppoint(true)}><span>Meet Our Team</span></button>

          </div>
          {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

        </div>
        
      </Container>
    </div>
  );
}

export default Adgm_benefits;
