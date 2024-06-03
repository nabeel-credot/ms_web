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
          <YellowBorderCard src="/images/Transaction_advisory.png" href="/transaction-advisory"
           title={<>Transaction Advisory</>} imgWidth="110" imgHeight="110" fontSize="12px">
            <div >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/Risk_advisory.png"   href="/risk-advisory"
          title={<>Risk Advisory</>} imgWidth="110" imgHeight="110" fontSize="12px" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/mergers_and_acquisitions.png" href="/mergers-and-acquisitions"
          title={<>Mergers And<br/> Acquisitions</>} imgWidth="120" imgHeight="110" fontSize="12px" >
            <div >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/management_advisory.png" href="/management-advisory"
          title={<>Management Advisory</>} imgWidth="100" imgHeight="110" fontSize="12px" >
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