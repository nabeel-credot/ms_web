import React, { useEffect, useState } from 'react'
import styles from "./Advisory.module.css"
import cstyles from "./Styles.module.css"
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
    <Container style={{padding:0}}>
    <div className={styles.Advisory_services_container}  data-aos="fade-up">
      <div className={cstyles.black36_heading_audit+" "+cstyles.textCntr}>
      Businesses benefit from our specialized experience in
      </div>
      <div className={cstyles.OS_sub_box}>
        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/audit.png" href="/internal-audit"
           title={<>Internal Audit</>} imgWidth="110" imgHeight="110" fontSize="12px">
            <div >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/corporate.svg"   href="/corporate-governance"
          title={<>Corporate<br/> Governance</>} imgWidth="110" imgHeight="110" fontSize="12px" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/risk-management.svg" href="/risk-management"
          title={<>Risk Management</>} imgWidth="110" imgHeight="110" fontSize="12px" >
            <div >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/policy_process_advisory.png" href="/policy-and-process-advisory"
          title={<>Policy & Process <br/>Advisory</>} imgWidth="110" imgHeight="110" fontSize="12px" >
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