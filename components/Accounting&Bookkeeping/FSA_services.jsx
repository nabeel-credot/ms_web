import React, { useEffect, useState } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./FSA.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import YellowBorderCard from "../YellowBorderCardBlueHover"
import Container from '../Common/Container';
function Advisory_services() {

  useEffect(() => {
    AOS.init({
        duration: 1400,
        once: false,
    })
}, []);

  return (
    <Container>
    <div className={styles.FSA_section_container} data-aos="fade-up">
      <div className={cstyles.black36_heading_audit + " " + cstyles.textCntr} style={{ marginTop: 30 }}>
        Our Other <span style={{ color: "#D4AE31", marginLeft: 5 }}>Audit Services</span>
      </div>

      <div className={styles.FSA_sub_box}>
        <div className={styles.subBox}>
          <YellowBorderCard src="/images/audit.png" title={<>Operational Audits</>} imgWidth="100" imgHeight="100" href="/operational_audit"  >
            <div >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>
        <div  className={styles.subBox}>
          <YellowBorderCard src="/images/fsa1.svg" title={<>Fraud & Financial Crime<br/>Investigation</>} imgWidth="100" imgHeight="100"  href="/">
            <div >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>

        </div>
      </div>
    </div>
    </Container>
  )
}

export default Advisory_services