import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cstyles from "./Styles.module.css";
import styles from "./ADGM.module.css";
import Image from "next/image";

import Container from "../Common/Container";
function Accounting_service() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div className={cstyles.accounting_service_container} data-aos="fade-up">
        <div className={styles.ADGMservices_box}>
          <div
            style={{ marginTop: 20 }}
            className={cstyles.details18OpenWhitePo}
          >
            For more details-
          </div>
          <div className={cstyles.heading30White + " " + cstyles.textCntr}>
            Annual Requirements
          </div>

          <table className={cstyles.webOnly} style={{ width: "100%" }}>
            <thead>
              <tr>
                <th className={styles.Head1}>Annual Requirements</th>

                <th className={styles.Head2}>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{ textAlign: "center" }}
                  className={styles.Head1_details}
                >
                  Annual Account Filing
                </td>

                <td style={{ padding: "25px" }}>
                  <div className={styles.Head2_details}>
                    Every ADGM entity must keep adequate accounting records,
                    prepared in accordance with International Accounting
                    Standards (IAS). The first Accounting Reference Period is a
                    period of more than six months but not over 18 months from
                    date of incorporation.
                  </div>
                  <div style={{ marginTop: 20, marginBottom: 20 }}>
                    Requirements :
                  </div>
                  <div className={styles.Head2_details}>
                    Public companies are required to lay accounts before a
                    general meeting. Private companies are obliged to circulate
                    a copy of accounts and reports to members when filing to the
                    Registrar. A company’s director must prepare the director’s
                    report and deliver the accounts and reports required for
                    each financial year to the Registrar (except RSCs and
                    Foundations).
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style={{ textAlign: "center" }}
                  className={styles.Head1_details}
                >
                  Annual Returns
                </td>

                <td style={{ padding: "25px" }}>
                  <div className={styles.Head2_details}>
                    Every ADGM entity has a duty to deliver annual returns
                    within one month of the anniversary of incorporation and
                    then on an annual basis. The annual return confirms basic
                    information such as details of the registered office,
                    directors, secretary, type of business activities, statement
                    of capital, and shareholder information about the entity.
                    Please note that the Annual Return and Annual Accounts are
                    separate filings and should not be confused, as they are
                    usually not filed at the same time.
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style={{ textAlign: "center" }}
                  className={styles.Head1_details}
                >
                  Comercial License Renewal
                </td>

                <td style={{ padding: "25px" }}>
                  <div className={styles.Head2_details}>
                    All entities registered in ADGM are required to hold a valid
                    commercial licence issued by the ADGM Registration
                    Authority. Entities that fail to comply with these
                    requirements are liable to fines under ADGM’s commercial
                    legislation.
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  style={{ textAlign: "center" }}
                  className={styles.Head1_details}
                >
                  Data protection Renewal
                </td>
                <td style={{ padding: "25px" }}>
                  <div className={styles.Head2_details}>
                    Entities are obliged to annually renew their registration of
                    adherence to Data Protection Regulations 2015 which set out
                    the obligations of ADGM entities and the rights of
                    individuals, in relation to the processing and privacy of
                    personal data.
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  style={{ textAlign: "center" }}
                  className={styles.Head1_details}
                >
                  FSRA Filing
                </td>
                <td style={{ padding: "25px" }}>
                  <div className={styles.Head2_details}>
                    ADGM requires all the firms registered under FSRA to submit
                    information on a regular basis, including regulatory and
                    financial reports, so they can better understand their
                    activities and financial position on a periodic basis.
                    ADGM’s Electronic Prudential Reporting System is a portal
                    dedicated to simplifying the submission of regulatory
                    filings.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className={cstyles.mobOnly}>
            <div className={styles.ADGMservices_boxMob}>
              <div className={styles.ADGMservices_boxMob_title}>
                Annual Account Filing
              </div>
              <div className={styles.ADGMservices_boxMob_details}>
                <div>
                  Every ADGM entity must keep adequate accounting records,
                  prepared in accordance with International Accounting Standards
                  (IAS). The first Accounting Reference Period is a period of
                  more than six months but not over 18 months from date of
                  incorporation.
                </div>
                <div>Requirements :</div>
                <div>
                  Public companies are required to lay accounts before a general
                  meeting. Private companies are obliged to circulate a copy of
                  accounts and reports to members when filing to the Registrar.
                  A company’s director must prepare the director’s report and
                  deliver the accounts and reports required for each financial
                  year to the Registrar (except RSCs and Foundations).
                </div>
              </div>
            </div>

            <div className={styles.ADGMservices_boxMob}>
              <div className={styles.ADGMservices_boxMob_title}>
                Annual Returns
              </div>
              <div className={styles.ADGMservices_boxMob_details}>
                <div>
                  Every ADGM entity has a duty to deliver annual returns within
                  one month of the anniversary of incorporation and then on an
                  annual basis. Annual Return and Annual Accounts are completely
                  separate filing and not to be confused as both will not
                  usually be filed at the same time. The annual return confirms
                  basic information such as details of registered office,
                  directors, secretary, Type & the business activities,
                  statement of capital and shareholder information about the
                  entity.
                </div>
              </div>
            </div>

            <div className={styles.ADGMservices_boxMob}>
              <div className={styles.ADGMservices_boxMob_title}>
                Comercial License Renewal
              </div>
              <div className={styles.ADGMservices_boxMob_details}>
                <div>
                  All entities registered in ADGM are required to hold a valid
                  commercial licence issued by the ADGM Registration Authority.
                  Entities that fail to comply with these requirements are
                  liable to fines under ADGM’s commercial legislation.
                </div>
              </div>
            </div>

            <div className={styles.ADGMservices_boxMob}>
              <div className={styles.ADGMservices_boxMob_title}>
                Data protection Renewal
              </div>
              <div className={styles.ADGMservices_boxMob_details}>
                <div>
                  Entities are obliged to annually renew their registration of
                  adherence to Data Protection Regulations 2015 which set out
                  the obligations of ADGM entities and the rights of
                  individuals, in relation to the processing and privacy of
                  personal data.
                </div>
              </div>
            </div>

            <div className={styles.ADGMservices_boxMob}>
              <div className={styles.ADGMservices_boxMob_title}>
                FSRA Filing
              </div>
              <div className={styles.ADGMservices_boxMob_details}>
                <div>
                  ADGM requires all the firms registered under FSRA to submit
                  information on a regular basis, including regulatory and
                  financial reports, so they can better understand their
                  activities and financial position on a periodic basis. ADGM’s
                  Electronic Prudential Reporting System is a portal dedicated
                  to simplifying the submission of regulatory filings.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Accounting_service;
