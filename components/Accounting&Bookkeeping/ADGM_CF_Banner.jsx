import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import cstyles from "./Accounting.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BookCall from "./BookConsultationCall";

import Container from "../Common/Container";

function Accounting_Banner2() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div className={styles.acountingBanner_container}>
        <div className={styles.FAS_Banner_left} data-aos="fade-right">
          {/* <div className={styles.black36_heading_audit}>
                        ADGM
                    </div> */}

          <div className={styles.details18Open}>
            Incorporated in ADGM and wondering on your compliances?
            <br />
            It is crucial to adhere to various compliance requirements. Failing
            to comply with these obligations can result in significant
            penalties. To ensure your company stays in line with the law and
            avoids any legal consequences, our ADGM specialized team is here to
            help!{" "}
          </div>
          <div style={{ marginTop: "20px" }} className={styles.details18Open}>
            Here are some of the key compliance obligations that you need to
            consider as an incorporated entity in ADGM:{" "}
          </div>
          <div style={{ marginTop: "20px" }} className={styles.details18Open}>
            Annual Accounts: Companies in ADGM are required to prepare annual
            financial statements, including profit and loss accounts, balance
            sheets, and cash flow statements. These financial statements must be
            prepared in accordance with recognized accounting standards.
          </div>
          <div style={{ marginTop: "20px" }} className={styles.details18Open}>
            {/* <ol> */}
            {/* <li>
                        Lease Registration: If your company holds any lease agreements for property or premises within ADGM, it may be necessary to register these leases with ADGM. Compliance with lease registration requirements ensures legal validity and protection for both landlords and tenants.
                        </li> */}
            {/* <li>
                Annual Return Filing: ADGM mandates that companies file an
                annual return, which provides essential information about the
                company&apos;s directors, shareholders, and share capital. The
                annual return must be submitted to the ADGM Registration
                Authority within the specified timeframe.
              </li>
              <li>
                Economic Substance Regulations (ESR) Filings: ADGM companies may
                be subject to the Economic Substance Regulations, which aim to
                ensure that companies engaged in certain relevant activities
                have a substantial economic presence within the jurisdiction. If
                your company falls under the scope of ESR, you may be required
                to file notifications and reports to demonstrate compliance with
                the substance requirements.
              </li>
              <li>
                License Renewal: Companies operating in ADGM are required to
                renew their business licenses every year. It is essential to
                stay informed about the renewal dates and initiate the renewal
                process in a timely manner to ensure continuous compliance with
                ADGM regulations.
              </li>
              <li>
                Data Protection Renewal: Companies that handle personal data are
                subject to data protection regulations in ADGM. It is essential
                to ensure that your company complies with the applicable data
                protection laws and regulations, including obtaining the
                necessary approvals and renewing data protection registrations
                or licenses as required. Renewals typically involve reassessing
                your data protection practices, updating policies and
                procedures, and renewing registrations or licenses with the
                relevant authorities.
              </li> */}
            {/* </ol> */}
          </div>
          <div style={{ marginTop: "20px" }} className={styles.details18Open}>
            Both license renewal and data protection renewal are crucial to
            maintaining the legal and operational validity of your business in
            ADGM. Failing to renew licenses or comply with data protection
            requirements can result in penalties and legal consequences.
            Therefore, it is important to keep track of the renewal dates,
            adhere to the renewal process, and ensure ongoing compliance with
            the applicable regulations. It is important to note that regulatory
            requirements can change over time, and it is essential to stay
            updated with any amendments or additions to the compliance
            framework. Engaging a specialized team that can assist you in
            fulfilling these obligations, including the preparation of financial
            statements, balance sheets, and other necessary documents, as well
            as assessing the applicability of ESR notifications and reporting,
            can help ensure that your company remains compliant.
          </div>
          <div style={{ marginTop: "20px" }} className={styles.details18Open}>
            Confused about your filings? connect with us!
          </div>
        </div>
        <div className={styles.RA_banner} data-aos="fade-left">
          <BookCall path={"adgm"} />
        </div>
      </div>
    </Container>
  );
}

export default Accounting_Banner2;
