import React, { useEffect } from "react";
import styles from "./Styles.module.css";
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
      <div className={styles.payrollBanner_container}>
        <div className={styles.payrollBanner_sub_container}>
          <div className={styles.FAS_Banner_left} data-aos="fade-right">
            <div className={styles.black36_heading_audit}>
              {/* Who complain about taxes can be divided into two classes: men and women.” Need not read again – It means literally EVERYONE! */}
              Expert VAT Consultancy Services in the UAE - Maximize Your Tax
              Efficiency with Our Professional Guidance.
            </div>

            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open + " " + styles.ac2_detail2Width}
            >
              As leading VAT Consultancy service providers in UAE, we understand
              the challenges businesses face in maintaining momentum with
              frequently changing legal requirements. VAT implementation was
              more like a revolution in several countries worldwide, and the
              introduction of Value-Added Tax (VAT) in the UAE was part of the
              government&apos;s strategy to reduce dependency on oil-generated
              income and further stabilize the economy.
            </div>
            {/* <div style={{ marginTop: "20px" }} className={styles.details18OpenY}>
                            VAT implementation was more like a revolution in several countries in the world.
                        </div> */}
            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open + " " + styles.ac2_detail2Width}
            >
              The Federal Tax Authority oversees managing and collecting federal
              taxes and related fines, distributing tax-generated revenues, and
              applying the tax-related procedures in force in the UAE. As VAT
              consultants in the UAE, we have undertaken to assist our clients
              in creating an effective strategy to maximize their tax recovery
              while staying within the law and ensuring compliance with
              government regulations.
            </div>
            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open + " " + styles.ac2_detail2Width}
            >
              Our VAT Consultancy Services encompass VAT Registration, VAT
              advisory & compliance support, VAT return filing, VAT health
              check, VAT Training, Tourist Refund scheme, VAT Deregistration,
              and much more. We work with businesses of all sizes and types,
              providing tailored solutions to meet specific needs and
              challenges.
            </div>
            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open + " " + styles.ac2_detail2Width}
            >
              Our experienced team of VAT specialists stays up-to-date with the
              latest changes and developments in VAT regulations, ensuring that
              our clients are always well- informed and prepared. We provide
              comprehensive VAT advisory and compliance support, assisting
              clients in understanding the implications of VAT on their
              operations and identifying potential risks and opportunities.
            </div>
            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open + " " + styles.ac2_detail2Width}
            >
              We also offer VAT health checks, designed to identify any
              compliance issues and provide recommendations for improvement. Our
              VAT training programs are tailored to meet the needs of our
              clients, helping them understand the fundamentals of VAT and how
              it impacts their business.
            </div>
            <div
              style={{ marginTop: "20px" }}
              className={styles.details18Open + " " + styles.ac2_detail2Width}
            >
              Whether you need help with VAT registration, filing, or
              deregistration, we are here to assist. Our goal is to help our
              clients minimize the impact of VAT on their business, reduce
              costs, and maximize tax recovery. Contact us today to learn more
              about our VAT Consultancy Services in the UAE.
            </div>
          </div>
          <div
            className={styles.acountingBanner2Book_right2}
            data-aos="fade-left"
          >
            <BookCall />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Accounting_Banner2;
