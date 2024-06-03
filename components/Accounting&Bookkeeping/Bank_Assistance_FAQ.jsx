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
                "Does ADGM commercial licence permit to open a bank account and commence invoicing activities?"
              }
            >
              <div>
                Once your licence is issued by ADGM, you can apply for a bank account and commence invoicing activities, once your account is active. ADGM can provide you with a list of banks that are familiar with ADGM registration processes. The bank account opening remains subject to the bank’s policies and requirements.


              </div>
            </Collapsible>






            <Collapsible
              open={false}
              arrow={true}
              title={"How long does the process usually take to open a bank account in ADGM?"}
            >
              <div>
                The process typically takes 2 to 4 weeks. After opening the account, the share capital must be deposited.
              </div>
            </Collapsible>

            <Collapsible
              open={false}
              arrow={true}
              title={"Which top banking brands provide bank account assistance for companies in ADGM?"}
            >
              <div>
                <div style={{ marginBottom: "20px" }}>
                  ADGM hosts a prestigious community of financial institutions. While specific brands are not listed, some well-known global banks operate within ADGM. These include those specializing in private banking, corporate and transaction banking, investment banking, digital banking, and payment services.
                </div>
                <div style={{ marginBottom: "20px" }}>
                  Additionally, ADGM collaborates with banks like Zand Bank to support SMEs and enhance financial services.
                </div>
                <div style={{ marginBottom: "20px" }}>
                  Remember that each company’s needs may vary, so it’s essential to explore specific banking options based on your business requirements. If you have further inquiries or need assistance, feel free to ask!
                </div>
              </div>
            </Collapsible>



          </div>

          <div className={styles.columns} data-aos="fade-left">
            <Collapsible
              open={false}
              arrow={true}
              title={"What are the key considerations for setting up a digital bank within an ADGM company framework?"}
            >
              <div>
                <div style={{ marginBottom: "20px" }}>
                  The Financial Services Regulatory Authority (FSRA) in ADGM provides guidelines for establishing digital banks. Here are some key considerations:
                </div>
                <div style={{ marginBottom: "20px" }}>
                  Business Plan: A comprehensive regulatory business plan is crucial. It should articulate the rationale for the proposal and present a viable, sustainable model.
                </div>
                <div style={{ marginBottom: "20px" }}>
                  Threshold Conditions: These include adequate resources, fitness and propriety of management, effective supervision, and compliance arrangements.
                </div>
                <div style={{ marginBottom: "20px" }}>
                  Risk Management: Digital banks face specific risks (e.g., IT, cybersecurity). They must also address conventional banking risks (credit, market, liquidity).
                </div>
                <div style={{ marginBottom: "20px" }}>
                  Regulatory Compliance: Digital banks must meet similar criteria as conventional banks under FSRA prudential Category 1 licenses
                </div>
                <div style={{ marginBottom: "20px" }}>
                  Innovation and Inclusion: ADGM encourages digital banks to provide innovative solutions and promote financial inclusion, especially for SMEs.
                </div>
              </div>
            </Collapsible>


            <Collapsible
              open={false}
              arrow={true}
              title={"Does ADGM offer support for establishing bank accounts that facilitate transactions in multiple currencies?"}
            >
              <div>
                ADGM offers various banking solutions, including digital banking. While specific details on multicurrency accounts are not explicitly mentioned, ADGM’s progressive environment and access to global markets make it conducive for such services. For companies seeking multicurrency accounts, consider exploring options with local banks operating within ADGM.
              </div>
            </Collapsible>







          </div>
        </div>
      </div >
    </Container >
  );
}

export default ADGM_FAQ_Service;
