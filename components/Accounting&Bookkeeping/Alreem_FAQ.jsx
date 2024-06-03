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
                title={"What does the expansion of ADGM’s jurisdiction mean?"}
              >
                <div>
                The expansion of ADGM&apos;s jurisdiction to Al Reem Island, starting from April 24, 2023, means that the legal and regulatory rules of ADGM now apply to businesses on Al Reem Island. There is a transition period until December 31, 2024, for businesses to meet ADGM&apos;s requirements.
                </div>
              </Collapsible> 
              
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "How does the expansion impact your commercial license? "
                }
              >
                <div>
                Although the change took effect in April 2023, businesses on Al Reem Island can continue operating as usual until December 31, 2024. However, to continue business activities after that date, obtaining an ADGM license is necessary.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "What is the cost of obtaining an ADGM commercial license and its renewal?"
                }
              >
                <div>
                The registration fee for an ADGM commercial license varies based on the type. Detailed information on setting up a business in ADGM is available at Starting a Business in Abu Dhabi.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "How would being part of ADGM jurisdiction affect tax payments and VAT processing for federal authorities? "
                }
              >
                <div>
                ADGM can offer general guidance on tax legislation, but for specific advice on your circumstances, consulting a tax professional is recommended. UAE tax legislation is administered by the UAE Federal Tax Authority.
                </div>
              </Collapsible>
              {/* <Collapsible
                open={false}
                arrow={true}
                title={" Can your firm assist with ESR compliance for companies outside ADGM but with operations in the jurisdiction?"}
              >
                <div>
                Yes, our ESR services extend to companies outside ADGM but with operations within the jurisdiction. We provide tailored solutions to meet the specific needs of such companies and ensure compliance with economic substance regulations.
                </div>
              </Collapsible>  */}
             
            </div>
  
            <div className={styles.columns} data-aos="fade-left">
           
            <Collapsible
                open={false}
                arrow={true}
                title={
                  "Which businesses on Al Reem Island will fall under ADGM jurisdiction? "
                }
              >
                <div>
                All businesses on Al Reem Island are now governed by ADGM&apos;s rules and regulations.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={"Are Al Reem Island office spaces eligible for the ADGM license now? "}
              >
                <div>
                Yes, Al Reem Island addresses approved for commercial use can be included in a new license application submitted to ADGM. Existing businesses at Al Reem addresses with ADDED licenses may convert to ADGM licenses by December 31, 2024.
                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={"Are there specific conditions impacting certain activities under ADGM jurisdiction?"}
              >
                <div>
                Certain business activities are subject to specific conditions outlined in the ADGM Commercial Licensing Regulations. These regulations can be found at ADGM Commercial Licensing Regulations (Controlled Activities) Rules 2022 and Commercial Licensing Regulations (Conditions of License and Branch Registration) Rules 2023.
                </div>
              </Collapsible> 
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "What benefits does ADGM's expansion to Al Reem Island offer to businesses and investors?"
                }
              >
                <div>
                ADGM&apos;s expansion brings benefits like applying recognized English Common Law, a pro-business regulatory environment, seamless services, digital registration, access to a diverse business ecosystem, and participation in major events. Businesses also gain access to capital, markets, and quality infrastructure, making ADGM an attractive hub for various enterprises.

                </div>
              </Collapsible>
              {/* <Collapsible
                open={false}
                arrow={true}
                title={"How can companies get started with your ESR services for ADGM compliance?"}
              >
                <div>
                Getting started is simple. Contact our team to schedule a consultation, and we will guide you through the process, assess your specific needs, and develop a customized plan to ensure seamless compliance with ADGM&apos;s Economic Substance Regulation.
                </div>
              </Collapsible>  */}
            </div>
          </div>
        </div>
      </Container>
    );
  }
  
  export default ADGM_FAQ_Service;