import React ,{useState} from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image"
import Appointment from "./Appointment_schedule"
function Adgm_benefits() {
  const [appoint,setAppoint]=useState(false)
    const benifits=[{
        content:"Corporate tax compliance with minimal risk."
    },{
        content:"Efficient VAT management."
    },
    {
        content:"Streamlined ESR reporting."
    },
    {
        content:"Cost-effective services."
    },
    {
        content:"Industry expertise. "
    },
    {
        content:"Speed in turnaround."
    }
]
  return (
    <div style={{background:"#002A3A"}}>
      <Container>
        <div className={styles.y_bookkeepingdiv}>
          <div className={styles.y_bookkeeping_left} data-aos="fade-right">
          <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>
            <h3 className={styles.assistTitle_corp} style={{color:"white"}}>Why choose 
 <br/>MS Tax <br/>Services?

</h3>
            <p >
            With MS, you can have a single-source solution for all the tax services without failure. 
            </p>
          </div>
          <div className={styles.benifitsnew_right} data-aos="fade-left">
         {benifits.map((item,index)=>{return <div className={styles.b_wrapper} key={index}>
           <div className={styles.benifit_imagediv}> <Image src="/images/White_tick.svg" width={27} height={27}/> </div>
            {/* <div className={styles.tickpoints}></div> */}
            <p className={styles.Bpoints}>{item?.content}</p> </div>}) }

          </div>
          {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

        </div>
        
      </Container>
    </div>
  );
}

export default Adgm_benefits;
