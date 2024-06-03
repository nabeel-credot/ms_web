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
          <Collapsible open={false} arrow={true} title={"What tax services does your company offer to address the needs of businesses operating in ADGM?"}>
              <div>
              Our firm provides comprehensive tax services tailored to the needs of ADGM entities. We offer expertise in corporate tax, VAT compliance, and ensuring adherence to ESR requirements. Our team is dedicated to optimizing your tax position while ensuring full compliance with ADGM regulations.
              </div>
            </Collapsible>
          <Collapsible
              open={false}
              arrow={true}
              title={
                "What tax benefits does operating in ADGM offer? "
              }
            >
              <div>
              ADGM offers an enticing tax landscape with zero corporate tax, no personal income tax, no capital gains tax, no withholding tax, and no VAT. Additionally, businesses can leverage tax treaties, incentives, and a stable regulatory environment, enhancing their financial advantage.
              </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left" >
          <Collapsible
              open={false}
              arrow={true}
              title={
                "What tax incentives or exemptions does ADGM offer to attract businesses, particularly in sectors like technology startups or financial services?"
              }
            >
              <div>
              ADGM provides targeted tax incentives and exemptions to attract businesses, including technology startups, financial services firms, and companies in designated sectors or free zones. These incentives aim to foster growth and innovation while minimizing tax burdens.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                " Can your company assist with tax planning to minimize liabilities?"
              }
            >
              <div>
              Our expertise lies in advising companies on tax-efficient structuring of operations, investments, and transactions within ADGM. We ensure compliance with regulations in ADGM.
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
