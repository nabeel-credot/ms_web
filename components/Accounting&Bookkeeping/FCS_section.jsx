import React, { useEffect } from 'react'
import cstyles from "./Styles.module.css"
import styles from "./FCS.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from '../Common/Container';

function FCS_section() {
  useEffect(() => {
    AOS.init({
        duration: 1900,
        once: false,
    })
}, []);

  return (
    <Container>
    <div className={styles.FCS_section_container}>
      <div className={styles.FCS_section_L} data-aos="fade-right">
        <div className={styles.FCS_sectionBox}>
          <div className={styles.FCS_sectionBoxHead}>
            If you are in search for that lead accountant, that strategic planner, that expert evaluator, that solid technological, analytical, management skills and much more, read ahead:
          </div>
          <div className={styles.details20Open400Blue} style={{ marginTop: 20 }}>
            Your business is thriving, and revenue is coming in, but there are questions about your future amongst all the growth and prosperity you see. You wonder what to do about financial decisions like, are you pricing correctly? Is it time to recruit more workforce? Which resource of yours need more investment?
          </div>
          <div className={styles.details20Open400Blue} style={{ marginTop: 20 }}>
            You have got the cash flow, but should you spend the money? If the time is right to, how much? Which clients or customers are contributing to the success and in what services or product? What marketing strategy will deliver the most ROI and boost growth?
            Several questions like these will run through your mind, which is quite challenging to tackle for some businesses. Successful companies need to look beyond just selling more products and recruiting extra employees.
          </div>
        </div>
      </div>
      <div className={styles.FCS_section_L} data-aos="fade-left">
        <div className={styles.FCS_sectionBox}>
          <div className={styles.FCS_sectionBoxHead}>
            The financial controller service is an assured catalyst for steering and directing the company towards the major goals!
          </div>
          <div className={styles.details20Open400Blue} style={{ marginTop: 20 }}>
            The financial controller service offered by MS provides an essential management tool for the decision-making process. With profit maximization, market segmentation and goodwill retention taken into consideration, we offer you and the management team the right insight to deliver the planned result in both short and long-term perspectives.
          </div>
          <div className={styles.details20Open400Blue} style={{ marginTop: 20 }}>
            With our financial controller services, your company will gain direct access to top-level experts with the expertise and financial acumen to help you meet the goals of your business. Our team is working closely with you to provide the correct level of support for your current operations.
          </div>
        </div>
        <div className={styles.FCS_sectionBox}>
          <div className={styles.FCS_sectionBoxHead}>
            Business owners should be engaging a financial controller for the following benefits: Clarification of financial reporting and to keep businesses on track.
          </div>
          <div className={styles.details20Open400Blue} style={{ marginTop: 20 }}>
            MS provides useful insight and clarity about business operations and performance, where financial structures and procedures are more complex. Monthly reconciliations are just not enough at all to give an accurate picture of your business, and there may be a high risk of financial misstatements.
          </div>
          <div className={styles.details20Open400Blue} style={{ marginTop: 20 }}>
          As a qualified controller, we can enforce appropriate accounting principles, analyzing suitable KPIs for your business and ensure consistency of monthly and annual financials of your company.
          </div>
        </div>
      </div>
    </div>
    </Container>
  )
}

export default FCS_section