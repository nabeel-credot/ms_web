import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./FCS.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';
function FCS_section() {
  useEffect(() => {
    AOS.init({
        duration: 1400,
        once: false,
    })
}, []);
  return (
    <Container>
    <div className={cstyles.FCS_section2_container} data-aos="fade-up">
      <h3>Family Business Advisory</h3>
      <div className={cstyles.FCS_section2_Box}>
        <div className={cstyles.FCS_section2_content}>
          <div className={cstyles.details24400W}>Reduced risk of fraud</div>
          <div className={styles.service_detail} style={{ color: "#ffffff", marginTop: "20px" }}>Risk of fraud is no new spectacle in the business world. Although the sole responsibility for due diligence and management rests with company owners, outsourcing to a financial controller mitigates risk with expertise and by even having the duties segregated. The financial controller performs monitoring and reporting tasks, who are not the same individuals that have authorization or spending powers which in turn minimizes the fraud intensity.</div>
        </div>
        <div className={cstyles.FCS_section2_content}>
          <div className={cstyles.details24400W}>Ensuring compliance with the rules and regulation</div>
          <div className={styles.service_detail} style={{ color: "#ffffff", marginTop: "20px" }}>
            We know tax and financial regulations in the UAE can be complicated and overwhelming at times, and many business owners lack the technical knowledge needed to make sure they are compliant. A central component of the role of a financial controller is to maintain compliance with the rules and regulations of UAE, as well as to meet financial institutions’ requirements. Although businesses without the right exposure or experience may think they can survive without this form of help, the reality is that the fines for non-compliance can be detrimental to the company.
          </div>
        </div>
        <div className={cstyles.FCS_section2_content}>
          <div className={cstyles.details24400W}>
            Business growth guidance
          </div>
          <div className={styles.service_detail} style={{ color: "#ffffff", marginTop: "20px" }}>
            We will work with your management as a team to anticipate the foremost needs at each point of your business development.
          </div>
        </div>
        <div className={cstyles.FCS_section2_content}>
          <div className={cstyles.details24400W}>
            Project-based consultancy
          </div>
          <div className={styles.service_detail} style={{ color: "#ffffff", marginTop: "30px" }}>
            MS provides Project-based consultancy right from the theoretical stage of certain concepts through the commissioning stage and at every point of the business’ project.
          </div>
        </div>
        <div className={cstyles.FCS_section2_content}>
          <div className={cstyles.details24400W}>
            Interim and flexible service
          </div>
          <div className={styles.service_detail} style={{ color: "#ffffff", marginTop: "20px" }}>
            Our financial controller service is also available on an interim basis, where financial management and our functional and business expertise will assist and generate distinct results at all times.
          </div>
        </div>
        <div className={cstyles.FCS_section2_content}>
          <div className={cstyles.details24400W}>
            Confidentiality
          </div>
          <div className={styles.service_detail} style={{ color: "#ffffff", marginTop: "20px" }}>
            Most of the small businesses would have experienced a lack of separation or segregation of duty between departments.
          </div>
          <div className={styles.service_detail} style={{ color: "#ffffff", marginTop: "10px" }}>
            When employees work close by the accounting department, the chances to pass on the confidential information in the wrong hands is highly possible. If this occurs, highly sensitive information could be let out, affecting the company.
          </div>
          <div className={styles.service_detail} style={{ color: "#ffffff", marginTop: "10px" }}>
          Our outsourcing financial controller service is customized based on your needs, the market you are working in, and the skills you require!
          </div>
        </div>
      </div>

      <div className={cstyles.FCS_section2_YHead}>
      Whether you need temporary support to help your company remain strong through transitional times, or if you are searching for a permanent solution, we can provide the right answers and strategies that will allow you to concentrate more on your core business functions. 
      </div>
    </div>
    </Container>
  )
}

export default FCS_section