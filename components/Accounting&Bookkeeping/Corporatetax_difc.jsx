import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Link from "next/link"
function Company_Form_Banner() {
  return (
    <div className={styles.ctax_formContainer}>
        <Container>
          <div className={styles.comp_form}>
      <div className={styles.ctax_form_title}>What is Corporate Tax and<br/> what is its objective?</div>
      <p className={styles.ctax_form_para}>
      Corporate Tax, also referred to as company tax, is the financial obligation a corporation faces on its profits earned within a fiscal year. Similar to how income taxes apply to individual earnings, corporate taxes are imposed on a corporation&apos;s net income. This tax is calculated based on the organization&apos;s taxable income, derived by subtracting total expenses from total revenues. The components of expenses include costs of goods sold, operating expenses, research and development costs, marketing and selling expenses, general and administrative costs, and depreciation costs. Corporate taxes serve as a revenue source for the government, with the tax rate and slabs varying across different countries.
      </p>
      {/* <div>
      <Link href="/incorporation-advisory-and-assistance">
  <button className={styles.company_form_button_difc}>
    <span>Discover More</span>
  </button>
</Link>      </div> */}
</div>
      </Container>
    </div>
  );
}

export default Company_Form_Banner;
