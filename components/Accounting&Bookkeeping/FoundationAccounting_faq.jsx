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
                "Are there any specific tax considerations or implications for foundations in ADGM?"
              }
            >
              <div>
              In ADGM, foundations may have specific tax implications depending on various factors, although typically less complex than other structures.
              </div>
            </Collapsible>
            <Collapsible open={false} arrow={true} title={"What are the types of services under foundation accounting?"}>
              <div>
              Foundation accounting functions are the same as the normal accounting services but particularly tailored to the accounting of Foundations. It will include general services like bookkeeping and payroll, financial management, and tax compliance.
              </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left" >
            <Collapsible
              open={false}
              arrow={true}
              title={
                "How does your company ensure compliance with ADGM regulations while providing foundation accounting services?"
              }
            >
              <div>
              We ensure ADGM compliance through a dedicated team familiar with its regulations. We conduct regular audits, update internal procedures, and stay informed of regulatory changes, ensuring the highest standards in foundation accounting services.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What are ADGM Foundations?"
              }
            >
              <div>
              Foundations are an attractive platform that allows its founders to bestow assets, separating founders from the ownership of assets for wealth protection and tax efficiency. Foundations are typically used for the purposes of family wealth and succession planning, philanthropic purposes, charitable causes, and holding structures for underlying businesses and investments. They allow local and international families as well as family offices to structure their business and succession planning arrangements efficiently for the next generation.
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
