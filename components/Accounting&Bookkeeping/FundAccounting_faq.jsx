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
                "What is Fund Accounting?"
              }
            >
              <div>
              Fund accounting is a specialized accounting system used by organizations that manage funds, such as nonprofit organizations, government agencies, and investment firms. It focuses on tracking and reporting the financial activities of separate funds or accounts, each with its own assets, liabilities, revenue, and expenses.
              </div>
            </Collapsible>

            <Collapsible open={false} arrow={true} title={"How does Fund Accounting apply to ADGM entities?"}>
              <div>
              Fund accounting for entities within ADGM involves managing financial activities for various investment funds, ensuring compliance with ADGM regulations. This includes segregating assets, calculating accurate net asset values (NAVs), and preparing detailed financial reports. Fund accountants also track expenses and fees while considering tax implications. By maintaining transparency and regulatory compliance, fund accounting supports investor confidence and financial integrity within the ADGM jurisdiction.
              </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left" >
            <Collapsible
              open={false}
              arrow={true}
              title={
                "Are there any tax implications associated with fund accounting activities in ADGM?"
              }
            >
              <div>
              In the Abu Dhabi Global Market (ADGM), like in many jurisdictions, fund accounting activities may have tax implications. The specific tax implications can depend on various factors such as the type of fund, the residency status of investors, the nature of investments, and any tax treaties in place between ADGM and other jurisdictions.
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
