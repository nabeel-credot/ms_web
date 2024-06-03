import React, { useEffect } from 'react'
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
        <div className={cstyles.black36_heading_audit + " " + cstyles.textCntr} >
          How can MS assist you?
        </div>

        <div className={styles.FSA_sub_box}>
          <div className={styles.subBox}>
            <YellowBorderCard src="/images/FDD.png" href="/financial-due-diligence"
              title={<>Financial Due<br /> Diligence</>} imgWidth="110" imgHeight="110" fontSize="12px">
              <div >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>
          <div className={styles.subBox}>
            <YellowBorderCard src="/images/business_valuation.png" href="/business-valuation"
              title={<>Business<br />Valuation</>} imgWidth="110" imgHeight="110" fontSize="12px" >
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>
          <div className={styles.subBox}>
          <YellowBorderCard src="/images/deal_advisory.png" href="/deal-advisory"
              title={<>Deal Advisory</>} imgWidth="120" imgHeight="100" fontSize="12px" >
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