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
                "What are the documents required for appointment of a director?"
              }
            >
              <div>
              To complete the official registration of a director&apos;s appointment with the Regulator, several key documents are necessary. Firstly, a board or shareholder resolution must be duly signed, formalizing the decision to appoint the individual as a director. Additionally, the new director is required to submit Know Your Customer (KYC) documentation to fulfil regulatory compliance. Furthermore, the individual being appointed must sign a consent to act and a fit & proper declaration, affirming their willingness to assume the directorial role and confirming their suitability for the position. This comprehensive set of documents ensures the proper and regulatory-aligned registration of the director&apos;s appointment with the relevant authorities.
             
   
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What is the process of removal of directors from adgm company?"
              }
            >
              <div>
              A director typically concludes their role upon formally resigning from their position within a company. This process involves the director submitting a resignation letter, and the remaining directors subsequently passing a resolution to officially acknowledge and confirm the resignation. The letter of resignation and the resolution are then forwarded to ADGM for documentation of the director&apos;s departure.


              </div>
            </Collapsible>
           
            <Collapsible
              open={false}
              arrow={true}
              title={"How many directors is required for incorporation of a company in adgm?"}
            >
              <div>
              A company director may be an individual or body corporate. A private company must have at least one director while a public company must have at least two.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"What is the deadline for updating shareholder and director details with ADGM, and what are the consequences of delays?"}
            >
              <div>
              <div style={{ marginBottom: 20 }}>
              The deadline for updating shareholder and director details with ADGM (Abu Dhabi Global Market) may vary based on specific circumstances. However, it is prudent to promptly report any changes to ensure compliance with ADGM regulations. Delays in updating details can lead to several consequences:
              </div>
              <div style={{ marginBottom: 20 }}>
              <span style={{fontWeight:"500"}}>Non-Compliance: </span> Failing to report changes within the stipulated time may result in non-compliance with ADGM regulations.
              </div>
              <div style={{ marginBottom: 20 }}>
              <span style={{fontWeight:"500"}}>Legal Implications: </span>Delays could lead to legal repercussions, fines, or penalties.
              </div>
              <div style={{ marginBottom: 20 }}>
              <span style={{fontWeight:"500"}}>Operational Challenges:</span> Outdated details may hinder business operations, banking transactions, or communication.
              </div>
              <div style={{ marginBottom: 20 }}>
              <span style={{fontWeight:"500"}}>Risk to Reputation: </span>Inaccurate or outdated information affects the company’s reputation.
              </div>
              <div style={{ marginBottom: 20 }}>
              Therefore, maintaining accurate records and timely updates is essential for a transparent and efficient business environment. If you have further inquiries or need additional guidance, feel free to ask! 
              </div>
              </div>
            </Collapsible>
          

            

        
          </div>

          <div className={styles.columns} data-aos="fade-left">
          <Collapsible
              open={false}
              arrow={true}
              title={"Is it necessary for shareholders and directors to inform adgm about any changes in their details? if so, what is the timeframe for filing such updates, and are there consequences for delays?"}
            >
              <div>
              Yes, it is essential for shareholders and directors to update ADGM in case of any changes in their details. In most cases, these changes must be submitted to ADGM within 14 days to avoid potential fines against the company.
 
             
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What are the documents needed for changes in the director’s details?"}
            >
              <div>
              A company must, within the period of 14 days, from the occurrence of any change in the particulars contained in its register of directors or its register of directors’ residential addresses, give notice to the Registrar of the changes in the director’s details.Documents required are the document evidencing the change (e.g. passport copy, Certificate of Change of name, proof of residential address change)
              
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"Do shareholders and directors need to inform ADGM about changes in their details?"}
            >
              <div>
              <div style={{ marginBottom: 20 }}>
              Yes, both shareholders and directors are required to inform ADGM about any changes in their details. These changes may include:
 </div>
<div style={{ marginBottom: 20 }}>
Personal Information: Updates to names, addresses, contact information, and other relevant details.
</div>
<div style={{ marginBottom: 20 }}>
Shareholding Structure: Any alterations in shareholding percentages or ownership.
</div>
<div style={{ marginBottom: 20 }}>
Directorship: Changes in director appointments or resignations.
Timely communication ensures compliance with ADGM regulations and transparency in corporate governance.
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
