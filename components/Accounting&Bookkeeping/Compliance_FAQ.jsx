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
                title={
                  "Why is a compliance officer required in Company incorporated in ADGM  ?"
                }
              >
                <div>
                The compliance officer is responsible for ensuring that the companies business operations comply with all relevant laws, regulations, and standards within the ADGM jurisdiction. This includes overseeing and implementing policies and procedures to mitigate regulatory risks.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "Can the compliance officer role be outsourced in ADGM ?"
                }
              >
                <div>
                Yes, Companies can outsource their compliance officer role as to an outsource applicant, provided that such outsourced function is provided by a compliance officer service provider on a full-time basis.
                </div>
              </Collapsible>
             
             
            </div>
  
            <div className={styles.columns}data-aos="fade-left">

            <Collapsible
                open={false}
                arrow={true}
                title={" Can compliance officer and MLRO be appointed to the same individual or entity in ADGM"}
              >
                <div>
                Yes, the same individual or entity may serve as both the MLRO and the compliance officer for the company, provided that such person or entity has the knowledge, experience and capability to effectively fulfil the responsibilities of an MLRO and a compliance officer as prescribed by the authority.
                </div>
              </Collapsible>
              
  
              
  
              
             
             
  
             
            </div>
          </div>
        </div>
      </Container>
    );
  }
  
  export default ADGM_FAQ_Service;