import React,{useState}from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Appointment from "./Appointment_schedule"
function AdgmWings() {
  const [appoint,setAppoint]=useState(false)
  return (
    <Container>
        <div className={styles.wingswebonly}><div className={styles.ctax_head }  data-aos="fade-up">Our suite of <br/>Corporate Tax services encompasses</div></div>
        <div className={styles.ctax_head &&styles.mobctax}  data-aos="fade-up">Our suite of Corporate Tax <br/>services encompasses</div>
        <div className={styles.ctax_sub}  data-aos="fade-up">
            <div className={styles.ctax_para}>
              <p className={styles.wingRightTitle}>
              Corporate Tax <br/>Impact Assessment
              </p>
            </div>
          <div className={styles.ctax_para}>
            <p className={styles.wingRightTitle}>
            Corporate Tax <br/>registration
            </p>
          </div>
          <div className={styles.ctax_para}>
              <p className={styles.wingRightTitle}>
              Filing of Corporate<br/> Tax returns
              </p>
            </div>
            <div className={styles.ctax_para}>
              <p className={styles.wingRightTitle}>
              Corporate Tax <br/>De-registration
              </p>
            </div>
            </div>    
    </Container>
  );
}

export default AdgmWings;
