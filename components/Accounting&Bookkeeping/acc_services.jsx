import React, { useEffect, useState } from "react";
import styles from "./Advisory.module.css";
import cstyles from "./Styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import YellowBorderCard from "../YellowBorderCardBlueHover";

import Container from "../Common/Container";
/*tax services 
VAT Services
Corporate Tax
Economic Substance Regulations(ESR) IN Uae
CBCR
US EXPAT
UBO*/
function Tax_services() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container style={{ padding: 0 }}>
      <div className={styles.Advisory_services_container} data-aos="fade-up">
        <div className={cstyles.black36_heading_audit + " " + cstyles.textCntr}>
          Businesses benefit from our specialized experience in
        </div>
        <div
          className={cstyles.OS_sub_box + " " + cstyles.OS_sub_box_additional}
        >
          <div
            className={
              cstyles.OS_sub_boxH + " " + cstyles.OS_sub_boxH_additional
            }
          >
            <YellowBorderCard
              src="/images/Accounting_Bookkeeping_Services.png"
              href="/accounting-bookkeeping"
              title={<> Accounting and Bookkeeping Service</>}
              imgWidth="110"
              imgHeight="110"
              fontSize="12px"
            >
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
              </div>
            </YellowBorderCard>
          </div>

          <div  className={
              cstyles.OS_sub_boxH + " " + cstyles.OS_sub_boxH_additional
            }>
            <YellowBorderCard
              src="/images/Payroll_Services.png"
              href="/payroll-services"
              title={<>Payroll Service</>}
              imgWidth="110"
              imgHeight="110"
              fontSize="12px"
            >
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
              </div>
            </YellowBorderCard>
          </div>

          <div  className={
              cstyles.OS_sub_boxH + " " + cstyles.OS_sub_boxH_additional
            }>
            <YellowBorderCard
              src="/images/Audit_Services.png"
              href="/audit"
              title={<>Audit Service</>}
              imgWidth="110"
              imgHeight="110"
              fontSize="12px"
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

export default Tax_services;
