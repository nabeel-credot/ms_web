import React, { useEffect } from "react";
import styles from "./ADGM.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../Common/Container";

function ADGM_banner() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div className={styles.container_adgm} data-aos="fade-up">
        <div className={styles.white_heading48 + " " + styles.widthADGM}>
          Abu Dhabi Global Market – ADGM
        </div>
        <div className={styles.ADGM_banner_content}>
          Abu Dhabi Global Market is an award winning international financial
          centre located in Al Maryah Island and consists of three independent
          authorities – the Registration Authority (RA), the Financial Services
          Regulatory Authority (FSRA) and ADGM Courts.
        </div>
      </div>
    </Container>
  );
}

export default ADGM_banner;
