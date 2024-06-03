import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import Image from "next/image";
import Container from "../Common/Container";
import AOS from "aos";
import "aos/dist/aos.css";
function Corporate_section1() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div>
        <div className={styles.Corporate_sub}>
          <div
            className={styles.Corporate_right + " " + styles.spclPadding2}
            data-aos="fade-right"
          >
            <div
              className={styles.black36_heading_audit}
              style={{ marginBottom: 30 }}
            >
              What is Corporate Tax and what is its purpose?
            </div>
            <div className={styles.details18Open}>
              Corporate Tax is the amount a corporation must pay on its profits
              made in a financial year. It is also known as company tax.
            </div>
            <div className={styles.details18Open}>
              Like income taxes are levied on incomes earned by individuals,
              corporate taxes are the tax levied on net income of a corporation.
              The corporate tax is calculated on an organization’s taxable
              income which is the difference between the total revenue and the
              total expenses.
            </div>
            <div className={styles.details18OpenY + " " + styles.marL50}>
              Taxable income = Total Revenues – Total Expenses
            </div>
            <div className={styles.details18Open}>
              The expenses are composed of costs of goods sold, operating costs,
              expenses on R&D, marketing and selling costs, general and
              administrative costs and depreciation costs.
            </div>
            <div className={styles.details18Open}>
              Corporate taxes are a source of income for the government like
              other taxes. The rate of tax and the tax slabs vary from country
              to country.
            </div>
          </div>
          <div
            className={styles.Corporate_left + " " + styles.spclPadding1}
            data-aos="fade-left"
          >
            <Image
              src="/images/corporateBg3.png"
              alt=""
              width={614}
              height={470}
              className={styles.borderRad100}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Corporate_section1;
