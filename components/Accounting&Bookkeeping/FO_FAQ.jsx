import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Collapsible from "./Collapsiblenew";
import styles from "./Styles.module.css";

import Container from "../Common/Container";




function ADGM_FAQ_Service({faqData}) {
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
            <div className={styles.columns} data-aos="fade-right">
            <Collapsible
                open={false}
                arrow={true}
                title={" How can I benefit from outsourcing Finance Officer services for ADGM ?"}
              >
                <div>
                Outsourcing Finance Officer services can save you time, ensure compliance, and provide access to specialized expertise, allowing you to focus on core business activities.
                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "Why do I need an ADGM Finance Officer for my business?"
                }
              >
                <div>
                An ADGM Finance Officer ensures that your business adheres to financial regulations, manages risks effectively, and maintains compliance with ADGM authorities, ultimately contributing to the success and sustainability of your operations.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "How can Finance Officers help with regulatory compliance?"
                }
              >
                <div>
                Our experienced Finance Officers stay updated on ADGM regulations, ensuring that your business remains compliant with the latest financial requirements and standards.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "Can you assist with financial planning for my business?"
                }
              >
                <div>
                Yes, our ADGM Finance Officers specialize in financial planning, providing strategic advice and guidance to help your business achieve its financial goals.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "How do you handle risk management for businesses?"
                }
              >
                <div>
                Our Finance Officers conduct thorough risk assessments and stress test scenarios, develop risk management strategies, and implement measures to mitigate potential financial risks within your business.
                </div>
              </Collapsible>
            </div>
  
            <div className={styles.columns} data-aos="fade-left">
            <Collapsible
                open={false}
                arrow={true}
                title={
                  "What services do Finance Officers provide?"
                }
              >
                <div>
                Our ADGM Finance Officers offer a range of financial services, including but not limited to financial planning, risk management, compliance, and regulatory reporting.
                </div>
              </Collapsible>
           
              <Collapsible
                open={false}
                arrow={true}
                title={" Are your ADGM Finance Officers certified and experienced?"}
              >
                <div>
                Yes, our Finance Officers are highly qualified, certified professionals with extensive experience in financial services and a deep understanding of ADGM regulations.
                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={" How do you ensure confidentiality and security of financial information?"}
              >
                <div>
                We prioritize the confidentiality and security of your financial information. Our team follows strict data protection measures and complies with industry best practices to safeguard your sensitive data.
                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={" What sets your ADGM Finance Officer services apart from others?"}
              >
                <div>
                Our services are distinguished by a combination of expertise, commitment to compliance, personalized attention, and a thorough understanding of the unique financial landscape within ADGM.
                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={" How do I get started with your ADGM Finance Officer services?"}
              >
                <div>
                To get started, simply reach out to us through our contact page, and our team will assist you in understanding your specific requirements and initiating the onboarding process.
                </div>
              </Collapsible> 
            </div>
          </div>
        </div>
      </Container>
    );
  }
  
  export default ADGM_FAQ_Service;