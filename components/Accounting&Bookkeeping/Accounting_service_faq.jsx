import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Collapsible from "./Collapsiblenew";
import styles from "./Styles.module.css";

import Container from "../Common/Container";



function ADGM_FAQ_Service() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (

   
    <Container>
      <div className={styles.onlineBookingService_container}>
       
<div className={styles.faqtitle} data-aos="fade-right"> Frequently Asked Questions (FAQ)</div>
        <div className={`${styles.onlineBookingService_sub} ${styles.faqservice}`}>
          <div className={styles.columns} data-aos="fade-right" >
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What accounting services does your company offer for businesses in ADGM?"
              }
            >
              <div>
              We specialize in accounting services tailored to meet ADGM standards. Our offerings include accurate financial reporting, meticulous bookkeeping, payroll management, and full compliance with ADGM regulations.
              </div>
            </Collapsible>

            <Collapsible open={false} arrow={true} title={"What are the specific accounting standards followed by ADGM?"}>
              <div>
              ADGM primarily follows international accounting standards such as International Financial Reporting Standards (IFRS) and International Accounting Standards (IAS). These standards provide a globally recognized framework for financial reporting, ensuring transparency, comparability, and accuracy in financial statements.
              </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left" >
            <Collapsible
              open={false}
              arrow={true}
              title={
                "Do you offer customized accounting solutions based on the specific needs of businesses operating within ADGM?"
              }
            >
              <div>
              Yes, we do. We offer customized accounting solutions designed to meet the specific needs of businesses operating within ADGM. Our tailored services ensure that each client receives the support necessary to address their unique financial requirements and comply with ADGM regulations effectively.
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
