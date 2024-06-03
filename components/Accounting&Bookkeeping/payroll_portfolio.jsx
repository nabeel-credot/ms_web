import React ,{useState} from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image"
import Appointment from "./Appointment_schedule"
function Adgm_benefits() {
  const [appoint,setAppoint]=useState(false)
    const benifits=[{
        content:"Payroll processing and management "
    },{
        content:"Validation of payroll data integrity"
    },
    {
        content:"Employee leave management"
    },
    {
        content:"Multi-currency salary payments"
    },
    {
        content:"Administration of employee benefits"
    },
    {
        content:"Management of employee travel expenses"
    },
    {
        content:"Handling and payment of employee reimbursements"
    },
    {
        content:"WPS payments and setup assistance"
    },
]
  return (
    <div style={{background:"#3C166B"}}>
      <Container>
        <div className={styles.y_bookkeepingdiv}>
          <div className={styles.payroll_portfolio_left} data-aos="fade-right">
            <h3 className={styles.assistTitle_corp} style={{color:"white"}}>Our Payroll Service Portfolio 
</h3>
            <p >
            MS offers a range of payroll solutions, perfectly tailored to your business needs. From comprehensive corporate payroll services to focused payroll processing, we&apos;ve got you covered.
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
