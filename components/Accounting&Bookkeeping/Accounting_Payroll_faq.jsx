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
                "What specific payroll services does your company offer in ADGM?"
              }
            >
              <div>
              Our services include end-to-end payroll processing, accurate tax calculations in accordance with ADGM regulations, meticulous compliance management to ensure adherence to local laws and labor regulations, and detailed reporting to provide insights into payroll expenditures and compliance metrics.
              </div>
            </Collapsible>

            <Collapsible open={false} arrow={true} title={"Does your company ensure the security and confidentiality of employee payroll data?"}>
              <div>
              Yes, we employ strong encryption protocols, enforce strict access controls, and adhere to all relevant data protection regulations in ADGM. Rest assured, your payroll information is always kept secure and confidential.
              </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left" >
            <Collapsible
              open={false}
              arrow={true}
              title={
                "Does your company ensure compliance with ADGM payroll, tax, and labor regulations?"
              }
            >
              <div>
              We maintain a thorough understanding of ADGM payroll regulations, tax laws, labor laws, and other compliance requirements. Our processes are designed to ensure strict adherence to these regulations, providing you with peace of mind regarding compliance.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What is your cost structure for payroll services in ADGM?"
              }
            >
              <div>
              Our cost structure for payroll services in ADGM is tailored to your business needs. We offer competitive pricing based on factors such as company size, frequency of payroll processing, and additional services required. 
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
