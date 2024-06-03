import React, { useEffect } from "react";
import cstyles from "./Styles.module.css";
import styles from "./FSA.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import YellowBorderCard from "../YellowBorderCardBlueHover";
import Container from "../Common/Container";
function ADGM_services() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container style={{padding:0}}>
      <div className={styles.FSA_section_container2} data-aos="fade-up">
        <div className={cstyles.black36_heading_audit + " " + cstyles.textCntr}>
          Businesses benefit from our specialized experience in
        </div>

        <div className={styles.FSA_sub_box+ " "+ styles.FSA_sub_box_additional}>
          <div className={styles.subBox}>
            <YellowBorderCard
              src="/images/icons 5-09.png"
              href="/incorporation-advisory-and-assistance"
              title={<>Incorporation Advisory <br/>& Assistance</>}
              imgWidth="120"
              imgHeight="110"
              
            >
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
              </div>
            </YellowBorderCard>
          </div>
          <div className={styles.subBox}>
            <YellowBorderCard
              src="/images/ADGM_Compliance_Filings.png"
              href="/adgm-compliance-filings"
              title={<>ADGM Compliance<br/> Filings</>}
              imgWidth="110"
              imgHeight="110"
             
            >
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
              </div>
            </YellowBorderCard>
          </div>
          <div className={styles.subBox}>
            <YellowBorderCard
              src="/images/FO_services.png"
              href="/FO-service"
              title={<>FO Service</>}
              imgWidth="90"
              imgHeight="110"
              
            >
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
              </div>
            </YellowBorderCard>
          </div>
          <div className={styles.subBox}>
            <YellowBorderCard
              src="/images/AML.png"
              href="/AML-compliance-and-outsourced-MLRO-services"
              title={<>AML Compliance & Outsourced MLRO <br/>Services</>}
              imgWidth="100"
              imgHeight="110"
              
            >
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
              </div>
            </YellowBorderCard>
          </div>
          <div className={styles.subBox}>
            <YellowBorderCard
              src="/images/Management_Advisory_Assistance.png"
              href="/management-advisory-and-assistance"
              title={<>Management Advisory <br/>& Assistance</>}
              imgWidth="110"
              imgHeight="110"
              
            >
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
              </div>
            </YellowBorderCard>
          </div>
          <div className={styles.subBox}>
            <YellowBorderCard
              src="/images/Bank_account_opening.png"
              href="/bank-opening-assistance"
              title={<>Bank Account<br/> Opening</>}
              imgWidth="150"
              imgHeight="110"
              
            >
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
              </div>
            </YellowBorderCard>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_services;
