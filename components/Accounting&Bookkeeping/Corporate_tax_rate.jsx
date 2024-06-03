import React,{useState}from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Appointment from "./Appointment_schedule"
function AdgmWings() {
  const [appoint,setAppoint]=useState(false)
  return (
    <div style={{background:"#3C166B"}}>
    <Container>
        <div>
        <div className={styles.corporate_rateContainer} >
            <div style={{display:"flex",flexDirection:"column",width:"fit-content"}}>
      <div className={styles.corporate_rateTitle} data-aos="fade-right">
      What is the Corporate Tax Rate <br/>in the UAE?
      </div>
     
        <div className={styles.corporate_ratepara} data-aos="fade-right">
         <p> 
         The Corporate Tax rate in the UAE is 9% for Taxable Income surpassing AED 375,000, with a 0% rate applied to Taxable Income below this threshold. The Corporate Tax rates are as follows:
          </p>
        </div>
        </div>
        <div className={styles.corporate_rate_rightContainer} data-aos="fade-left">
          <div className={styles.corporate_rate_right}>
            <div className={styles.corporate_rateInner}>
              <p className={styles.corporate_rate_rigtTitle}>
              Natural persons and juridical<br/> persons
              </p>
              <p className={styles.corporate_rate_rigtpara}>
              9% for Taxable Income exceeding AED 375,000.
              </p>
            </div>
          </div>
          <div className={styles.corporate_rateInner}>
            <p className={styles.corporate_rate_rigtTitle}>
            Qualifying Free Zone Persons
            </p>
            <p className={styles.corporate_rate_rigtpara}>
            0% on Qualifying Income and 9% on non-<br/>qualifying Income.
            </p>
          </div>
        </div>
        {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

      </div>
      </div>
    </Container>
    </div>
  );
}

export default AdgmWings;
