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
    <div className={styles.assistTitle_corp} style={{color:"white"}}>We Deliver Tailored Solutions for <br/>Your Unique Requirements</div>
    <p className={styles.company_form_para}>
    At MS we deliver a range of tailored Accounting and Bookkeeping solutions designed to meet the unique requirements of our clients, with a focus on maximizing satisfaction and delivering service excellence.
    <br/>
    <br/>

    Whether you require a personalized accounting department, be it&apos;s cloud-based, onsite, or a scalable back-office solution, our team of skilled chartered accountants provides timely information to empower your business decisions.
<br/>
<br/>
Committed to providing clients with relevant insights into their accounts and business performance, MS diligently maintains and updates accounting books daily, ensuring responsiveness and timeliness at every step.
    </p>
    <div>
<button className={styles.service_button_difc} onClick={() => setAppoint(true)}>
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
