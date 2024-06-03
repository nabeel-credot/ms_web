import React from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
const activities = [
  "Develop and update policies to prevent illegal or unethical conduct.",
  "Oversee day-to-day implementation of the compliance framework.",
  "Establish guidelines for staff and service providers to adhere to laws and regulations.",
  "Implement and supervise compliance checks and controls",
  "Address compliance audit remediation activities.",
  "Liaise with regulatory authorities on compliance matters.",
  "Respond to alleged violations and initiate investigative procedures",
  "Develop a communication program to promote understanding of compliance issues.",
  "Respond to requests for information from authorities or regulators.",
  "Act on relevant findings, recommendations, and directives",
  "Identify and assess compliance risks in business activities, products, and relationships.",
  "Maintain an inventory of relevant laws and regulations, providing guidance to staff.",
  "Conduct regular compliance risk assessments and report results to senior management.",
  "Verify clients' due diligence and perform sanction screening during onboarding.",
  "Guide the business on permissible activities, new products, and programs",
  "Develop a communication program to promote understanding of compliance issues.",
  "Take appropriate action in response to internal reports.",
  "Establish and maintain an anti-money laundering (AML) training program and awareness arrangements.",
  "Centralize information on compliance-related issues.",
];
export default function DIFC_Business() {
  return (
    <div className={styles.function_container}>
      <Container>
        <div className={styles.Business_title} data-aos="fade-up">
        Compliance Officer&apos;s key responsibilities
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
