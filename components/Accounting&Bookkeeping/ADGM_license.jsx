import React, { useEffect, useState } from "react";
import styles from "./ADGM.module.css";
import cstyles from "./Styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import Card from "../LicenseCard";
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
          ADGM License categories are
        </div>

        <div className={styles.pWrapper}>
          <div className={styles.box}>
            <Card num="01" title="Financial">
              <div className={styles.content1Wrap}>
                <div className={styles.listDetails}>
                  It covers various sectors such as:
                </div>
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
                    Banking
                  </div>
                  {state === "banking" ? (
                    <div className={styles.listDetails}>
                      Including Corporate and Transaction Banking, Private
                      Banking and Wealth Management, Investment Banking, Money
                      Services Business, and Digital Banking.
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
                    Capital Markets
                  </div>
                  {state === "capital-markets" ? (
                    <div className={styles.listDetails}>
                      Including Brokerage, Market Infrastructure, Virtual Asset
                      Activities, and Securities.
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
                    Wealth and Asset Management
                  </div>
                  {state === "wealth-and-asset" ? (
                    <div className={styles.listDetails}>
                      Including Investment Management, Funds and Fund
                      Management, and Asset Servicing.
                    </div>
                  ) : null}
                </div>

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
                    Others
                  </div>
                  {state === "others" ? (
                    <div className={styles.listDetails}>
                      Including FinTech, the ADGM RegLab, and The ADGM Digital
                      Lab, among others.{" "}
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
              </div>
            </Card>
          </div>

          <div className={styles.box}>
            <Card num="02" title="Non-Financial">
              <div className={styles.content1Wrap}>
                <div className={styles.listDetails}>
                  It allows for the establishment of Professional and business
                  services Corporate Solutions, which covers:
                </div>
                <div className={styles.List}>
                  <div className={styles.ListTitle}>
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                      />
                    </span>
                    Corporate Headquarters
                  </div>

                  <div
                    className={styles.ListTitle + " " + styles.marginTopList}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                      />
                    </span>
                    Corporate Treasury
                  </div>

                  <div
                    className={styles.ListTitle + " " + styles.marginTopList}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                      />
                    </span>
                    Holding Company
                  </div>

                  <div
                    className={styles.ListTitle + " " + styles.marginTopList}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                      />
                    </span>
                    Professional Associations
                  </div>

                  <div
                    className={styles.ListTitle + " " + styles.marginTopList}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                      />
                    </span>
                    Tech Startups
                  </div>

                  <div
                    className={styles.ListTitle + " " + styles.marginTopList}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                      />
                    </span>
                    Family Offices and Foundations
                  </div>

                  <div
                    className={styles.ListTitle + " " + styles.marginTopList}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                      />
                    </span>
                    Professional Service Providers
                  </div>

                  <div
                    className={styles.ListTitle + " " + styles.marginTopList}
                  >
                    <span style={{ marginRight: 10 }}>
                      <Image
                        src="/images/LarrowY.svg"
                        alt=""
                        width={10}
                        height={15}
                      />
                    </span>
                    Special Purpose Vehicles
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className={styles.box}>
            <Card num="03" title="Retail">
              <div className={styles.content1Wrap}>
                <div className={styles.listDetails + " " + styles.width}>
                  It covers manufacturing textiles, jewelry, and food products,
                  as well as the trade of motor vehicles, food and beverage, and
                  other goods. ADGM&apos;s retail activities also include
                  photography, rental and leasing of vehicles and machinery,
                  arts galleries, restaurants, and other related activities.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ADGM_process;
