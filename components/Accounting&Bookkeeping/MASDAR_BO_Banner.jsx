import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import cstyles from "./ADGM.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BookCall from "./BookConsultationCall";
import Image from "next/image";
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
          <div className={styles.details18Open}>
            where we specialize in assisting businesses with opening bank
            accounts in Masdar City. If you&apos;re planning to establish your
            company in this vibrant hub of innovation, we understand that
            navigating the banking system in a new country can be overwhelming.
            That&apos;s why we offer comprehensive bank account opening
            assistance to streamline the process and ensure a smooth experience
            for you.
          </div>
          <div className={styles.details18Open}>
            As experts in company formation and business setup in Masdar City,
            we have in-depth knowledge of the local banking landscape. Our team
            has established strong relationships with various banks in the
            region, allowing us to provide valuable insights and guidance on the
            best banking options tailored to your specific business
            requirements.
          </div>
          <div className={styles.details18Open}>
            We recognize that each company is unique, with its own set of needs
            and preferences. Therefore, we work closely with you to understand
            your business goals and find the most suitable banking solution that
            aligns with your objectives. Whether you&apos;re an existing company
            in Masdar City or looking to incorporate here, our bank account
            opening assistance is designed to support your success.
          </div>
          <div className={styles.details18Open}>
            Don&apos;t let the complexities of banking processes hold you back.
            Take advantage of our expertise and let us handle your bank account
            opening in Masdar City, enabling you to focus on growing your
            business. Contact us today to learn more about how our services can
            contribute to your business growth and expansion in Masdar City.
          </div>
        </div>
        <div className={styles.RA_banner} data-aos="fade-left">
          <BookCall />
        </div>
      </div>
    </Container>
  );
}

export default Accounting_Banner2;
