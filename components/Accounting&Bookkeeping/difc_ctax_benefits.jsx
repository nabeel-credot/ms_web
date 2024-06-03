import React ,{useState} from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image"
import Appointment from "./Appointment_schedule"
function Adgm_benefits() {
  const [appoint,setAppoint]=useState(false)
    const benifits=[{
        content:"Corporate Tax Impact Assessment."
    },{
        content:"Corporate Tax registration."
    },
    {
        content:"Filing of Corporate Tax returns."
    },
    {
        content:"Corporate Tax De-registration."
    },
]
  return (
    <div className={styles.benefitContainer_ctax}>
      <Container>
        <div className={styles.B_outerdiv}>
          <div className={styles.benifitsnew_left_ctax}>
            <p className={styles.benefitsTitle} style={{fontSize:"40px"}}>What is Corporate Tax and what is its objective?</p>
            <p style={{maxWidth:"700px"}}>
            Corporate Tax, also referred to as company tax, is the financial obligation a corporation faces on its profits earned within a fiscal year. Like how income taxes apply to individual earnings, corporate taxes are imposed on a corporation&apos;s net income. This tax is calculated based on the organization&apos;s taxable income, derived by subtracting total expenses from total revenues. The components of expenses include costs of goods sold, operating expenses, research and development costs, marketing and selling expenses, general and administrative costs, and depreciation costs. Corporate taxes serve as a revenue source for the government, with the tax rate and slabs varying across different countries.
            </p>
            {/* <button>Speak to Our Team</button> */}
          </div>
          <div className={styles.benifitsnew_right_ctax}>
            <h4 style={{color:"white",paddingBottom:"20px",paddingTop:"150px"}}>Our suite of Corporate Tax services <br/>encompasses</h4>
         {benifits.map((item,index)=>{return <div className={styles.b_wrapper_ctax} key={index}>
           <div className={styles.benifit_imagediv}> <Image src="/images/Group 684.svg" width={27} height={27}/> </div>
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
