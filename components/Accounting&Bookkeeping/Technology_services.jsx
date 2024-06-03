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
    <Container style={{padding:0}}>
      <div className={styles.FSA_section_container} data-aos="fade-up">
        <div className={cstyles.black36_heading_audit + " " + cstyles.textCntr} >
        Businesses benefit from our specialized experience in
        </div>

        <div className={styles.FSA_sub_box}>
          <div className={styles.subBox}>
            <YellowBorderCard src="/images/digital_transformation.png" href="/digital-transformation"
              title={<>Digital<br/>Transformation</>} imgWidth="110" imgHeight="110" fontSize="12px">
              <div >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>
          <div className={styles.subBox}>
            <YellowBorderCard src="/images/ERP_advisory.png" href="/erp-advisory"
              title={<>ERP Advisory</>} imgWidth="110" imgHeight="110" fontSize="12px" >
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>
          <div className={styles.subBox}>
          <YellowBorderCard src="/images/data_analysis.png" href="/data-analysis"
              title={<>Data Analysis</>} imgWidth="110" imgHeight="110" fontSize="12px" >
              <div >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>
          <div className={styles.subBox}>
          <YellowBorderCard src="/images/Blockchain.png" href="/blockchain"
              title={<>Blockchain</>} imgWidth="110" imgHeight="110" fontSize="12px" >
              <div >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>
          <div className={styles.subBox}>
          <YellowBorderCard src="/images/RPA.png" href="/robotic-process-automation"
              title={<>Robotic Process <br/>Automation</>} imgWidth="110" imgHeight="110" fontSize="12px" >
              <div >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
              </div>
            </YellowBorderCard>
          </div>
            <div className={styles.subBox}>
          <YellowBorderCard src="/images/AI.png" href="artificial-intelligence"
              title={<>Artificial Intelligence</>} imgWidth="110" imgHeight="110" fontSize="12px" >
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