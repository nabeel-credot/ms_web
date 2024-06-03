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
          <YellowBorderCard src="/images/icons 5-09.png" href="/dmcc-freezone-setup-services"
           title={<>DMCC Freezone<br/> Setup Services</>} imgWidth="110" imgHeight="110" fontSize="12px">
            <div >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/ADGM_Compliance_Filings.png"   href="/dmcc-compliance-and-corporate-services"
          title={<>DMCC Compliance &<br/> Corporate Services</>} imgWidth="110" imgHeight="110" fontSize="12px" >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/Management_Advisory_Assistance.png" href="/management-advisory-and-assistance-dmcc"
          title={<>Management Advisory <br/>& Assistance</>} imgWidth="120" imgHeight="110" fontSize="12px" >
            <div >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
          </YellowBorderCard>
        </div>

        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/Bank_account_opening.png" href="/dmcc-business-bank-account-setup-assistance"
          title={<>DMCC Business<br/> Bank Account Setup Assistance</>} imgWidth="100" imgHeight="110" fontSize="12px" >
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