import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Link from "next/link"
import Appointment from "./Appointment_schedule";
import { useState } from "react";

function Company_Form_Banner() {
    const [appoint, setAppoint] = useState(false);
return (
    <div className={styles.company_formContainer_difc}>
        <Container>
        <div className={styles.comp_form} data-aos="fade-right">
    <div className={styles.assistTitle_corp} style={{color:"white"}}>Why MS for Accounting services<br/> in the UAE</div>
    <p className={styles.company_form_para}>
    Uncertain regulations shouldn&apos;t hold back your UAE ambitions. MS Accounting Services in UAE provides the clarity and security you need to thrive. Our experienced team is with solutions for each business, ensuring precision, efficiency, and unwavering compliance with UAE’s regulations. We go beyond simply managing your finances. We become a trusted partner, handling every aspect from bookkeeping to taxes, giving you time and confidence to focus on your core business. Focus on your business vision, let us handle the financial details.
    </p>
    <div>
<button className={styles.accounting_button} onClick={() => setAppoint(true)}>
    <span>Discover More</span>
</button>     
{appoint && (
        <div className={styles.appointwrapper}>
          {" "}
          <Appointment appoint={appoint} setAppoint={setAppoint} />
        </div>
      )} </div>
</div>
    </Container>
    </div>
);
}

export default Company_Form_Banner;
