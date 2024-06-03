import React, { useEffect, useState } from "react";
import styles from "./Advisory.module.css";
import cstyles from "./Styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import YellowBorderCard from "../YellowBorderCardBlueHover";

import Container from "../Common/Container";
/*tax services 
VAT Services
Corparate Tax
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
              src="/images/VAT.png"
              href="/vat-consultant"
              title={<>VAT Services</>}
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
              src="/images/corporate.png"
              href="/corporate-tax"
              title={<>Corporate Tax</>}
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
              src="/images/ESR.png"
              href="/economic-substance-regulations"
              title={<>Economic Substance Regulations(ESR)</>}
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
              src="/images/CBCR_icon.png"
              href="/cbc-reporting"
              title={<>CBCR</>}
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
              src="/images/ux_expat.png"
              href="/us-expat-tax-consultant"
              title={<>US EXPAT</>}
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
              src="/images/UBO_icon.png"
              href="/ultimate-beneficial-ownership"
              title={<>UBO</>}
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
