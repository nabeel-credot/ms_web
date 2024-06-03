import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../Common/Container";
function Corporate_section1() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);
  return (
    <Container>
      <div className={styles.corporate_container}>
        <div className={styles.Corporate_sub}>
          <div className={styles.Corporate_left} data-aos="fade-right">
            <Image
              src="/images/corporateBg2.png"
              alt=""
              width={524}
              height={401}
              className={styles.borderRad100}
            />
          </div>
          <div
            className={styles.Corporate_right + " " + styles.spclPadding}
            data-aos="fade-left"
          >
            <div className={styles.details24400CT}>
              While the law has not yet been issue, the FTA has publicly
              announced the key principle and policy choices for the new regime
              which states:
            </div>
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
                <span className={styles.key + " " + styles.keyWidth1}>
                  Businesses with financial years starting on 1st of July 2023
                  and ending on 30th of June 2024, will become subject to CT
                  from 1 July 2022.
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
                <span className={styles.key + " " + styles.keyWidth1}>
                  For a business that begins its annual financial year on 1
                  January 2023 and ends on 31 December 2023, the UAE CT will
                  apply from 1 January 2024 (which is the first financial year
                  the business will begin on or after 1 June 2023).
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.mobOnly} data-aos="fade-left">
          <div className={styles.Corporate_left + " " + styles.spclPadding1}>
            <Image
              src="/images/corporateBg4.png"
              alt=""
              width="524px"
              height="401px"
              style={{
                borderBottomLeftRadius: "25px",
                borderTopRightRadius: "25px",
              }}
            />
          </div>
        </div>

        <div
          className={styles.Corporate_sub + " " + styles.spclMargin1}
          data-aos="fade-right"
        >
          <div className={styles.Corporate_right}>
            <div className={styles.details24400CT + " " + styles.spclWidth1}>
              The corporate tax will be applied to the net profit of a business
              which is the amount reported in the Financial Statements prepared
              in accordance with international accounting standards. There will
              be a progressive tax rate that will be applicable on the
              following:
            </div>
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
                  0% tax for businesses with income profit UP TO AED 375,000.
                  That is to support small businesses and startups.
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
                  9% tax for businesses with income profit ABOVE AED 375,000
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
                  According to pillar two of the OECD’s base erosion and profit
                  shifting project, this rate might be different for large
                  multinational companies that meet specific criteria.
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.webOnly} data-aos="fade-left">
            <div className={styles.Corporate_left + " " + styles.spclPadding1}>
              <Image
                src="/images/corporateBg4.png"
                alt=""
                width="524px"
                height="401px"
                style={{
                  borderBottomLeftRadius: "100px",
                  borderTopRightRadius: "100px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Corporate_section1;
