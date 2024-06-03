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
            ADGM offers a wide scope of business activities with an
            international exposure and a first-class ecosystem to work in.
            Setting up a company and obtaining a license in ADGM can be a
            lengthy process when you have to start from deciding the legal form
            to making applications.
          </div>
          <div style={{ marginTop: "20px" }} className={styles.details18Open}>
            MS is your SET UP specialist when it comes to building and expanding
            your company in ADGM. We can provide a fast, streamlined, and
            hassle-free set up procedure and help you stay compliant with ADGM
            laws.
          </div>
        </div>
        {/* <div> */}
        <div
          className={`${styles.RA_banner} ${styles.formresp}`}
          data-aos="fade-left"
        >
          <BookCall path={"adgm"} />
        </div>
        {/* </div> */}
      </div>
    </Container>
  );
}

export default Accounting_Banner2;
