import React from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
const activities = [
  "Ensure the company's compliance with the DFSA PIB module as an Authorised Individual.",
  "Provide regular capital adequacy reports to the SEO and the Board.",
  "Prepare budgets and financial projections, anticipating issues and ensuring continuous adequacy of Capital and liquid Resources.",
  "Oversee finance and accounting functions, ensuring adherence to IFRS and applicable rules.",
  "Monitor and review financial transactions.",
  "Timely submission of PIB returns through EPRS.",
  "Establish and monitor implementation of financial policies, procedures, systems, and controls.",
  "Oversee financial aspects in internal audit and liaise with CO & MLRO as required",
  "Deliver timely reports on Capital Resources, Risk-Capital Requirements, and liquid assets to the SEO and/or Board.",
  "Coordinate with external auditors for their opinions on financial statements and agreed-up onprocedure report on PIB.",
];
export default function DIFC_Business() {
  return (
    <div className={styles.function_container}>
      <Container>
        <div className={styles.Business_title} data-aos="fade-up">
        Finance Officer Responsibilities
        </div>
        <div className={styles.bussiness_Wrapper} data-aos="fade-up">
          {activities.map((item, index) => {
            return (
              <div className={styles.responsibility_single} key={index}>
               <div className={styles.pointwidth}> <div className={styles.Business_point}>
                  <Image src="/images/yellowtick.svg"  alt='yellowtick' layout="fill" />
                </div></div>
                <div className={styles.contentwidth}>{item}</div>
              </div>
            );
          })}
          {/* <div className={styles.business_leftcontainer}></div>
    <div className={styles.business_rightcontainer}></div> */}
        </div>
      </Container>
    </div>
  );
}
