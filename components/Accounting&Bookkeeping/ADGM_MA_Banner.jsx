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
            Our management consultancy service includes advice and operational
            assistance on management concerns, ranging from organizational
            planning, decision making, policy preparation, production and
            control planning, public relations and communication, to designing
            accounting methods/procedures, budgetary control methods, cost and
            management accounting, and advice on business planning and corporate
            governance.{" "}
          </div>
          <div style={{ marginTop: "20px" }} className={styles.details18Open}>
            We have expertise in advising and supporting highly reputed clients
            in ADGM with corporate governance and plannings. Contact us for more
            information.
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
