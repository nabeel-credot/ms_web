import React, { useEffect } from "react";
import styles from "./ADGM.module.css";
import cstyles from "./Styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import Card from "../ProcessCard";
import Container from "../Common/Container";

function ADGM_process() {
  useEffect(() => {
    AOS.init({
      duration: 1900,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div className={styles.pContainer} data-aos="fade-up">
        <div className={cstyles.black36_heading_audit + " " + cstyles.textCntr}>
          Process of Company Formation
        </div>

        <div className={styles.pWrapper}>
          <Card
            num="01"
            info="Reserve a company name in compliance with the ADGM Business and Company Names Rules 2016 and choose a registered office which must be located on Al Maryah Island, Abu Dhabi."
          />
          <Card
            num="02"
            info="Create a brief business plan and review the documentation requirements for the application & submit an application and required documentation to the Registrar via the online system. "
          />
          <Card
            num="03"
            info="Provided all information is accurately submitted and the Registrar is satisfied with the documents and information provided, a certificate of incorporation and commercial license will be issued. "
          />
        </div>
      </div>
    </Container>
  );
}

export default ADGM_process;
