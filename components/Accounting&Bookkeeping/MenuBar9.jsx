import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "../Common/Container";

import Image from "next/image";
function MenuBar() {
  const router = useRouter();

  return (
    <Container>
      <div className={styles.menuBar_container3}>
        <Link href="/incorporation-advisory-and-assistance" prefetch={false}>
          <div
            className={
              router.pathname == "/incorporation-advisory-and-assistance"
                ? styles.active
                : styles.menu
            }
          >
            {router.pathname == "/incorporation-advisory-and-assistance" ? (
              <span></span>
            ) : (
              ""
            )}
            Incorporation Advisory &<br /> Assistance
            {router.pathname == "/incorporation-advisory-and-assistance" ? (
              ""
            ) : (
              <span></span>
            )}
          </div>
        </Link>
        <div className={styles.webOnly}>
          <Image src="/images/menuLine.png" alt="" width="2" height="50" />
        </div>

        <Link href="/adgm-compliance-filings" prefetch={false}>
          <div
            className={
              router.pathname == "/adgm-compliance-filings"
                ? styles.active
                : styles.menu
            }
          >
            {router.pathname == "/adgm-compliance-filings" ? <span></span> : ""}
            ADGM Compliance Filings
            {router.pathname == "/adgm-compliance-filings" ? "" : <span></span>}
          </div>
        </Link>

        <div className={styles.webOnly}>
          <Image src="/images/menuLine.png" alt="" width="2" height="50" />
        </div>

        <Link href="/FO-service" prefetch={false}>
          <div
            className={
              router.pathname == "/FO-service" ? styles.active : styles.menu
            }
          >
            {router.pathname == "/FO-service" ? <span></span> : ""}
            FO Service
            {router.pathname == "/FO-service" ? "" : <span></span>}
          </div>
        </Link>

        <Link
          href="/AML-compliance-and-outsourced-MLRO-services"
          prefetch={false}
        >
          <div
            className={
              router.pathname == "/AML-compliance-and-outsourced-MLRO-services"
                ? styles.active
                : styles.menu
            }
          >
            {router.pathname ==
            "/AML-compliance-and-outsourced-MLRO-services" ? (
              <span></span>
            ) : (
              ""
            )}
            AML Compliance & <br />
            Outsourced MLRO Services
            {router.pathname ==
            "/AML-compliance-and-outsourced-MLRO-services" ? (
              ""
            ) : (
              <span></span>
            )}
          </div>
        </Link>

        <div className={styles.webOnly}>
          <Image src="/images/menuLine.png" alt="" width="2" height="50" />
        </div>

        <Link href="/management-advisory-and-assistance" prefetch={false}>
          <div
            className={
              router.pathname == "/management-advisory-and-assistance"
                ? styles.active
                : styles.menu
            }
          >
            {router.pathname == "/management-advisory-and-assistance" ? (
              <span></span>
            ) : (
              ""
            )}
            Management Advisory
            <br /> & Assistance
            {router.pathname == "/management-advisory-and-assistance" ? (
              ""
            ) : (
              <span></span>
            )}
          </div>
        </Link>
        <div className={styles.webOnly}>
          <Image src="/images/menuLine.png" alt="" width="2" height="50" />
        </div>

        <Link href="/bank-opening-assistance" prefetch={false}>
          <div
            className={
              router.pathname == "/bank-opening-assistance"
                ? styles.active
                : styles.menu
            }
          >
            {router.pathname == "/bank-opening-assistance" ? <span></span> : ""}
            Bank Account Opening Assistance
            {router.pathname == "/bank-opening-assistance" ? "" : <span></span>}
          </div>
        </Link>
      </div>
    </Container>
  );
}

export default MenuBar;
