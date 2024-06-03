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
      <div className={styles.menuBar_container}>
        <Link
          href="/masdar-incorporation-compliance-and-corporate-services"
          prefetch={false}
        >
          <div
            className={
              router.pathname ==
              "/masdar-incorporation-compliance-and-corporate-services"
                ? styles.active
                : styles.menu
            }
          >
            {router.pathname ==
            "/masdar-incorporation-compliance-and-corporate-services" ? (
              <span></span>
            ) : (
              ""
            )}
            MASDAR Incorporation Compliance
            <br /> and corporate services
            {router.pathname ==
            "/masdar-incorporation-compliance-and-corporate-services" ? (
              ""
            ) : (
              <span></span>
            )}
          </div>
        </Link>
        <div className={styles.webOnly}>
          <Image src="/images/menuLine.png" alt="" width="2" height="50" />
        </div>

        <Link href="/masdar-management-advisory" prefetch={false}>
          <div
            className={
              router.pathname == "/masdar-management-advisory"
                ? styles.active
                : styles.menu
            }
          >
            {router.pathname == "/masdar-management-advisory" ? (
              <span></span>
            ) : (
              ""
            )}
            Management Advisory
            {router.pathname == "/masdar-management-advisory" ? (
              ""
            ) : (
              <span></span>
            )}
          </div>
        </Link>
        <div className={styles.webOnly}>
          <Image src="/images/menuLine.png" alt="" width="2" height="50" />
        </div>

        <Link
          href="/masdar-assistance-in-bank-account-opening"
          prefetch={false}
        >
          <div
            className={
              router.pathname == "/masdar-assistance-in-bank-account-opening"
                ? styles.active
                : styles.menu
            }
          >
            {router.pathname == "/masdar-assistance-in-bank-account-opening" ? (
              <span></span>
            ) : (
              ""
            )}
            Assistance in Bank
            <br /> Account opening
            {router.pathname == "/masdar-assistance-in-bank-account-opening" ? (
              ""
            ) : (
              <span></span>
            )}
          </div>
        </Link>

        <div className={styles.webOnly}>
          <Image src="/images/menuLine.png" alt="" width="2" height="50" />
        </div>

        <Link href="/masdar-unique-benefits" prefetch={false}>
          <div
            className={
              router.pathname == "/masdar-management-advisory"
                ? styles.active
                : styles.menu
            }
          >
            {router.pathname == "/masdar-management-advisory" ? (
              <span></span>
            ) : (
              ""
            )}
            Unique Benefits
            {router.pathname == "/masdar-management-advisory" ? (
              ""
            ) : (
              <span></span>
            )}
          </div>
        </Link>
      </div>
    </Container>
  );
}

export default MenuBar;
