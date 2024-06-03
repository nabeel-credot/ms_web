import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Link from "next/link"
import { useState } from "react";
import Appointment from "./Appointment_schedule";
function Company_Form_Banner() {
  const [appoint, setAppoint] = useState(false);
  return (
    <div className={styles.role_corporateContainer}>
        <Container>
          <div className={styles.role_corporate} data-aos="fade-left">
      <div className={styles.assistTitle_corp} style={{color:"white"}}>Role of <span style={{fontWeight:"500"}}>DFSA</span> in <span style={{fontWeight:"500"}}>DIFC</span></div>
      <p className={styles.company_form_para}>
      The Dubai Financial Services Authority (DFSA) is the autonomous regulator responsible for overseeing financial services within the Dubai International Financial Centre (DIFC), a designated financial free zone in Dubai, UAE. Its regulatory scope includes asset management, banking and credit services, securities, collective investment funds, custody and trust services, commodities futures trading, Islamic finance, insurance, as well as the operation of an international equities exchange and an international commodities derivatives exchange.
      </p>
      <div>
      
  <button className={styles.company_form_button_difc} onClick={() => setAppoint(true)}>Discover More
  </button>
  {appoint && (
        <div className={styles.appointwrapper}>
          {" "}
          <Appointment appoint={appoint} setAppoint={setAppoint} />
        </div>
      )}
     </div>
</div>
      </Container>
    </div>
  );
}

export default Company_Form_Banner;
