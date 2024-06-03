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
        Our Other Advisory Services
      </div>
      <div className={cstyles.OS_sub_box}>
        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/property.png" href="/business-valuation"
           title={<>Business Valuation</>} imgWidth="110" imgHeight="110" fontSize="12px">
            <div >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/advisory1.svg"   href="/corporate_finance"
          title={<>Corporate Finance</>} imgWidth="110" imgHeight="110" fontSize="12px" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/advisory2.svg" href="/fd_on_demand"
          title={<>FD on Demand</>} imgWidth="110" imgHeight="110" fontSize="12px" >
            <div >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/advisory3.svg" href="/financial_advisory_service"
          title={<>Financial Services</>} imgWidth="110" imgHeight="110" fontSize="12px" >
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