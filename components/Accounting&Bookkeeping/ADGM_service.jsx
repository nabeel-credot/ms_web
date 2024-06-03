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
        <h3 className={styles.heading}>Legal Structures</h3>
        <div className={styles.detailsP}>
          ADGM offers a wide range of business structures to use such as
        </div>
        <div className={styles.serviceWrap}>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <Image src="/images/MSLogo.svg" alt="" width={50} height={49} />
              </div>
              <div className={styles.num}>01</div>
            </div>
            <div className={styles.title}>
              Private Company Limited by Shares
            </div>
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
                A company that has share capital and the liability of members is
                limited to the amount, if any, unpaid on their shares. It cannot
                offer its shares to the public.
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
            <div className={styles.title}>
              Private Company Limited by Guarantee
            </div>
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
                A company that does not have share capital, and all members act
                as guarantors whose liability is limited to the amount they
                agree to contribute to the company&apos;s assets if it is wound
                up.
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
              Private Company Unlimited with shares
            </div>
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
                A company that has share capital but has no limit to the
                members&apos; liability.
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
            <div className={styles.title}>
              Private Company Unlimited without shares
            </div>
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
                A company that does not have share capital and there is no limit
                to the member’s liability
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
            <div className={styles.title}>Restricted Scope Company</div>
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
                A private company that can only be incorporated as a subsidiary
                of a group which publicly files consolidated accounts, or as a
                subsidiary of a company formed by Emiri decree or by an
                individual/members of the same family.
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
            <div className={styles.title}>Public Company Limited by shares</div>
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
                A company that has offered shares to the public and has limited
                liability. Only Public Companies Limited by Shares (PLCs)may be
                listed on stock exchanges.
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
            <div className={styles.title}>Branch of a Foreign Company</div>
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
                A company incorporated or formed outside of ADGM that wants to
                establish a presence in ADGM. This is a common and popular
                entity type, suitable for establishing a small presence or
                setting up a representative office to refer business
                transactions to the head office or parent company.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default RA_IA_service;
