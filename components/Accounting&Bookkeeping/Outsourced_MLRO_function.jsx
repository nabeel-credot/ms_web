import React from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
const activities = [
  "Conducting AML and KYC checks",
  "Serving as the primary contact within the entity for UAE authorities and the DFSA on money laundering matters",
  "Maintaining systems, controls, and generating relevant reports",
  "Preparing the Internal Capital Adequacy Assessment Process (ICAAP).",
  "Compiling AML annual returns and Central Bank biannual reports",
  "Reporting Suspicious Activity in accordance with Federal AML legislation.",
  "Overseeing day-to-day compliance operations, ensuring adherence to AML policies, procedures, systems, and controls.",
  "Establishing and managing an effective money laundering training program and awareness initiatives.",
];
export default function DIFC_Business() {
  return (
    <div className={styles.function_container}>
      <Container>
        <div className={styles.Business_title} data-aos="fade-up">
        Functions of the Outsourced MLRO <br/>in a Financial Entity
        </div>
        <p className={styles.function_para}  data-aos="fade-up">The externally appointed Money Laundering Reporting Officer (MLRO) undertakes the following responsibilities within the financial entity</p>
        <div className={styles.bussiness_Wrapper} data-aos="fade-up">
          {activities.map((item, index) => {
            return (
              <div className={styles.function_single} key={index}>
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
