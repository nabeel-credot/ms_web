import React ,{useState} from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image"
import Appointment from "./Appointment_schedule"
function Adgm_benefits() {
  const [appoint,setAppoint]=useState(false)
    const benifits=[{
        content:"Confirmation of engaging in relevant activities"
    },
    {
        content:"Declaration of whether the income from these activities is subject to taxation outside the UAE."
    },
    {
        content:"Disclosure of the financial year-end date"
    },
]
  return (
    <div className={styles.esr_prcessContainer}>
      <Container>
        <div className={styles.dmcc_outerdiv}>
          <div className={styles.esrprocess_left}  data-aos="fade-right">
            <h3 className={styles.freezoneTitle} style={{color:"white"}}>DIFC Economic Substance Regulations Notification Process</h3>
            <p style={{maxWidth:"600px",color:"white"}}>Every DIFC-licensed company engaged in Relevant Activities (RA) is mandated to submit its Economic Substance Regulations… notification to the DIFC Registrar of Companies within the stipulated timeframe. This notification serves as a self-declaration wherein companies inform the DIFC authority about the execution of relevant activities. The ESR notification necessitates companies to disclose key information
            </p>
            
          </div>
          <div className={styles.esrprocess_right}  data-aos="fade-left">
         {benifits.map((item,index)=>{return <div className={styles.freezone_wrapper} key={index}>
           <div className={styles.benifit_imagediv}> <Image src="/images/White_tick.svg" width={27} height={27} alt=""/> </div>
            {/* <div className={styles.tickpoints}></div> */}
            <p className={styles.Bpoints} style={{color:"white"}}>{item?.content}</p> </div>}) }

          </div>
        </div>
        
      </Container>
    </div>
  );
}

export default Adgm_benefits;
