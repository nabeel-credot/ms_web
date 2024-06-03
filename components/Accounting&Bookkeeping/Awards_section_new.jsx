import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import cstyles from "./Accounting2.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
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
        <div
          className={styles.FAS_Banner_left }
          data-aos="fade-right"
        >
          <div className={styles.black36_heading}>
          Globally Recognized Advisor
          </div>

          <div style={{ marginTop: "20px" }} className={styles.details18Open}>
          <div className={styles.details18Open+" "+styles.textCntrMob} style={{marginTop:20}}>
                    We are proud to be a longstanding member of Global Advisory Expert Association, which currently represented in over 140 countries accredited with 2000+ experts. MS has been recognized as an accomplished firm in the domain of tax advisory & accounting service in the UAE.
                </div>
                <div  className={styles.details18Open+" "+styles.textCntrMob} style={{marginTop:20}}>
                    MS CEO, Mohammed Shafeek was selected for this prestigious role as a global advisor addressing the need for business outcomes that challenge the status quo in our rapidly changing environment. Underpinning his approach is the unique combination of creative thinking, sound business acumen and real-world knowledge & experience in design, delivery and operations.
                </div>
                <div  className={styles.details18Open+" "+styles.textCntrMob} style={{marginTop:20}}>
                  Mohammed Shafeek partners with clients throughout the business, leveraging his expertise to deliver integrated solutions with long-term benefits.
                </div>
          </div>
        </div>
        <div
          className={styles.acountingBanner2Book_right2}
          data-aos="fade-left"
        >
          <BookCall  />
        </div>
      </div>
    </Container>
  );
}

export default Accounting_Banner2;
