import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Link from "next/link"
function Company_Form_Banner() {
  return (
    <div className={styles.company_formContainer}>
        <Container>
          <div className={styles.comp_form} data-aos="fade-right">
      <div className={styles.company_form_title}>Company Formation</div>
      <p className={styles.company_form_para}>
        In October 2015, Abu Dhabi Global Market (ADGM) became fully
        operational, opening its doors to welcome local and international
        enterprises and institutions. Located in the heart of Abu Dhabi, ADGM
        serves as a bridge between the east-west corridor. ADGM offers a secure
        and efficient platform for companies and financial institutions to
        establish operations and fulfill their expansion ambitions. It harnesses
        the inherent strength of the Abu Dhabi economy and advances the spirit
        of long-term partnership and collaboration.
      </p>
      <div>
      <Link href="/incorporation-advisory-and-assistance">
  <button className={styles.company_form_button}>
    <span>Discover More</span>
  </button>
</Link>      </div>
</div>
      </Container>
    </div>
  );
}

export default Company_Form_Banner;
