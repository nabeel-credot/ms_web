import React, { useEffect, useState } from "react";
import styles from "./RA_Services.module.css";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import Container from "../Common/Container";
function RA_IA_service() {
  const [state, setState] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);
  const handleChange = (section) => {
    setState((prev) => (prev !== section ? section : ""));
  };
  return (
    <Container>
      <div className={styles.container} data-aos="fade-up">
        <h3 className={styles.heading}>
          Advantages Of Dubai International Financial Centre (DIFC)
        </h3>
        {/* <div className={styles.detailsP}>
          ADGM offers a wide range of business structures to use such as
        </div> */}
        <div className={styles.serviceWrap}>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>01</div>
            </div>
            <div className={styles.title}>Strategic Location</div>
            <span
              onClick={() => handleChange("private")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                icon: "pointer",
                cursor: "pointer",
              }}
            >
              {state != "private" ? "Read more" : ""}
            </span>
            {state === "private" ? (
              <div className={styles.details}>
                DIFC is strategically located in the heart of Dubai, providing
                access to the Middle East, Africa, South Asia, and other key
                markets. Its proximity to major international airports and ports
                enhances its global connectivity.
              </div>
            ) : null}
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>02</div>
            </div>
            <div className={styles.title}>Regulatory Excellence</div>
            <span
              onClick={() => handleChange("Guarantee")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                icon: "pointer",
                cursor: "pointer",
              }}
            >
              {state != "Guarantee" ? "Read more" : ""}
            </span>
            {state === "Guarantee" ? (
              <div className={styles.details}>
                DIFC has its own independent and internationally recognized
                regulatory authority, the Dubai Financial Services Authority
                (DFSA). This ensures a transparent and well-regulated
                environment for financial institutions and businesses.
              </div>
            ) : null}
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>03</div>
            </div>
            <div className={styles.title}>Tax Efficiency</div>
            <span
              onClick={() => handleChange("shares")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                icon: "pointer",
                cursor: "pointer",
              }}
            >
              {state != "shares" ? "Read more" : ""}
            </span>
            {state === "shares" ? (
              <div className={styles.details}>
                DIFC offers a tax-efficient environment with zero percent tax on
                corporate income and profits for a guaranteed period of 15
                years, renewable for an additional 15 years. This is a
                significant advantage for businesses.
              </div>
            ) : null}
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>04</div>
            </div>
            <div className={styles.title}>Legal Framework</div>
            <span
              onClick={() => handleChange("withoutshares")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                icon: "pointer",
                cursor: "pointer",
              }}
            >
              {state != "withoutshares" ? "Read more" : ""}
            </span>
            {state === "withoutshares" ? (
              <div className={styles.details}>
                DIFC operates under English common law principles, providing a
                familiar and reliable legal framework for international
                businesses and investors.
              </div>
            ) : null}
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>05</div>
            </div>
            <div className={styles.title}>Access to Skilled Workforce</div>
            <span
              onClick={() => handleChange("Scope")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                icon: "pointer",
                cursor: "pointer",
              }}
            >
              {state != "Scope" ? "Read more" : ""}
            </span>
            {state === "Scope" ? (
              <div className={styles.details}>
                DIFC attracts a highly skilled and diverse talent pool, making
                it easier for companies to recruit professionals in various
                industries, especially in the finance sector.
              </div>
            ) : null}
          </div>

          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>06</div>
            </div>
            <div className={styles.title}>World-Class Infrastructure</div>
            <span
              onClick={() => handleChange("Limited")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                icon: "pointer",
                cursor: "pointer",
              }}
            >
              {state != "Limited" ? "Read more" : ""}
            </span>
            {state === "Limited" ? (
              <div className={styles.details}>
                DIFC boasts modern office spaces, state-of-the-art technology,
                and a range of amenities, ensuring that businesses have access
                to top-notch facilities and resources.
              </div>
            ) : null}
          </div>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>07</div>
            </div>
            <div className={styles.title}>Access to Financial Services</div>
            <span
              onClick={() => handleChange("Foreign")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                icon: "pointer",
                cursor: "pointer",
              }}
            >
              {state != "Foreign" ? "Read more" : ""}
            </span>
            {state === "Foreign" ? (
              <div className={styles.details}>
                DIFC is home to a wide range of financial institutions,
                including banks, asset management companies, insurance firms,
                and fintech startups. This provides companies with easy access
                to financial services and solutions.
              </div>
            ) : null}
          </div>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>08</div>
            </div>
            <div className={styles.title}>International Connectivity</div>
            <span
              onClick={() => handleChange("International")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                icon: "pointer",
                cursor: "pointer",
              }}
            >
              {state != "International" ? "Read more" : ""}
            </span>
            {state === "International" ? (
              <div className={styles.details}>
                DIFC is well-connected to international financial markets,
                facilitating access to global investors and clients. It also has
                an active capital markets ecosystem, including the Dubai
                International Financial Exchange (DIFX).
              </div>
            ) : null}
          </div>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>09</div>
            </div>
            <div className={styles.title}>Innovation and Fintech Hub</div>
            <span
              onClick={() => handleChange("Fintech")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                icon: "pointer",
                cursor: "pointer",
              }}
            >
              {state != "Fintech" ? "Read more" : ""}
            </span>
            {state === "Fintech" ? (
              <div className={styles.details}>
                DIFC has positioned itself as a regional hub for innovation and
                fintech. It has introduced initiatives like regulatory sandboxes
                and fintech accelerator programs to support financial technology
                startups.
              </div>
            ) : null}
          </div>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>10</div>
            </div>
            <div className={styles.title}>Security and Stability</div>
            <span
              onClick={() => handleChange("Security")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                icon: "pointer",
                cursor: "pointer",
              }}
            >
              {state != "Security" ? "Read more" : ""}
            </span>
            {state === "Security" ? (
              <div className={styles.details}>
                Dubai, where DIFC is located, is known for its political
                stability and security, contributing to a safe and reliable
                environment for businesses and investors.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default RA_IA_service;
