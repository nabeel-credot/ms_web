import React from "react";
import styles from "./LicenseCard.module.css";
import Image from "next/image";
function ProcessCard({ num, title, children, showLine=true }) {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
       {showLine ? <div className={styles.no_and_line}>
          <div className={styles.num}>{num}</div>
          <div className={styles.line}>
            <Image src="/images/yloLine.png" alt="" width={48} height={1} />
          </div>
        </div>: null}
        <div className={styles.step}>{title}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default ProcessCard;
