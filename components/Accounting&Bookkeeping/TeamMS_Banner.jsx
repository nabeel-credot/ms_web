import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import cstyles from "./Accounting2.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import BookCall from "./BookConsultationCall";

import Container from "../Common/Container";
function Accounting_Banner2(props) {
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
            MS is with you every step of the way
          </div>

          <div style={{ marginTop: "20px" }} className={styles.details18Open}>
            We’re a people company. Whether you want to advance an idea, a
            capability, or the world at large, MS is with you every step of the
            way. Our mission is to change business everywhere. Our consulting
            model is holistic and unique. Operating across industries and
            geographies as one integrated, multifunctional team, we bring
            customized solutions and the best of MS to each client. Today, as a
            top consulting firm, we help clients with total
            transformation—driving complex change, enabling organizations to
            grow, building competitive advantage, and driving bottom-line
            impact. We have outrageous fun while we transform the quality of
            business’s around the world.
          </div>
        </div>
        <div
          className={styles.acountingBanner2Book_right2}
          data-aos="fade-left"
        >
          <BookCall templateTitle={props.templateTitle} />
        </div>
      </div>
    </Container>
  );
}

export default Accounting_Banner2;
