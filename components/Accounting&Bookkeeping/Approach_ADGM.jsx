import React, { useEffect } from "react";
import styles from "./Approach.module.css";

import cstyles from "./Styles.module.css";

import astyles from "./ADGM.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import Container from "../Common/Container";
function Approach() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div className={styles.container} data-aos="fade-up">
        <div className={styles.heading}>
          Key requirements for setting up in ADGM
        </div>
        <div className={styles.contentWrap}>
          <div className={styles.contentBase}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>01</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.stepADGM}>Name</div>
          </div>

          <div className={styles.contentBase}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>02</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.stepADGM}>Director</div>
          </div>

          <div className={styles.contentBase}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>03</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.stepADGM}>Resolution</div>
          </div>

          <div className={styles.contentBase}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>04</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.stepADGM}>Articles of Association</div>
          </div>

          <div className={styles.contentBase}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>05</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.stepADGM}>Authorized signatory</div>
          </div>

          <div className={styles.contentBase}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>06</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.stepADGM}>
              MLRO
              <br /> (in case of DNFBPs)
            </div>
          </div>

          <div className={styles.contentBase}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>07</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.stepADGM}>
              Shareholders & shareholding details
            </div>
          </div>

          <div className={styles.contentBase}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>08</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.stepADGM}>
              Ultimate Beneficial owner details
            </div>
          </div>

          <div className={styles.contentBase}>
            <div className={styles.no_and_line}>
              <div className={styles.num}>09</div>
              <div className={styles.line}>
                <Image src="/images/yloLine.png" alt="" width={48} height={1} />
              </div>
            </div>
            <div className={styles.stepADGM}>
              Company secretary (mandatory for public companies)
            </div>
          </div>
        </div>

        <div className={astyles.corporate3_container} data-aos="fade-up">
          <div
            className={cstyles.details24400 + " " + cstyles.spclPadding2}
            style={{ color: "#FFFFFF" }}
          >
            Acquiring the license is not the only requirement for being
            registered under the ADGM Registration Authority. Office space is
            mandatory to get your entity functioning.
          </div>
          <div style={{ marginTop: 30 }} className={cstyles.heading30White}>
            Documents Required for the Incorporation
          </div>
          <div className={astyles.adgmSec3}>
            <ul>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  Copy of passport, visa page or immigration entry stamp and
                  Emirates ID of the director(s), secretary, and shareholder(s)
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  Application form for reservation of the proposed name of the
                  company{" "}
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  Copy of the business plan
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  Statement of capital and initial shareholding, for companies
                  limited by shares
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  {" "}
                  Statement of guarantee, for companies limited by guarantee
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  {" "}
                  Statement of proposed officers of the entity
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  {" "}
                  Trade name reservation document
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  {" "}
                  A statement with the intended address of the proposed company
                </span>
              </li>{" "}
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  {" "}
                  Copy of Articles of Association (AOA) and resolution of the
                  board of directors
                </span>
              </li>{" "}
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  {" "}
                  A copy of the lease agreement for the office space
                </span>
              </li>{" "}
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  Confirmation of restricted scope of the company
                </span>
              </li>{" "}
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  Duly filled and signed data protection form
                </span>
              </li>{" "}
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  {" "}
                  Duly filled and signed beneficiary or ultimate owner form
                </span>
              </li>{" "}
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowW.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={astyles.key + " " + cstyles.keyWidth}>
                  {" "}
                  Any other documents that may be required by the authorities,
                  based on the scope of activities that the company would be
                  undertaking
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={astyles.ADGMservices_box}>
          <div
            style={{ marginTop: 20, marginBottom: 20 }}
            className={cstyles.details18OpenWhitePo}
          >
            For more details-
          </div>
          <div className={cstyles.heading30White + " " + cstyles.textCntr}>
            Annual Requirements
          </div>

          <table
            className={cstyles.webOnly}
            style={{ width: "100%", color: "#FFFFFF" }}
          >
            <thead>
              <tr>
                <th className={astyles.Head1}>Annual Requirements</th>

                <th className={astyles.Head2}>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{ textAlign: "center" }}
                  className={astyles.Head1_details}
                >
                  Annual Account Filing
                </td>

                <td style={{ padding: "25px" }}>
                  <div className={astyles.Head2_details}>
                    Every ADGM entity must keep adequate accounting records,
                    prepared in accordance with International Accounting
                    Standards (IAS). The first Accounting Reference Period is a
                    period of more than six months but not over 18 months from
                    date of incorporation.
                  </div>
                  <div style={{ marginTop: 20, marginBottom: 20 }}>
                    Requirements :
                  </div>
                  <div className={astyles.Head2_details}>
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
                  className={astyles.Head1_details}
                >
                  Annual Returns
                </td>

                <td style={{ padding: "25px" }}>
                  <div className={astyles.Head2_details}>
                    Every ADGM entity has a duty to deliver annual returns
                    within one month of the anniversary of incorporation and
                    then on an annual basis. Annual Return and Annual Accounts
                    are completely separate filing and not to be confused as
                    both will not usually be filed at the same time. The annual
                    return confirms basic information such as details of
                    registered office, directors, secretary, Type & the business
                    activities, statement of capital and shareholder information
                    about the entity.
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style={{ textAlign: "center" }}
                  className={astyles.Head1_details}
                >
                  Comercial License Renewal
                </td>

                <td style={{ padding: "25px" }}>
                  <div className={astyles.Head2_details}>
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
                  className={astyles.Head1_details}
                >
                  Data protection Renewal
                </td>
                <td style={{ padding: "25px" }}>
                  <div className={astyles.Head2_details}>
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
                  className={astyles.Head1_details}
                >
                  FSRA Filing
                </td>
                <td style={{ padding: "25px" }}>
                  <div className={astyles.Head2_details}>
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
            <div className={astyles.ADGMservices_boxMob}>
              <div className={astyles.ADGMservices_boxMob_title}>
                Annual Account Filing
              </div>
              <div className={astyles.ADGMservices_boxMob_details}>
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

            <div className={astyles.ADGMservices_boxMob}>
              <div className={astyles.ADGMservices_boxMob_title}>
                Annual Returns
              </div>
              <div className={astyles.ADGMservices_boxMob_details}>
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

            <div className={astyles.ADGMservices_boxMob}>
              <div className={astyles.ADGMservices_boxMob_title}>
                Comercial License Renewal
              </div>
              <div className={astyles.ADGMservices_boxMob_details}>
                <div>
                  All entities registered in ADGM are required to hold a valid
                  commercial licence issued by the ADGM Registration Authority.
                  Entities that fail to comply with these requirements are
                  liable to fines under ADGM’s commercial legislation.
                </div>
              </div>
            </div>

            <div className={astyles.ADGMservices_boxMob}>
              <div className={astyles.ADGMservices_boxMob_title}>
                Data protection Renewal
              </div>
              <div className={astyles.ADGMservices_boxMob_details}>
                <div>
                  Entities are obliged to annually renew their registration of
                  adherence to Data Protection Regulations 2015 which set out
                  the obligations of ADGM entities and the rights of
                  individuals, in relation to the processing and privacy of
                  personal data.
                </div>
              </div>
            </div>

            <div className={astyles.ADGMservices_boxMob}>
              <div className={astyles.ADGMservices_boxMob_title}>
                FSRA Filing
              </div>
              <div className={astyles.ADGMservices_boxMob_details}>
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

export default Approach;
