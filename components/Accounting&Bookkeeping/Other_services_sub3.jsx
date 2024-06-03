import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./OtherService.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


import YellowBorderCard from "../YellowBorderCardBlueHoverServices"
function FDD_sub5() {
  useEffect(() => {
    AOS.init({
        duration: 1400,
        once: false,
    })
}, []);

  return (
    <div className={cstyles.otherServices_sub} data-aos="fade-up">
      <div className={styles.details24500}>
        Audit Services | Audit Firm in Abudhabi, UAE
      </div>
      <div className={cstyles.OS_sub_box}>
        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/os8.svg"  href="/financial_statement_audit"
          title={<>Financial Statement<br /> Audits</>} imgWidth="110" imgHeight="110" fontSize="16px" padding="50px 22px">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        <div className={cstyles.OS_sub_boxH}>

          <YellowBorderCard src="/images/os9.svg" href="/operational_audit"
           title={<>Operational<br /> Audits</>} imgWidth="110" imgHeight="110" fontSize="16px" padding="50px 22px">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>
        
        <div className={cstyles.OS_sub_boxH}>
          <YellowBorderCard src="/images/os10.svg" href="/financial_controller_services"
           title={<>Fraud & Financial<br /> Crime Investigation</>} imgWidth="110" imgHeight="110" fontSize="16px" padding="50px 22px">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </div>

          </YellowBorderCard>
        </div>

      </div>
    </div>
  )
}

export default FDD_sub5