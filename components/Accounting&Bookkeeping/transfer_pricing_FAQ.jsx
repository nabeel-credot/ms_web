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
                    "what is the potential risk for DIFC entity if they violate Transfer pricing regulation ?"
                }
              >
                <div>
                Violating Transfer Pricing (TP) rules in the DIFC can lead to extra taxes and penalties for tax underpayment. Tax authorities may adjust transaction prices, resulting in substantial additional tax liabilities. TP audits and discussions with tax authorities are complex and time-consuming, heightening the consequences of non-compliance.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={"What are the methods established to align with OECD transfer pricing guidelines ?"}
              >
                <div>
                Accepted transfer pricing methods include Transactional Net Margin, Transactional Profit Split, Cost-Plus, Comparable Uncontrolled Price, and Resale Price. These methods ensure fair assessments aligned with international standards.
                </div>
              </Collapsible>
            
              {/* <Collapsible
                open={false}
                arrow={true}
                title={"Can a filing time extension be requested?"}
              >
                <div>
                  <div style={{ marginBottom: 20 }}>
                    Companies should take appropriate measures to ensure that the
                    filing date is identified, and the filing is prepared and
                    submitted within the prescribed period.
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    However, if due to unforeseen circumstances or an exceptional
                    reason the filing is delayed, a company may request the
                    Registration Authority for the extension period.
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    The extension request should include all relevant information
                    including an explanation of why the company cannot comply with
                    the prescribed period for filing and the length of the
                    extension being requested. Depending on the reasons and
                    circumstances, the Registration Authority may require
                    documentary evidence supporting the claims to be provided.
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    Requests for extensions should be made in writing as a letter,
                    stamped and signed by an authorised signatory or a director of
                    the company, and emailed to the Monitoring & Enforcement
                    Department at monitoring@adgm.com
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    If the Registration Authority is satisfied with the
                    information given is sufficient for extension of time, a
                    confirmation will be provided with the new deadline for
                    filing.
                  </div>
                  <div>
                    If the request for an extension is not granted and a company
                    fails to submit the filing on time, the company will be liable
                    to the relevant late filing penalty. Time taken by the
                    Registration Authority to consider an extension request that
                    is not granted shall not be a valid reason for failing to meet
                    the original deadline for filing.
                  </div>
                </div>
              </Collapsible>
  
              <Collapsible
                open={false}
                arrow={true}
                title={" What ensues when a fine is levied?"}
              >
                <div>
                  <div style={{ marginBottom: 20 }}>
                    When a company fails to deliver the accounts to the
                    Registration Authority on time, a late filing penalty is
                    imposed automatically.
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    The penalty imposed will generally be determined as per the
                    Guide.
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    In case of online submission of filing via Registration
                    Authority’s online portal, the penalty notice will be issued
                    electronically by the portal.
                  </div>
                  <div>
                    In case of hard copy submission, the Registration Authority
                    will issue a penalty notice to the company’s registered office
                    address.
                  </div>
                </div>
              </Collapsible>
  
              <Collapsible
                open={false}
                arrow={true}
                title={"Can the fine levied be appealed?"}
              >
                <div>
                  <div style={{ marginBottom: 20 }}>
                    An appeal can be made against a late filing penalty only if
                    the company demonstrates that the circumstances are
                    exceptional or that the fine imposed was incorrect.
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    The Registration Authority has very limited discretion not to
                    collect a fine. Exceptional circumstances include unforeseen
                    and catastrophic events that render a company unable to submit
                    a filing.
                  </div>
                  <div>
                    A company should take appropriate measures to ensure that its
                    accounts are ordinarily prepared (and audited, if required)
                    and submitted to the Registration Authority within the
                    prescribed period.
                  </div>
                </div>
              </Collapsible>
              <Collapsible
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
              </Collapsible> */}
            </div>
  
            <div className={styles.columns}data-aos="fade-left">

           
            <Collapsible
                open={false}
                arrow={true}
                title={"What transfer pricing documentation should the DIFC companies maintain and what are the contents of the TP documentation ?"}
              >
                <div>
                DIFC companies are required to maintain transfer pricing documentation as per UAE law. This includes a master file with comprehensive information on the multinational enterprise group and a local file focusing on specific transactions of the local taxpayer. The local file contains details of the local entity, controlled transactions, and financial information for comparison. This documentation ensures compliance and transparency in transfer pricing practices.
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={
                  "What is transfer pricing ?"
                }
              >
                <div>
                Transfer pricing (TP) regulations globally are designed to ensure fair tax assessments by preventing the manipulation of transaction prices, especially by related parties attempting to evade taxes by transferring profits to jurisdictions with lower tax rates. These regulations establish standards based on the arm’s length principle, ensuring that transactions mirror those conducted between unrelated parties in similar situations. This principle safeguards against tax evasion tactics and promotes equity in tax contributions across jurisdictions.
                </div>
              </Collapsible>
  
             
  
              {/* <Collapsible
                open={false}
                arrow={true}
                title={" What if a filing is returned?"}
              >
                <div>
                  <div style={{ marginBottom: 20 }}>
                    The filings which do not meet the requirements of the
                    Companies Regulations of the Registration Authority will be
                    returned back for correction. For example, if the accounts are
                    not signed by a director, or accompanied by a director’s
                    report (if applicable).
                  </div>
                  <div>
                    A late filing penalty will be imposed if the filing is
                    resubmitted after the impending date of the original filing.
                  </div>
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={"What if the fine goes unsettled?"}
              >
                <div>
                  <div style={{ marginBottom: 20 }}>
                    The Registration Authority treats the fine as a debt due to
                    it, if all or any of the amount of a fine is outstanding at
                    the end of the deadline for payment as specified in the
                    notice.{" "}
                  </div>
                  <div>
                    The Registration Authority may apply to the ADGM Courts for
                    recovery of the debt.
                  </div>
                </div>
              </Collapsible>
              <Collapsible
                open={false}
                arrow={true}
                title={"How to make an appeal?"}
              >
                <div>
                  <div style={{ marginBottom: 20 }}>
                    An appeal must be made in writing and the letter should be
                    addressed to the Monitoring & Enforcement Department.
                  </div>
                  <div>
                    The letter should include all the details of the exceptional
                    circumstances and reasons as to why the Registration Authority
                    should consider the appeal. The letter must be duly stamped
                    and signed by a director or authorized signatory of the
                    company and should be submitted by email to{" "}
                    <span style={{ color: "#212120", marginLeft: 3 }}>
                      monitoring@adgm.com
                    </span>
                    .
                  </div>
                </div>
              </Collapsible> */}
            </div>
          </div>
        </div>
      </Container>
    );
  }
  
  export default ADGM_FAQ_Service;