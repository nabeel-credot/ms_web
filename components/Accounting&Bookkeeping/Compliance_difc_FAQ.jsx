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
              {/* <Collapsible
                open={false}
                arrow={true}
                title={
                  "What Are The DIFC Courts ?"
                }
              >
                <div>
                The DIFC courts are special courts in Dubai established to serve the international institutions operating in the city and the UAE. Created in 2004 by His Highness (Late) Sheikh Maktoum bin Rashid Al Maktoum, then Ruler of Dubai, these special courts follow the English common law system to deliver swift and independent justice for settling local and international civil and commercial disputes in Dubai.
                </div>
              </Collapsible> */}
            
              <Collapsible
                open={false}
                arrow={true}
                title={"What types of compliances are required by the DIFC ?"}
              >
                <div>
                  Companies operating in the DIFC must comply with anti-money laundering (AML) and counter-terrorist financing (CTF) regulations. The DIFC legal framework is based on common law principles, and regulatory oversight is provided by the Dubai Financial Services Authority (DFSA) to ensure compliance with applicable laws and rules. Non-compliance with DIFC laws can result in administrative fines levied by the DFSA after the applicable grace period. 
                  </div>
              </Collapsible>
  
              <Collapsible
                open={false}
                arrow={true}
                title={" Are AML rules applicable to all DIFC entities ?"}
              >
                <div>
                  AML (Anti-Money Laundering) rules in the DIFC (Dubai International Financial Centre) are indeed applicable to all entities operating within the jurisdiction. The DIFC has established comprehensive regulations to combat money laundering and terrorist financing activities, and these regulations apply to all DIFC-registered entities, including financial institutions, corporations, and other businesses operating within the DIFC. 
                  </div>
              </Collapsible>
  
              <Collapsible
                open={false}
                arrow={true}
                title={"What is DIFC Data Protection Law ?"}
              >
                <div>
                  The DIFC Data Protection Law is legislation enacted by the Dubai International Financial Centre (DIFC) to regulate the processing of personal data within the DIFC jurisdiction. It aims to ensure that personal data is processed lawfully, fairly, and securely, in line with international best practices for data protection.
                  </div>
              </Collapsible>
              {/* <Collapsible
                open={false}
                arrow={true}
                title={
                  "How to hand over annual accounts to the Registration Authority?"
                }
              >
                <div>
                  The easiest way to hand over the filing to the Registration
                  Authority is through uploading the file in their online portal,
                  available at www.registration.adgm.com
                </div>
              </Collapsible>  */}
            </div>
  
            <div className={styles.columns}data-aos="fade-left">
             
  
             <Collapsible
                open={false}
                arrow={true}
                title={" Does Data Protection Law charge fines for non-compliance ?"}
              >
                <div>
                  Yes, the Data Protection Law in the Dubai International Financial Centre (DIFC) does indeed include provisions for imposing fines and penalties for non-compliance. Fines and penalties for non-compliance with the DIFC Data Protection Law can vary depending on the nature and severity of the violation. Regulatory authorities within the DIFC may have the authority to investigate complaints, conduct audits, and impose fines on those entities violating the rules.
                  </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={"How to prevent paying a fine in DIFC ?"}
              >
                <div>
                  To prevent paying fines in the DIFC for non-compliance with data protection laws, entities should understand and adhere to the regulations set forth in the DIFC Data Protection Law. This involves implementing robust compliance measures, providing staff training, conducting regular audits, maintaining strong data security, ensuring safeguards for data transfers, and engaging with regulatory authorities. By proactively following these steps, entities can reduce the risk of non-compliance and mitigate the potential for fines or penalties.
                  </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={"How to hand over annual accounts to the Registration Authority ?"}
              >
                <div>
                Accounts should be filed with the Registrar of Companies through the DIFC portal.
                  </div>
                  
              </Collapsible> 
            </div>
          </div>
        </div>
      </Container>
    );
  }
  
  export default ADGM_FAQ_Service;