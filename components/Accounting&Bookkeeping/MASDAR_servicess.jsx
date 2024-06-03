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
function MASDAR() {
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
              src="/images/icons 5-09.png"
              href="/masdar-incorporation-compliance-and-corporate-services"
              title={
                <>
                  {" "}
                  MASDAR Incorporation Compliance
                  <br /> and corporate services
                </>
              }
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

          <div
            className={
              cstyles.OS_sub_boxH + " " + cstyles.OS_sub_boxH_additional
            }
          >
            <YellowBorderCard
              src="/images/Management_Advisory_Assistance.png"
              href="/masdar-management-advisory"
              title={<>Management Advisory</>}
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

          <div
            className={
              cstyles.OS_sub_boxH + " " + cstyles.OS_sub_boxH_additional
            }
          >
            <YellowBorderCard
              src="/images/Bank_account_opening.png"
              href="/masdar-assistance-in-bank-account-opening"
              title={<>Bank Account Opening Assistance</>}
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

export default MASDAR;
