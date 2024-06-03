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
            AML compliance is the talk of the business town nowadays! To simply
            put, whether you are a financial firm or a DNFBP, AML compliance
            implies certain procedures that entities must follow to abide with
            the international (FATF) and local AML laws and regulations.
          </div>
          <div style={{ marginTop: "20px" }} className={styles.details18Open}>
            Falling under the Designated Non-Financial Businesses and
            Professions or Financial Categories? let us help you stay clean,
            Contact us!
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
