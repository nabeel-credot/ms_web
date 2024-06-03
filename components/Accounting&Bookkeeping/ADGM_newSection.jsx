import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import cstyles from "./ADGM.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import Container from "../Common/Container";
function ADGM_newSection() {
  useEffect(() => {
    AOS.init({
      duration: 1900,
      once: false,
    });
  }, []);

  return (
    <Container>
      <div className={cstyles.ADGM_newSection} style={{ marginTop: "65px" }}>
        <div className={cstyles.ADGM_newSectionFlex}>
          <div className={cstyles.ADGM_newSectionFlexR} data-aos="fade-right">
            <div className={cstyles.black_heading2}>
              Benefits of incorporation in{" "}
              <span style={{ color: "#D4AE31" }}>ADGM</span>
            </div>

            <ul>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowB.svg"
                    alt=""
                    width={9}
                    height={15}
                    className={styles.wArrow}
                  />
                </div>
                <div className={cstyles.yArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowY.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={cstyles.key + " " + styles.keyWidth}>
                  Independent judicial system based on British Common Law.
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowB.svg"
                    alt=""
                    width={9}
                    height={15}
                    className={styles.wArrow}
                  />
                </div>
                <div className={cstyles.yArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowY.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={cstyles.key + " " + styles.keyWidth}>
                  Seamless digital experience for the delivery of judicial
                  services in ADGM E-Courts.
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowB.svg"
                    alt=""
                    width={9}
                    height={15}
                    className={styles.wArrow}
                  />
                </div>
                <div className={cstyles.yArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowY.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={cstyles.key + " " + styles.keyWidth}>
                  100% foreign ownership, eliminating the requirement to have
                  51% of the shares held in the name of a UAE national or a
                  company wholly owned by UAE nationals.
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowB.svg"
                    alt=""
                    width={9}
                    height={15}
                    className={styles.wArrow}
                  />
                </div>
                <div className={cstyles.yArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowY.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={cstyles.key + " " + styles.keyWidth}>
                  Broad range of commercial activities.
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowB.svg"
                    alt=""
                    width={9}
                    height={15}
                    className={styles.wArrow}
                  />
                </div>
                <div className={cstyles.yArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowY.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={cstyles.key + " " + styles.keyWidth}>
                  Favourable tax conditions, providing the opportunity to repatriate
                  profits and capital.
                </span>
              </li>
              <li>
                <div className={cstyles.wArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowB.svg"
                    alt=""
                    width={9}
                    height={15}
                    className={styles.wArrow}
                  />
                </div>
                <div className={cstyles.yArrow}>
                  {" "}
                  <Image
                    src="/images/LarrowY.svg"
                    alt=""
                    width={9}
                    height={15}
                  />
                </div>
                <span className={cstyles.key + " " + styles.keyWidth}>
                  Attractive tax regime and access to UAE’s excellent network of
                  double tax treaties.
                </span>
              </li>
            </ul>
          </div>

          {/* <div className={cstyles.ADGM_newSectionFlexL} data-aos="fade-left">
                    <div className={cstyles.imgWrap}>
                    <Image src="/images/adgmN.png" alt="" layout='fill' />
                    </div>

                </div> */}
        </div>
      </div>
    </Container>
  );
}

export default ADGM_newSection;
