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
                "Are there any penalties for non-compliance filings in ADGM?"
              }
            >
              <div>
              Yes, there are penalties for non-compliance with filing requirements in ADGM, including financial fines, regulatory sanctions, and reputational damage.
              </div>
            </Collapsible>

            <Collapsible open={false} arrow={true} title={"Is there legislation in ADGM regarding the Common Reporting Standard (CRS)?"}>
              <div>
              The Abu Dhabi Global Market (ADGM) made amendments to the Common Reporting Standard (CRS) Regulations in 2022 to align them with the newly introduced Foreign Account Tax Compliance Act (FATCA) Regulations. These changes primarily address administrative and procedural aspects without significantly altering the substance of the CRS requirements.
              </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left" >
            <Collapsible
              open={false}
              arrow={true}
              title={
                "Do I need to appoint an auditor for my business in ADGM?"
              }
            >
              <div>
              Yes, in ADGM, businesses usually need to appoint an auditor. This requirement ensures transparency and accuracy in financial reporting, as auditors independently verify financial statements to comply with regulatory standards.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"How does your company support ADGM businesses with compliance filings?"}
            >
              <div>
              can assist with compliance filings for your ADGM business by providing expertise in navigating regulatory requirements, preparing documentation, meeting deadlines, conducting risk assessments, supporting audits, and providing updates on regulatory changes.
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
