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
        <h3 className={styles.heading}>Below are key annual obligations</h3>
        <div className={styles.serviceWrap}>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>01</div>
            </div>
            <div>
              <div className={styles.title}>Lease Registration</div>

              <span
                onClick={() => handleChange("lease")}
                style={{
                  color: "#D4AE31",
                  borderBottom: "1px solid #D4AE31",
                  icon: "pointer",
                  cursor: "pointer",
                }}
              >
                {state != "lease" ? "Read more" : ""}
              </span>
            </div>
            {state === "lease" ? (
              <div className={styles.subcontent}>
                If your company holds any lease agreements for property or
                premises within ADGM, it may be necessary to register these
                leases with ADGM. Compliance with lease registration
                requirements ensures legal validity and protection for both
                landlords and tenants.
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
            <div className={styles.title}>Annual Return Filing</div>
            <span
              onClick={() => handleChange("annual")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                cursor: "pointer",
              }}
            >
              {state != "annual" ? "Read more" : ""}
            </span>
            {state === "annual" ? (
              <div className={styles.subcontent}>
                ADGM mandates that companies file an annual return, which
                provides essential information about the company&apos;s
                directors, shareholders, and share capital. The annual return
                must be submitted to the ADGM Registration Authority within the
                specified timeframe.
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
            <div className={styles.title}>
              Economic Substance Regulations (ESR) Filings
            </div>
            <span
              onClick={() => handleChange("economic")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                cursor: "pointer",
              }}
            >
              {state != "economic" ? "Read more" : ""}
            </span>
            {state === "economic" ? (
              <div className={styles.subcontent}>
                {" "}
                ADGM companies may be subject to the Economic Substance
                Regulations, which aim to ensure that companies engaged in
                certain relevant activities have a substantial economic presence
                within the jurisdiction. If your company falls under the scope
                of ESR, you may be required to file notifications and reports to
                demonstrate compliance with the substance requirements.
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
            <div className={styles.title}>License Renewal</div>
            <span
              onClick={() => handleChange("license")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                cursor: "pointer",
              }}
            >
              {state != "license" ? "Read more" : ""}
            </span>
            {state === "license" ? (
              <div className={styles.subcontent}>
                Companies operating in ADGM are required to renew their business
                licenses every year. It is essential to stay informed about the
                renewal dates and initiate the renewal process in a timely
                manner to ensure continuous compliance with ADGM regulations.
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
            <div className={styles.title}>Data Protection Renewal</div>
            <span
              onClick={() => handleChange("data")}
              style={{
                color: "#D4AE31",
                borderBottom: "1px solid #D4AE31",
                cursor: "pointer",
              }}
            >
              {state != "data" ? "Read more" : ""}
            </span>
            {state === "data" ? (
              <div className={styles.subcontent}>
                Companies that handle personal data are subject to data
                protection regulations in ADGM. It is essential to ensure that
                your company complies with the applicable data protection laws
                and regulations, including obtaining the necessary approvals and
                renewing data protection registrations or licenses as required.
                Renewals typically involve reassessing your data protection
                practices, updating policies and procedures, and renewing
                registrations or licenses with the relevant authorities.
              </div>
            ) : null}
          </div>
          <div className={styles.box}>
            <div className={styles.top} style={{ display: "none" }}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>04</div>
            </div>
            <div className={styles.title} style={{ color: "white" }}>
              Data Protection Renewal
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default RA_IA_service;
