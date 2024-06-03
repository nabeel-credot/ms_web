import React, { useEffect, useState } from 'react'
import styles from "./Advisory.module.css"
import cstyles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import YellowBorderCard from "../YellowBorderCardBlueHover"
import Container from '../Common/Container';
function Advisory_services() {

  useEffect(()=>{
    AOS.init({
      duration: 1400,
            once: false
    });
  },[])

  return (
    <Container>
      <div className={styles.Advisory_services_container} data-aos="fade-up">
        <div className={cstyles.black36_heading_audit + " " + cstyles.textCntr}>
          Other Enterprise Services
        </div>
        <div className={cstyles.OS_sub_box}>
          <div className={cstyles.OS_sub_boxH}>
            <YellowBorderCard src="/images/transaction.png" title={<>Complex Transactions Treatment</>} imgWidth="100" imgHeight="100" padding="70px 22px" href="/complex_transaction_treatment">
              <div style={{ padding: "10px 10px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>

          <div className={cstyles.OS_sub_boxH}>
            <YellowBorderCard src="/images/fcsIcon1.svg" title={<>Bookkeeping & Reporting</>} imgWidth="100" imgHeight="100" padding="70px 22px" href="/accounting-bookkeeping" >
              <div style={{ padding: "10px 10px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>

          <div className={cstyles.OS_sub_boxH}>
            <YellowBorderCard src="/images/fcsIcon2.svg" title={<>Management Accounting</>} imgWidth="100" imgHeight="100" padding="70px 22px" href="/management_accounting">
              <div style={{ padding: "10px 10px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>

          <div className={cstyles.OS_sub_boxH}>
            <YellowBorderCard src="/images/fcsIcon3.svg" title={<>Payroll Services</>} imgWidth="100" imgHeight="100" padding="70px 22px"  href="/payroll-services">
              <div style={{ padding: "10px 10px" }}>
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