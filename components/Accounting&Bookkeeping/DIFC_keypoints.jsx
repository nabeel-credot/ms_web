import React, { useEffect, useState } from "react";
import styles from "./ADGM.module.css";
import cstyles from "./Styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// import Card from "../LicenseCard";
import Container from "../Common/Container";

function ADGM_process() {
  const [state, setState] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 1900,
      once: false,
    });
  }, []);

  const handleChange = (section) => {
    setState((prev) => (prev !== section ? section : ""));
  };

  return (
    <Container>
      <div
        className={styles.pContainer + " " + styles.paddingBtm}
        data-aos="fade-up"
      >
        <div className={cstyles.white_heading + " " + cstyles.textCntr}>
          Navigating DIFC: Advantages of MS Guidance
        </div>

        <div className={styles.pWrapper}>
          <div className={styles.box}>
            <div>
              {/* <div className={styles.content1Wrap}> */}
                {/* <div className={styles.listDetails}>
                  It covers various sectors such as:
                </div> */}
                <div className={styles.List}>
                  <div
                    className={styles.ListTitle}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleChange("banking")}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                      />
                    </span>
                    Expert Company Formation
                  </div>
                  {state === "banking" ? (
                    <div className={styles.listDetails}>
                      Benefit from our proven expertise in DIFC company
                      formation, ensuring a seamless and compliant process. We
                      handle all the administrative tasks and paperwork, guiding
                      you through the process from start to finish.
                    </div>
                  ) : null}
                </div>

                <div className={styles.List}>
                  <div
                    className={styles.ListTitle}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleChange("capital-markets")}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                        style={{
                          transform: `rotate(${
                            state === "capital-markets" ? "90" : "0"
                          }deg)`,
                        }}
                      />
                    </span>
                    Dedicated Team
                  </div>
                  {state === "capital-markets" ? (
                    <div className={styles.listDetails}>
                      Our team of specialists is committed to helping your
                      business thrive in the dynamic DIFC environment. They are
                      well-versed in the intricacies of the region and work
                      closely with you to understand your unique needs and
                      objectives.
                    </div>
                  ) : null}
                </div>

                <div className={styles.List}>
                  <div
                    className={styles.ListTitle}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleChange("wealth-and-asset")}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                        style={{
                          transform: `rotate(${
                            state === "capital-markets" ? "90" : "0"
                          }deg)`,
                        }}
                      />
                    </span>
                    Comprehensive Services
                  </div>
                  {state === "wealth-and-asset" ? (
                    <div className={styles.listDetails}>
                      From initial setup to year-round financial services, we
                      offer a one-stop solution for your corporate needs. Our
                      comprehensive suite of services includes company
                      registration, licensing, compliance, and ongoing business
                      support.
                    </div>
                  ) : null}
                </div>

               

                {/* <div className={styles.List}>
                                    <div className={styles.ListTitle}>
                                        <span style={{ marginRight: 10 }}>
                                            <Image src="/images/LarrowY.svg" alt="" width={10} height={15} />
                                        </span>
                                        FinTech ,The ADGM RegLab & The ADGM Digital Lab
                                    </div>
                                    <div className={styles.listDetails}>
                                        these are few others which falls under this category
                                    </div>
                                </div> */}
              {/* </div> */}
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <div className={styles.content1Wrap}>
              <div className={styles.List}>
                  <div
                    className={styles.ListTitle}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleChange("others")}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                        style={{
                          transform: `rotate(${
                            state === "capital-markets" ? "90" : "0"
                          }deg)`,
                        }}
                      />
                    </span>
                    Seamless Experience
                  </div>
                  {state === "others" ? (
                    <div className={styles.listDetails}>
                      We&apos;re your trusted choice for a hassle-free business
                      journey in DIFC, minimizing your administrative burden.
                      Our dedicated team ensures a smooth and efficient process,
                      so you can focus on growing your business.
                    </div>
                  ) : null}
                </div>
                <div className={styles.List}>
                  <div
                    className={styles.ListTitle}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleChange("Tailored")}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                        style={{
                          transform: `rotate(${
                            state === "capital-markets" ? "90" : "0"
                          }deg)`,
                        }}
                      />
                    </span>
                    Tailored Solutions
                  </div>
                  {state === "Tailored" ? (
                    <div className={styles.listDetails}>
                      Our services are customized to meet your specific business
                      requirements, ensuring a perfect fit. We work closely with
                      you to design a solution that aligns with your goals and
                      objectives.
                    </div>
                  ) : null}
                </div>
                <div className={styles.List}>
                  <div
                    className={styles.ListTitle}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleChange("Unwaver")}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                        style={{
                          transform: `rotate(${
                            state === "capital-markets" ? "90" : "0"
                          }deg)`,
                        }}
                      />
                    </span>
                    Unwavering Support
                  </div>
                  {state === "Unwaver" ? (
                    <div className={styles.listDetails}>
                      Count on our ongoing support, ensuring your business stays
                      on track and compliant. We&apos;re always here to assist you
                      with any questions, concerns, or issues that may arise.
                    </div>
                  ) : null}
                </div>
               
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <div className={styles.content1Wrap}>
                <div className={styles.List}>
                  <div
                    className={styles.ListTitle}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleChange("Elevate")}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                        style={{
                          transform: `rotate(${
                            state === "capital-markets" ? "90" : "0"
                          }deg)`,
                        }}
                      />
                    </span>
                    Elevate Your Business
                  </div>
                  {state === "Elevate" ? (
                    <div className={styles.listDetails}>
                      Partner with us to elevate your business to new heights
                      within the Dubai International Financial Centre (DIFC).
                      With our support, you can navigate the complexities of the
                      DIFC environment and achieve your business objectives.
                    </div>
                  ) : null}
                </div>
                <div className={styles.List}>
                  <div
                    className={styles.ListTitle}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleChange("Account")}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                        style={{
                          transform: `rotate(${
                            state === "capital-markets" ? "90" : "0"
                          }deg)`,
                        }}
                      />
                    </span>
                    Accounting Expertise
                  </div>
                  {state === "Account" ? (
                    <div className={styles.listDetails}>
                      Our experienced accountants provide meticulous financial
                      services, ensuring the accuracy and compliance of your
                      financial records. We handle everything from bookkeeping
                      to financial reporting, so you can make informed
                      decisions.
                    </div>
                  ) : null}
                </div>
                <div className={styles.List}>
                  <div
                    className={styles.ListTitle}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleChange("Tax")}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                        style={{
                          transform: `rotate(${
                            state === "capital-markets" ? "90" : "0"
                          }deg)`,
                        }}
                      />
                    </span>
                    Tax Optimization
                  </div>
                  {state === "Tax" ? (
                    <div className={styles.listDetails}>
                      Benefit from our tax experts who will help you navigate
                      DIFC tax regulations to optimize your tax liabilities. We
                      identify tax-saving opportunities and ensure that your
                      business complies with all relevant tax laws.
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className={styles.listDetails + " " + styles.width}>
                  With MS, you can rest assured that your business is in safe
                  hands. Our holistic approach and commitment to excellence
                  ensure that every aspect of your company&apos;s setup, financial
                  management, accounting, and tax operations are expertly
                  handled. We&apos;re here to empower your business, allowing you to
                  focus on what you do best while we take care of the rest.
                </div>
      </div>
    </Container>
  );
}

export default ADGM_process;
