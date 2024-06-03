import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Link from "next/link"
import { useState } from "react";
import Appointment from "./Appointment_schedule";


function Company_Form_Banner() {
  const [appoint, setAppoint] = useState(false);
  return (
    <div className={styles.company_formContainer_difc}>
        <Container>
          <div className={styles.comp_form} data-aos="fade-right">
      <div className={styles.company_form_title}>Company Formation</div>
      <p className={styles.company_form_para}>
      With almost two decades of operation, the Dubai International Financial Centre (DIFC) has played a 
pivotal role in Dubai&apos;s financial services sector. The DIFC caters to the Dubai market by offering a 
regulated environment, independent legal framework, and modern infrastructure for financial 
services. With a focus on global connectivity and a diverse ecosystem of banks, insurance, and 
fintech firms, DIFC serves as a hub for international businesses. Its strategic location, English 
common law system, and support services streamline the establishment of companies. By fostering a 
skilled international workforce and facilitating connections with global markets, DIFC contributes to 
Dubai&apos;s position as a key player in the financial services industry.
      </p>
      <div>
  <button className={styles.service_button_difc}  onClick={() => setAppoint(true)}>
    <span>Discover More</span>
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
