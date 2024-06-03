import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import cstyles from "./Accounting.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BookCall from "./BookConsultationCall";

import News from "../Accounting&Bookkeeping/News_LatestInsight copy";
import Container from "../Common/Container";
import SectionN from "../Accounting&Bookkeeping/ADGM_newSection";
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
          <div className={styles.black36_heading_audit}>Overview - ADGM</div>

          <div style={{ marginTop: "15px" }} className={styles.details18Open}>
            In October 2015, Abu Dhabi Global Market (ADGM) became fully
            operational, opening its doors to welcome local and international
            enterprises and institutions. Located in the heart of Abu Dhabi,
            ADGM serves as a bridge between the east-west corridor.
          </div>
          <div style={{ marginTop: "10px" }} className={styles.details18Open}>
            ADGM offers a secure and efficient platform for companies and
            financial institutions to establish operations and fulfill their
            expansion ambitions. It harnesses the inherent strength of the Abu
            Dhabi economy and advances the spirit of long-term partnership and
            collaboration.
          </div>

          <div style={{ marginTop: "10px" }} className={styles.details18Open}>
            ADGM operates under the control of three independent authorities -
            the Registration Authority, the Financial Services Regulatory
            Authority (FSRA), and the ADGM Courts.
          </div>

          <div style={{ marginTop: "10px" }} className={styles.details18Open}>
            While ADGM offers a wide range of financial activities, what
            attracts investors is its openness to a broad spectrum of
            non-financial business activities, including professional,
            commercial, family businesses, corporate headquarters, and various
            other activities. ADGM caters to the establishment of holding
            companies, special purpose vehicles, restricted scope vehicles, and
            other legal structures for holding and protecting assets.
          </div>

          <div style={{ marginTop: "10px" }} className={styles.details18Open}>
            The business activities offered by ADGM are categorized into
            financial, non-financial, and retail activities. All financial
            activities are regulated by the FSRA.
          </div>
          <SectionN />
          <div className={styles.formbook1} style={{ marginTop: "25px" }}>
            <BookCall path={"adgm"} />
          </div>
        </div>

        <div className={styles.RA_banner} data-aos="fade-left">
          <div
            className={styles.marginTp25m + " " + styles.newswidth}
            // style={{ width: "65%" }}
          >
            <News categorySlug="adgm" />
          </div>
        </div>
      </div>

      {/* <div className={styles.bookform}>
        <BookCall path={"adgm"} />
      </div> */}
    </Container>
  );
}

export default Accounting_Banner2;
