import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import cstyles from "./Accounting.module.css";
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
          {/* <div className={styles.black36_heading_audit}>
                        ADGM
                    </div> */}
          <div className={styles.black36_heading_audit}>
            MS’s Exclusive Outsourced Finance Officer Solution For Abu Dhabi
            GLOBAL MARKET (ADGM)
          </div>
          <div
            className={styles.details18Open}
            style={{ paddingBottom: "25px" }}
          >
            In the dynamic realm of ADGM, compliance is key. According to the
            stringent Regulations and Rules of ADGM, it is imperative for every
            regulated entity to keep meticulous accounting records that provide
            a crystal-clear window into your financial transactions, ensure
            Financial Statements are prepared in accordance with International
            Financial Reporting Standards (IFRS) and ADGM requirements for each
            financial year and Regulatory Returns prepared and submitted
            adhering to the exacting requirements of the Prudential Regulations.
          </div>
          <div className={styles.black36_heading_audit}>
            Mandatory Appointment Of Finance Officer
          </div>
          <div
            className={styles.details18Open}
            style={{ paddingBottom: "25px" }}
          >
            A regulated entity in ADGM has mandatory requirement to appoint
            Finance Officer with relevant knowledge, competence and experience
            to ensure the proper execution of finance function and regulatory
            responsibilities. At MS, we recognize the gravity of this
            requirement. Our highly skilled Finance Officers are equipped with
            the expertise to ensure efficient finance function and flawless
            execution of your regulatory responsibilities and safeguarding your
            compliance with the applicable Rules and Regulations.
          </div>
        </div>
        <div className={styles.RA_banner} data-aos="fade-left">
          <BookCall path={"adgm"} />
        </div>
        <div className={styles.black36_heading_audit}>
          Avoid The Perils Of Non-Compliance And Embrace Strong Financial
          Function
        </div>
        <div className={styles.details18Open} style={{ paddingBottom: "25px" }}>
          Failure to maintain proper accounting records, submit accurate
          Financial Statements, and meet the obligations of Regulatory Returns
          can lead to dire consequences. Violations of ADGM&apos;s Rules and
          Regulations can result in hefty fines, severe penalties, and even the
          dreaded termination of your License. However, fear not! With MS by
          your side, you can steer clear of these risks and navigate towards
          empowered finance function.
        </div>
        <div className={styles.black36_heading_audit}>
          Maximize Your Financial Efficiency With MS Chartered Accountants
        </div>
        <div className={styles.details18Open}>
          MS boasts a stellar pool of finance professionals who possess the
          knowledge, competence, and up-to-date regulatory acumen necessary to
          support your finance function and ensure absolute compliance with
          ADGM&apos;s regulatory requirements. Our unmatched expertise empowers
          your business in a multitude of ways:
        </div>
        <div className={styles.Corporate_sub + " "} data-aos="fade-right">
          <ul>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                We review and optimize your finance and accounting processes and
                systems for increased efficiency.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                Our experts assist in developing accounting and finance policies
                and procedures tailored to your business needs.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                We ensure meticulous maintenance of books of accounts in
                compliance with ADGM requirements.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                Prepare and deliver month-end financial reports, including
                Balance Sheet, Profit and Loss, and cash flow statements.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                We handle the preparation and submission of monthly, quarterly,
                and yearly Prudential Returns.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                Assistance in the preparation, maintenance, and monitoring of
                budgets and conduct scenario stress tests.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                Assistance in preparation of IRAP and ICAAP reports.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                Calculations and monitoring of capital and liquidity resources
                to ensure financial stability.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                Thorough reviews of books of accounts and financial statements
                for accuracy and reliability.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                Utilize our financial analytics and reconciliations to gain
                valuable insights for informed decision-making.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                Benefit from our assistance in Risk Management reports.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                Assistance in preparing monthly board presentations to showcase
                financial performance.
              </span>
            </li>
            <li>
              <div className={styles.wArrow}>
                {" "}
                <Image
                  src="/images/LarrowB.svg"
                  alt=""
                  width={15}
                  height={25}
                  className={styles.wArrow}
                />
              </div>
              <div className={styles.yArrow}>
                {" "}
                <Image
                  src="/images/LarrowY.svg"
                  alt=""
                  width={15}
                  height={25}
                />
              </div>
              <span className={styles.key + " " + styles.keyWidth}>
                Liaising with external auditors, internal auditors, and
                regulators for smooth operations.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Accounting_Banner2;
