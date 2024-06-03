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
                "What information and documents needed from corporate shareholder for incorporation of a company in ADGM?"
              }
            >
              <div>
              To comply with regulatory requirements and establish a transparent corporate framework, the following documents are essential for the incorporation or registration of an entity. These include the Certificate of Incorporation/Registration and Articles of Association, the current Commercial or Trade License (if applicable), or a Certificate of Good Standing. Additionally, a recent Register of Directors and Shareholders, dated within the last 2 months, or a current Certificate of Incumbency is required, providing comprehensive details on directors, shareholders, and shareholding structure. Each director must submit Know Your Customer (KYC) documentation in accordance with the specified requirements for individuals. Furthermore, a concise overview of KYC details is necessary for any shareholder holding a 25% ownership stake in the entity. This compilation of documents ensures a comprehensive and compliant representation of the entity&apos;s corporate structure and key stakeholders.
             
   
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What is the UBO declaration form?"
              }
            >
              <div>
              The Ultimate Beneficial Owner/s declaration form is used when a company under formation declares the list of beneficial owner/s of the company.


              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"Do i need a resolution for incorporation?"}
            >
              <div>
              Yes. All applications for incorporation must be supported by a resolution for incorporation.
              </div>
            </Collapsible>

           
            <Collapsible
              open={false}
              arrow={true}
              title={"Who is required to furnish know your customer (KYC) information and documentation?"
                
              }
            >
              <div>
              Shareholder, Director, Authorised Signatory and Data Protection Contact is required to furnish the KYC information and document.
               
              </div>
            </Collapsible>

            

        
          </div>

          <div className={styles.columns} data-aos="fade-left">
          <Collapsible
              open={false}
              arrow={true}
              title={"What are the permitted business activities for a temporary license?"}
            >
              <div>
              The temporary license grants permission for specific business activities that fall within the non-financial realm. These activities primarily encompass promotional and marketing endeavors aimed at creating awareness about a business or service. It is crucial to note that the temporary stand is not authorized for concluding business deals, signing documents related to transactions, or receiving payments for services or products, except for pop-up store concepts or food carts. However, the license allows for the facilitation of referrals to the main office in the UAE for the procurement of services or products. This delineation ensures that the temporary license is utilized appropriately for promotional and referral purposes while adhering to the stipulated restrictions on financial transactions at the temporary stand.
             
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"How much time does it take for the approval process, after i submit the online application in ADGM?"}
            >
              <div>
              This depends on several factors including the quality of the application, the completeness of information provided in the required documentation, the initial approvals from the immigration authorities as well as the applicant’s responsiveness to additional queries if any. On average, and with the provision of complete documentation, applicants can expect a processing time of five working days.

              </div>
            </Collapsible>
            
            <Collapsible open={false} arrow={true} title={" What are the independent authorities under ADGM?"}>
              <div>
              The ADGM will have its own judicial system and legislative infrastructure, under three independent authorities including Registration Authority, Financial Services Regulatory Authority and ADGM Courts.
   
              </div>
            </Collapsible>
        
           
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
