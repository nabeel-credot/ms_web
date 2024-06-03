import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Styles.module.css"

import cstyles from "./taxation.module.css"
import Image from 'next/image'

import YellowBorderCard from "../YellowBorderCardinBlueBg"
import Container from '../Common/Container';
function Accounting_service() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    })
  }, []);

  return (
    <Container style={{ padding: "0 10px" }}>
      <div className={cstyles.accounting_service_container} data-aos="fade-up">
        <div className={cstyles.left}>
          <div className={styles.white_heading }>
            International Tax
          </div>
          <div className={styles.details18OpenWhite + " " + styles.payrollService_details} >
            Insight on the Introduction of the new Economic Substances Rules in the UAE.
          </div>
          <div className={styles.details18OpenWhite_UAE + " " + styles.payrollService_details} >
            The United Arab Emirates (UAE) Cabinet issued the Economic Substance Regulations requiring all UAE onshore and free zone companies that conduct
          </div>
          <div className={styles.details18OpenWhite + " " + styles.payrollService_details } >
            “Relevant Activities” to have demonstrable economic substance in the UAE with effect from 30 April 2019. UAE based companies will be required to report financial data on their Relevant Activities on an annual basis to the regulatory authority. Non-compliance with the rules will result in penalties. To guide you through this new development, we are delighted to provide Tax advisory led by tax specialists in the UAE who will walk through the following key areas:
          </div>
          <div className={cstyles.payrollService_subContainer2}>
          <ul>
            <li>
              <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
              <span className={cstyles.key + " " + styles.keyWidth}>What are the newly introduced economic substance thresholds and related compliance requirements</span>
            </li>
            <li>
              <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
              <span className={cstyles.key + " " + styles.keyWidth}>How the new requirements will impact UAE based businesses</span>
            </li>
            <li>
              <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
              <span className={cstyles.key + " " + styles.keyWidth}>MS’s approach to the new rules</span>
            </li>
            <li>
              <div className={styles.wArrow}> <Image src="/images/LarrowW.svg" alt="" width={9} height={15} className={styles.wArrow} /></div>
              <span className={cstyles.key + " " + styles.keyWidth}>Q & A Session</span>
            </li>
          </ul>
        </div>
        </div>

        <div className={cstyles.right}>
        <div className={styles.teamMs_sub2}>
          <div className={styles.teamMsbox}>
            <YellowBorderCard src="/images/taxWn.png" src2="/images/audit2.svg"
              title={<>Help Me Claim<br />My Tax</>} />
          </div>
          <div className={styles.teamMsbox}>
            <YellowBorderCard src="/images/audit8.svg" src2="/images/audit8W.png" title={<>Help To Get Tax<br /> Residency Certificate</>} />
          </div>
          <div className={styles.teamMsbox}>
            <YellowBorderCard src="/images/audit9.svg" src2="/images/audit9W.png" title={<>In Need Of Tax Audit</>} />
          </div>
          <div className={styles.teamMsbox}>
            <YellowBorderCard src="/images/audit10.svg" src2="/images/audit10W.png" title={<>With Tax<br/>Accounting</>} />
          </div>

        </div>
        </div>


       

       
      </div>
    </Container>
  )
}

export default Accounting_service