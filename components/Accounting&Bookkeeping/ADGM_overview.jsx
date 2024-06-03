import React, { useEffect,useState } from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Image from "next/image";
import Appointment from "./Appointment_schedule"
function ADGM_servicenew() {
  const isConditionMet = true;
  const [appoint,setAppoint]=useState(false)
  return (
    <Container>
      <div className={styles.servicediv}>
        <div className={styles.adgmoverview}>
          <div className={styles.overview_left} data-aos="fade-right">
        <div className={styles.servicenewTitle}>
        ADGM: Gateway to Capital of Capital
        </div>
          <p className={styles.adgmpara}>
          Abu Dhabi Global Market (ADGM) is a premier International Financial Centre (IFC), renowned for its adherence to 100% English common law offering clarity, stability, and confidence to businesses and investors worldwide. With Al Reem Island included, ADGM is instrumental in Abu Dhabi&apos;s vision to emerge as one of the world&apos;s largest international financial districts. ADGM offers a comprehensive suite of business solutions encompassing different legal structures, streamlined company registration and incorporation processes, regulatory guidance and oversight, efficient dispute resolution mechanisms, and access to a vibrant community of like-minded professionals. ADGM&apos;s expansion to Al Reem Island has drawn international companies to its tax-friendly jurisdiction, reinforcing its position while further establishing Abu Dhabi`&apos;s renown as the `&apos;Capital of Capital`&apos;. This strategic move not only advances Abu Dhabi`&apos;s economic diversification efforts but also elevates its standing as a leading global financial center, shaping the financial landscape through innovative and strategic initiatives.
          </p></div>
          <div><Appointment isConditionMet={isConditionMet} appoint={appoint} setAppoint={setAppoint} closehide={true}/></div>

          {/* <div className={styles.over_image}>
            <img src="/images/adgmlogo.svg" />
          </div>
          <div className={styles.over_imagemobile}>
            <img src="/images/adgmmobilelogo.svg" />
          </div> */}
        </div>
      </div>
      {/* <hr className={styles.linehr} /> */}
    </Container>
  );
}

export default ADGM_servicenew;
