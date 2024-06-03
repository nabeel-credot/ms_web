import React from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
const activities = [
  "Software House",
  "IT Infrastructure",
  "Technology Research & Development",
  "Computer Consultancies",
  "Information Technology Consultants",
  "Network Consultancies",
  "Internet Consultancy",
  "Portal",
  "Public Networking",
  "Data Classification & Analysis Services",
  "Services",
  "Education & Training Computer Software",
  "Web-Design",
  "Education Technologies Research & Development",
  "Cyber Security Consultancy",
  "Electronic Chips Programming"
];
export default function DIFC_Business() {
  return (
    <div className={styles.business_container}>
      <Container>
        <div className={styles.Business_title} data-aos="fade-up">
          Business Activities<br/> Eligible for Innovation License
        </div>
        <div className={styles.bussiness_Wrapper} data-aos="fade-up">
          {activities.map((item, index) => {
            return (
              <div className={styles.bussiness_single} key={index}>
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
