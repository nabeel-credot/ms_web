import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Styles.module.css";
import Image from "next/image";

import Container from "../Common/Container";
function Accounting_service() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div className={styles.accounting_service_container} data-aos="fade-up">
        <div className={styles.white_heading + " " + styles.textCntr}>
          Are you exempt from ESR?
        </div>
        <div
          style={{ marginTop: 20 }}
          className={
            styles.white_detail + " " + styles.textCntr + " " + styles.esrWidth
          }
        >
          The provisions of the Economic Substance Regulation do not apply to
          those entities who are at least 51% directly or indirectly owned by
          the UAE Government. This includes the Federal Government, the
          Government of any Emirate of the UAE, or any governmental authority or
          body. Such entities are exempted.
        </div>

        <div className={styles.servicerSubContainer2}>
          <div>
            <div className={styles.services_box1 + " " + styles.yellowBox}>
              <div className={styles.service_title} style={{ fontWeight: 500 }}>
                The Regulatory Authority Requires Notification To Be Submitted
                Stating The Following:
              </div>
              <ul>
                <li>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowY.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    {" "}
                    Whether or not it carries out a relevant activity.
                  </span>
                </li>
                <li>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowY.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span
                    className={styles.key + " " + styles.keyWidth}
                    style={{ width: "100%" }}
                  >
                    {" "}
                    Whether or not all or any part of the licensee’s gross
                    income in relation to the Relevant Activity is subject to
                    Tax in the jurisdiction outside the UAE.
                  </span>
                </li>
                <li>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowY
              .svg"
                      alt=""
                      width={9}
                      height={15}
                      className={styles.wArrow}
                    />
                  </div>

                  <span className={styles.key + " " + styles.keyWidth}>
                    {" "}
                    The date of the end of its Financial Year.
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.services_box1 + " " + styles.yellowBox}>
              <div className={styles.service_title}>
                What Does It Mean To Be Within The Scope Of ESR?
              </div>

              <ul>
                <li>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>

                  <span
                    className={styles.key + " " + styles.keyWidth}
                    style={{ width: "100%" }}
                  >
                    {" "}
                    The Core Income Generating Activity (CIGA) for each relevant
                    activity should genuinely be conducted in the State.
                  </span>
                </li>
                <li>
                  <span className={styles.wArrow}>
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </span>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    The majority of board meetings should be conducted in the
                    State.
                  </span>
                </li>
                <li>
                  <span className={styles.wArrow}>
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </span>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    Minimum quorate board meetings per year should be conducted
                    in the State.
                  </span>
                </li>
                <li>
                  <span className={styles.wArrow}>
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </span>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span
                    className={styles.key + " " + styles.keyWidth}
                    style={{ width: "100%" }}
                  >
                    Minutes of the meeting should be signed and maintained in
                    UAE.
                  </span>
                </li>
                <li>
                  <span className={styles.wArrow}>
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </span>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    Strategic decisions should be taken in the UAE.
                  </span>
                </li>
                <li>
                  <span className={styles.wArrow}>
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </span>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    An adequate number of employees should be physically present
                    in the UAE.
                  </span>
                </li>
                <li>
                  <span className={styles.wArrow}>
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </span>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span
                    className={styles.key + " " + styles.keyWidth}
                    style={{ width: "100%" }}
                  >
                    There should be adequate expenditure incurred in UAE or
                    adequate expenditure on outsourcing.
                  </span>
                </li>
                <li>
                  <span className={styles.wArrow}>
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </span>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    There should be adequate physical assets in the UAE
                  </span>
                </li>
                <li>
                  <span className={styles.wArrow}>
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </span>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span
                    className={styles.key + " " + styles.keyWidth}
                    style={{ width: "100%" }}
                  >
                    Third-party service providers are permitted, provided that
                    the entity has sufficient control and supervision.
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.services_box1 + " " + styles.yellowBox}>
              <div className={styles.service_title}>
                A Licensee Can Rebut Such An Assumption, Provided The Licensee
                Demonstrate The Increased Substance Requirements, Which Are:
              </div>
              <ul>
                <li>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    The licensee has a high degree of control over developing
                    the IP asset.
                  </span>
                </li>
                <li>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>

                  <span
                    className={styles.key + " " + styles.keyWidth}
                    style={{ width: "100%" }}
                  >
                    The licensee has adequate full-time employees with the
                    necessary qualifications that permanently reside and perform
                    their activities in the UAE. It is important to note that
                    relevant employee information (like experience, contracts,
                    qualifications, etc.) would need to be provided.
                  </span>
                </li>
                <li>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>

                  <span className={styles.key + " " + styles.keyWidth}>
                    The licensee has a business plan showing the reasons for
                    holding the IP in the UAE.
                  </span>
                </li>
                <li>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>

                  <span className={styles.key + " " + styles.keyWidth}>
                    Relevant decision making has and continues to take place in
                    the UAE.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className={styles.services_box1 + " " + styles.yellowBox}>
              <div className={styles.service_title}>
                Once an Entity Conducts The Economic Substance Test and Analyses
                its Economic Substance Impact in UAE, A Report Should be
                Submitted to the Regulatory Authority Containing the Following
                Information:{" "}
              </div>
              <ul>
                <li style={{ padding: "15px 0" }}>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                      className={styles.wArrow}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    {" "}
                    Type of Relevant Activity carried out.
                  </span>
                </li>
                <li style={{ padding: "15px 0" }}>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                      className={styles.wArrow}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span
                    className={styles.key + " " + styles.keyWidth}
                    style={{ width: "100%" }}
                  >
                    Amount and type of relevant income regarding the Relevant
                    Activity.
                  </span>
                </li>
                <li style={{ padding: "15px 0" }}>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                      className={styles.wArrow}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    {" "}
                    Amount and type of operating expenses and assets regarding
                    the Relevant Activity.
                  </span>
                </li>
                <li style={{ padding: "15px 0" }}>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                      className={styles.wArrow}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    Location of the business.
                  </span>
                </li>
                <li style={{ padding: "15px 0" }}>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                      className={styles.wArrow}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span
                    className={styles.key + " " + styles.keyWidth}
                    style={{ width: "100%" }}
                  >
                    The number of full-time employees with qualifications and
                    personnel responsible for carrying out the Relevant
                    Activity.
                  </span>
                </li>
                <li style={{ padding: "15px 0" }}>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                      className={styles.wArrow}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    Information showing the Core Income Generation Activity
                    regarding Relevant Activity..
                  </span>
                </li>
                <li style={{ padding: "15px 0" }}>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                      className={styles.wArrow}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    Declaration as to whether the Economic Substance test has
                    been satisfied.
                  </span>
                </li>
                <li style={{ padding: "15px 0" }}>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                      className={styles.wArrow}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    Where the Relevant Activity is outsourced, additional
                    information to be provided.
                  </span>
                </li>
                <li style={{ padding: "15px 0" }}>
                  <div className={styles.wArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowW.svg"
                      alt=""
                      width={9}
                      height={15}
                      className={styles.wArrow}
                    />
                  </div>
                  <div className={styles.yArrow}>
                    {" "}
                    <Image
                      src="/images/LarrowB.svg"
                      alt=""
                      width={9}
                      height={15}
                    />
                  </div>
                  <span className={styles.key + " " + styles.keyWidth}>
                    For IP Activity, Additional requirements applicable and
                    information to be provided.
                  </span>
                </li>
              </ul>
              <div
                style={{ marginTop: 30, marginBottom: 30 }}
                className={styles.yellowBoxContent}
              >
                This Reporting Obligation Must Be Submitted To The Regulatory
                Authority Within 12 Months Of The End Of Each Financial Year.
              </div>
              <div className={styles.yellowBoxContent2}>
                There are precise specifications to Intellectual Property
                Business under economic Substance Regulations. A UAE business is
                regarded as carrying on an Intellectual Property Business if it
                holds, exploits, or receives gross income from “Intellectual
                Property Assets”.
              </div>
              <div className={styles.yellowBoxContent2}>
                What makes IP activity different from other relevant activities
                is that If IP business is categorized as High Risk, there is an
                automatic exchange of information with the foreign competent
                authority and there are additional compliance requirements to be
                fulfilled.
              </div>
              <div className={styles.yellowBoxContent2}>
                In anticipation of its higher risk, the ESR presumes that a
                Licensee who carries out such activity is not complying with the
                Economic Substance Test.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Accounting_service;
