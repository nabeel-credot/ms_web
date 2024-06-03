import React from 'react'
import Container from '../Common/Container'
import styles from "./Styles.module.css"
import { useState } from 'react';
import Appointment from "./Appointment_schedule";
import Image from "next/image";
export default function DIFC_Tech() {
  const [appoint, setAppoint] = useState(false);
  return (
    <div>
      <div className={styles.tech_webOnly}>
    <Container>
        <div className={styles.techcontainer} data-aos="fade-up">
    <div className={styles.techTitle} >Technology & <br/>
innovation license in the <span style={{fontWeight:"500"}}>DIFC</span></div>

<p>The DIFC Innovation Hub, the region&apos;s most extensive innovation community, hosts over 700 growth-stage technology firms, established innovation companies, digital labs, venture capital firms, regulators, and educational entities.</p>
 <p>The DIFC Innovation Hub hosts the primary and largest financial technology accelerator in the Middle East, Africa, and South Asia (MEASA) region. For FinTech, InsurTech, RegTech, or Islamic FinTech start-ups seeking to seize abundant opportunities with the region&apos;s leading financial service organizations, it is the exclusive destination. </p>

   <p>For those aspiring to expand their start-ups and advance FinTech innovation, the Innovation Hub offers a comprehensive suite of resources. This includes accelerator programs, licensing, co-working support, a vibrant community of like-minded individuals, and a supportive, all-encompassing regulatory framework.</p>
  <button className={styles.difctechbtn} onClick={() => setAppoint(true)}>Setting up in DIFC</button>
   </div>
    </Container>
    <div className={styles.mobile_slide_banner}>
        <Image src="/images/responsive2.webp" width={400} height={300} />
      </div>
      {appoint && (
        <div className={styles.appointwrapper}>
          {" "}
          <Appointment appoint={appoint} setAppoint={setAppoint} />
        </div>
      )}
    </div>




    <div className={styles.tech_mobileOnly}>
    <div className={styles.techcontainer}>   
    <div className={styles.techTitle}>Technology & <br/>
innovation license in the <span style={{fontWeight:"500"}}>DIFC</span></div>

<p>The DIFC Innovation Hub, the region&apos;s most extensive innovation community, hosts over 700 growth-stage technology firms, established innovation companies, digital labs, venture capital firms, regulators, and educational entities.</p>
 <p>The DIFC Innovation Hub hosts the primary and largest financial technology accelerator in the Middle East, Africa, and South Asia (MEASA) region. For FinTech, InsurTech, RegTech, or Islamic FinTech start-ups seeking to seize abundant opportunities with the region&apos;s leading financial service organizations, it is the exclusive destination. </p>

   <p>For those aspiring to expand their start-ups and advance FinTech innovation, the Innovation Hub offers a comprehensive suite of resources. This includes accelerator programs, licensing, co-working support, a vibrant community of like-minded individuals, and a supportive, all-encompassing regulatory framework.</p>
  <div className={styles.techbtn_div}><button className={styles.difctechbtn} onClick={() => setAppoint(true)}>Setting up in DIFC</button></div>
   </div>
    </div>
    {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}
    </div>
  )
}
