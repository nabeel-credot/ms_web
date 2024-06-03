import React, { useState } from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Appointment from "./Appointment_schedule";
import Link from "next/link";
function Al_reemBanner() {
  const [appoint, setAppoint] = useState(false);
  return (
    <>
      <div className={styles.dmccBanner}>
        <div className={styles.contentdiv_dmcc}>
          <div className={styles.headdmcc}>Your Gateway <br/>to Global Trade</div>
          <p>
          Dubai aims to become a top destination for commodities, financial services, and commerce, strategically located to connect with rapidly expanding markets in the Middle East and beyond. The backbone of this vision is trade, and the Dubai Multi Commodities Centre (DMCC) plays a pivotal role as the dedicated global trading centre and a thriving marketplace for commodities, financial services, and various specialised industries. DMCC is designed specifically for businesses engaged in trade. It brings together over 24,000 businesses across diverse sectors and industries within the world&apos;s most interconnected Free Zone. By becoming a part of DMCC, businesses can witness how it actively contributes to the ongoing evolution and economic prosperity of Dubai.
          </p>
          <div className={styles.alreembtn}>
            <button
              className={styles.settingbtn_dmcc}
              onClick={() => setAppoint(true)}
            >
              <span>Setting up in DMCC</span>
            </button>
          </div>
        </div>
        {appoint && (
          <div className={styles.appointwrapper}>
            {" "}
            <Appointment appoint={appoint} setAppoint={setAppoint} />
          </div>
        )}
      </div>
    </>
  );
}

export default Al_reemBanner;
