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
          <div className={styles.columns} data-aos="fade-right">
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What is VAT, and why is it relevant to ADGM companies?"
              }
            >
              <div>
              VAT (Value Added Tax) is a consumption tax applied to the supply of goods and services. ADGM companies are subject to VAT in the UAE, and compliance is crucial to meet legal requirements and avoid penalties.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"How can ADGM companies ensure they are VAT-compliant?"}
            >
              <div>
              Our team provides ongoing support, conducting periodic reviews to ensure compliance, updating businesses on regulatory changes, and offering guidance on best practices.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"What is the current VAT rate in the UAE?"}
            >
              <div>
              As of the last update, the standard VAT rate in the UAE is 5%.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"How does VAT registration for ADGM companies work?"
                
              }
            >
              <div>
              ADGM companies need to submit a VAT registration application through the Federal Tax Authority (FTA) portal. Our team can assist in preparing and submitting the necessary documentation.
               
              </div>
            </Collapsible>

             <Collapsible
              open={false}
              arrow={true}
              title={"What are the key VAT compliance requirements for ADGM businesses?"}
            >
              <div>
              Compliance includes maintaining accurate records, issuing tax invoices, filing VAT returns, and ensuring timely payments. Our services cover these aspects to ensure smooth compliance.
              </div>
            </Collapsible>

        
          </div>

          <div className={styles.columns} data-aos="fade-left">
            <Collapsible
              open={false}
              arrow={true}
              title={
                "Can you assist with VAT filing and reporting for ADGM companies?"
              }
            >
              <div>
              Yes, we offer comprehensive VAT filing and reporting services, ensuring accurate and timely submissions to the FTA on behalf of ADGM companies.

              </div>
            </Collapsible>
            <Collapsible open={false} arrow={true} title={" Do all ADGM companies need to register for VAT?"}>
              <div>
              Yes, businesses exceeding the mandatory registration threshold are required to register for VAT. Voluntary registration is also an option for companies that do not meet the mandatory threshold but wish to do so.
              </div>
            </Collapsible>
           

           

            <Collapsible
              open={false}
              arrow={true}
              title={"What are the penalties for non-compliance with VAT regulations in the UAE?"}
            >
              <div>
              Non-compliance can lead to penalties, fines, and legal consequences. Our services aim to help ADGM companies avoid such issues by maintaining strict compliance with VAT regulations.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={" Can you assist with VAT recovery for ADGM companies?"}
            >
              <div>
                <div style={{ marginBottom: 20 }}>
                Yes, we aid in VAT recovery, helping ADGM companies identify and reclaim eligible input tax, optimizing their VAT position.
                </div>
               
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"How can ADGM companies benefit from outsourcing their VAT services?"}
            >
              <div>
                <div >
                Outsourcing VAT services ensure expertise, saves time and resources, reduces the risk of errors, and allows ADGM companies to focus on their core business activities.
                </div>      
              </div>
            </Collapsible>
           
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
