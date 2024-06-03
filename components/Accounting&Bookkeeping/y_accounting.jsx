import React ,{useState} from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image"
import Appointment from "./Appointment_schedule"
function Adgm_benefits() {
  const [appoint,setAppoint]=useState(false)
    const benifits=[{
        content:"All-in-one financial services."
    },{
        content:"Dedicated and expert team."
    },
    {
        content:"Cost-effective services."
    },
    {
        content:"Deadline reminders."
    },
    {
        content:"Precise bookkeeping and payroll services."
    },
    {
        content:"Online portal for transfer of documents."
    }
]
  return (
    <div style={{background:"#002A3A"}}>
      <Container>
        <div className={styles.y_bookkeepingdiv}>
          <div className={styles.y_bookkeeping_left} data-aos="fade-right">
          <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>
            <h3 className={styles.assistTitle_corp} style={{color:"white"}}>Why choose 
 <br/>MS Accounting <br/>
Services?

</h3>
            <p >
            Our accounting services can simplify finances and fuel smart decisions to unlock growth potential.
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
