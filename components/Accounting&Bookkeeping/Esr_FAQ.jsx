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
                title={"What is Economic Substance Regulation (ESR) and how does it apply to ADGM companies?"}
              >
                <div>
                Economic Substance Regulation (ESR) is a set of regulations requiring certain entities to demonstrate that they have substantial activities conducted within the jurisdiction. ADGM companies engaged in relevant activities must comply with these regulations to ensure economic substance in the region.
                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "Which companies in ADGM are subject to ESR requirements?"
                }
              >
                <div>
                Companies engaged in specific activities such as banking, insurance, fund management, lease and finance, shipping, intellectual property, and holding company business are subject to ESR requirements in ADGM.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "What are the key obligations under the ESR framework for ADGM companies?"
                }
              >
                <div>
                ADGM companies must meet specific substance requirements, including conducting core income-generating activities within the jurisdiction, having an adequate number of qualified employees, and maintaining appropriate premises and expenditures.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "How can our ESR services assist ADGM companies in compliance?"
                }
              >
                <div>
                Our ESR services provide comprehensive support for ADGM companies to ensure compliance with economic substance regulations. This includes conducting assessments, implementing necessary changes, and assisting in reporting to regulatory authorities.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={" Can your firm assist with ESR compliance for companies outside ADGM but with operations in the jurisdiction?"}
              >
                <div>
                Yes, our ESR services extend to companies outside ADGM but with operations within the jurisdiction. We provide tailored solutions to meet the specific needs of such companies and ensure compliance with economic substance regulations.
                </div>
              </Collapsible> 
             
            </div>
  
            <div className={styles.columns} data-aos="fade-left">
            <Collapsible
                open={false}
                arrow={true}
                title={
                  "How can companies determine if they fall under the scope of ESR regulations in ADGM?"
                }
              >
                <div>
                Our experts can conduct a detailed assessment of your company&apos;s activities to determine whether it falls under the scope of ESR regulations in ADGM. This assessment considers the nature of business activities and income generated.
                </div>
              </Collapsible>
           
              <Collapsible
                open={false}
                arrow={true}
                title={"What are the potential penalties for non-compliance with ESR regulations in ADGM?"}
              >
                <div>
                Non-compliance with ESR regulations in ADGM can lead to penalties, including financial penalties, suspension of licenses, and potential striking off the register of companies. It is essential for companies to take proactive measures to avoid such consequences.
                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={"How frequently should companies review their economic substance position in ADGM?"}
              >
                <div>
                Companies should regularly review their economic substance position, especially when there are significant changes in their business activities or structures. Annual reviews are recommended to ensure continuous compliance with ESR regulations in ADGM.
                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "What is the deadline for submitting the Economic Substance Regulation report in ADGM?"
                }
              >
                <div>
                The deadline for submitting the ESR Notification is typically within 6 months and ESR report in ADGM is within 12 months from the end of the relevant financial year. It is crucial to ensure timely preparation and submission to avoid penalties.

                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={"How can companies get started with your ESR services for ADGM compliance?"}
              >
                <div>
                Getting started is simple. Contact our team to schedule a consultation, and we will guide you through the process, assess your specific needs, and develop a customized plan to ensure seamless compliance with ADGM&apos;s Economic Substance Regulation.
                </div>
              </Collapsible> 
            </div>
          </div>
        </div>
      </Container>
    );
  }
  
  export default ADGM_FAQ_Service;