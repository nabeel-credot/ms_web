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
                "What is transaction advisory services?"
              }
            >
              <div>
              Transaction Advisory Services involve a range of professional services provided by 
              experienced firms to helps to navigate the intricacies of buying, selling, or merging 
              of businesses. These services provide strategic and financial insights for decision-making 
              throughout the M&A process.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"What is the difference between deal advisory and transaction advisory services?"}
            >
              <div>
              &quot;Deal Advisory&quot; and &quot;Transaction Advisory Services&quot; are terms that are sometimes 
              used interchangeably. Deal advisory generally broader spectrum and has more 
              strategic focus and includes a comprehensive approach than transaction advisory 
              which is transaction centric, includes financial and operational due diligence and 
              post transaction support.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"Who should look for transaction advisory services?"}
            >
              <div>
              Transaction advisory services can be beneficial for a variety of individuals and 
              entities involved in mergers, acquisitions, and other financial transactions such as 
              Corporate Entities, Individuals looking for exit from business, Businesses looking 
              for expansion and growth etc.

              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What is financial due diligence?"}
            >
              <div>
              Focuses on assessing the financial health of the business. It includes a thorough 
              review of financial statements, accounting practices, cash flows, and financial projections.
              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"How is transaction advisory different from audit?"}
            >
              <div>
              Purpose of transaction advisory is to provide insights and analysis to help clients 
              make informed decisions regarding their investments or transactions whereas, main 
              goal of an audit is to provide assurance to stakeholders, such as investors and 
              regulators, about the reliability of the financial information presented by a company.

                </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What is legal due diligence?"}>
              <div>

              Examines the legal aspects of a business, such as contracts, agreements, 
              litigation history, intellectual property, regulatory compliance, and any 
              legal risks or liabilities. 
              </div>
            </Collapsible>
          </div>

          <div className={styles.columns} data-aos="fade-left">
          <Collapsible
              open={false}
              arrow={true}
              title={"What is due diligence?"}
            >
              <div>
              Due diligence is an investigation or examination of a business/ transaction conducted
               by potential buyers, investors, to assess various aspects of the subject being 
               investigated. It is a crucial process during buying or selling a business, 
               providing a thorough understanding of the risks and rewards associated with the 
               subject. Due diligence can be applied in various contexts, primarily in mergers and 
               acquisitions.
                </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={"What are the outputs I get on availing transaction advisory?"}
            >
              <div>
              The outputs for a client, upon availing transaction advisory services are the due 
              diligence report, deal advisory, financial modelling and valuation report.

              </div>
            </Collapsible>
          <Collapsible
              open={false}
              arrow={true}
              title={
                "What are the various types of due diligence?"
              }
            >
              <div>
                The due diligence services includes Operational Due Diligence, Financial, Legal, 
                Commercial, HR, Tax, IT, Regulatory due diligence and so on.
              </div>
            </Collapsible>
            <Collapsible open={false} arrow={true} title={"Which areas do MS provide transaction advisory services for?"}>
              <div>
              We provide expert advice in Deal Advisory, Due Diligence and Finance Modelling and 
              Valuation.

              </div>
            </Collapsible>
            <Collapsible
              open={false}
              arrow={true}
              title={
                "What is operational due diligence?"
              }
            >
              <div>
              Evaluates the operational aspects of the business, including management structure, 
              business processes, supply chain, production capabilities, and key operational risks.
              </div>
            </Collapsible>
          
            <Collapsible
              open={false}
              arrow={true}
              title={"What are the results of a due diligence process?"}
            >
              <div>
              The due diligence report, which will include the results of the due diligence and 
              potential impacts study based on the issues mentioned in the report.
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_FAQ_Service;
