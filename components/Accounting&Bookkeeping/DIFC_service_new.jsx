import React, { useState,useEffect } from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Appointment from "./Appointment_schedule_difc"
import { IoIosArrowForward } from "react-icons/io";

const items=["We review and optimize your finance and accounting processes and systems for increased efficiency.",
"Our experts assist in developing accounting and finance policies and procedures tailored to your business needs.",
"We ensure meticulous maintenance of books of accounts in compliance with ADGM requirements.","Prepare and deliver month-end financial reports, including Balance Sheet, Profit and Loss, and cash flow statements.",
"We handle the preparation and submission of monthly, quarterly, and yearly Prudential Returns.",
"Assistance in the preparation, maintenance, and monitoring of budgets and conduct scenario stress tests.",
"Assistance in preparation of IRAP and ICAAP reports.",
"Calculations and monitoring of capital and liquidity resources to ensure financial stability.",
"Thorough reviews of books of accounts and financial statements for accuracy and reliability.",
"Utilize our financial analytics and reconciliations to gain valuable insights for informed decision-making.",
"Benefit from our assistance in Risk Management reports.",
"Assistance in preparing monthly board presentations to showcase financial performance.","Liaising with external auditors, internal auditors, and regulators for smooth operations."]

function ADGM_servicenew({ heading, detail,showButton,showBorderBottom,heading1,detailsub1,heading2,detailsub2,points}) {
  const [appoint,setAppoint]=useState(false)
  const isConditionMet = true;
  return (
    <Container>
    <div className={styles.servicediv1} style={{ borderBottom: showBorderBottom ? '1px solid #D9D9D9' : 'none' }} >
      <div className={styles.overview_popup}>
        <div data-aos="fade-right">
      <div className={styles.servicenewTitle} > {heading}</div>
      <p className={styles.servicepara} >
        {detail}
      </p>
      {showButton && (
        <div className={styles.coperateservicebtndifc} >
        <button className={styles.setting_difcbtn} onClick={()=>setAppoint(true)}><span>Setting up in DIFC</span></button></div>
        )}</div>
      <div><Appointment isConditionMet={isConditionMet} appoint={appoint} setAppoint={setAppoint} closehide={true}/></div>
      </div>
     {heading1 && <h6 className={styles.overviewsunhead} style={{marginTop:"36px"}}>{heading1}</h6>}

      {detailsub1 &&<p className={styles.servicepara}>
        {detailsub1}
      </p>}
     {heading2 && <h6 className={styles.overviewsunhead}>{heading2}</h6>}
      {detailsub2 &&<p className={styles.servicepara}>
        {detailsub2}
      </p>}
     {points && 
     <div className={styles.subpoints}>
     {items.map((text, index) => (
       <div key={index} style={{  alignItems: "baseline", gap: "20px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
<path d="M21.8787 13.6213C23.0503 12.4497 23.0503 10.5503 21.8787 9.37868L13.6213 1.12132C12.4497 -0.0502525 10.5503 -0.0502527 9.37868 1.12132L1.12132 9.37868C-0.0502525 10.5503 -0.0502527 12.4497 1.12132 13.6213L9.37868 21.8787C10.5503 23.0503 12.4497 23.0503 13.6213 21.8787L21.8787 13.6213Z" fill="#D4AE31"/>
</svg>
         {/* <IoIosArrowForward /> */}
         <p style={{ fontWeight: "600",marginTop:"0" }}>{text}</p>
       </div>
     ))}
   </div>
    //  <>
    //   <div style={{display:"flex" ,gap:"20px"}}>
    //     <div style={{width:"50%",display:"flex",alignItems:"baseline",gap:"20px"}}>
    //     <IoIosArrowForward />
    //     <p style={{fontWeight:"600"}}>We review and optimize your finance and accounting processes and systems for increased efficiency.</p>
    //     </div>
      
    //     <div style={{width:"50%",display:"flex",alignItems:"baseline",gap:"20px"}}>
    //     <IoIosArrowForward />
    //       <p style={{fontWeight:"600"}}>Our experts assist in developing accounting and finance policies and procedures tailored to your business needs.</p>
    //     </div>
    //   </div>
    //   <div style={{display:"flex" ,gap:"20px"}}>
    //     <div style={{width:"50%",display:"flex",alignItems:"baseline",gap:"20px"}}>
    //     <IoIosArrowForward />
    //     <p style={{fontWeight:"600"}}>We ensure meticulous maintenance of books of accounts in compliance with ADGM requirements.</p>
    //     </div>
      
    //     <div style={{width:"50%",display:"flex",alignItems:"baseline",gap:"20px"}}>
    //     <IoIosArrowForward />
    //       <p style={{fontWeight:"600"}}>Prepare and deliver month-end financial reports, including Balance Sheet, Profit and Loss, and cash flow statements.</p>
    //     </div>
    //   </div>
    //   </>
      }
      
    </div>
    {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

    <div className={styles.spacediv}></div>
    {/* <hr className={styles.linehr} /> */}
    </Container>
  );
}

export default ADGM_servicenew;