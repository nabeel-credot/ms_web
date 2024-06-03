import React, { useState } from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Appointment from "./Appointment_schedule";
import Link from "next/link";
function AdgmWings() {
  const [appoint, setAppoint] = useState(false);
  return (
    <Container>
      <div className={styles.servicenewTitle} data-aos="fade-right">Refiguring Reem Retail</div>
      <div className={styles.wingContainer}>
        <div className={styles.alreempara} data-aos="fade-right"> 
          <p>
            Are you ready to step up your small business game? MS is here to
            make it happen! Calling all retailers in Al Reem Island - get ready for a
            game-changing offer that&apos;s set to transform your business
            journey on Al Reem Island. As a part of our social initiative, MS
            proudly joins the ADGM&apos;s expansion efforts by reaching out to
            small retail businesses in this holy month of Ramadan and beyond. To
            ensure a confident and timely transition, we provide an exclusive
            opportunity to 50 eligible businesses with
          </p>
          <div className={styles.alreemRetail}>
            <div className={styles.singleRetail}>
              Pro bono license <br />
              conversion 
            </div>
            <div className={styles.singleRetail}>
              Free transition advisory <br />
              services 
            </div>
          </div>
          <a href="https://b32xcmv9byo.typeform.com/to/P1bIZyFG">
            <div style={{ marginTop: "33px" }} className={styles.wingswebonly}>
              {/* <a href="#" className={styles.settingbtn}><span>Setting up in Al Reem</span></a> */}
              <button
                className={styles.settingbtn}
                // onClick={() => setAppoint(true)}
              >
                <span>Start Your Assessment</span>
              </button>
            </div>
          </a>
        </div>
        <div className={styles.wingRight} data-aos="fade-left">
          <div className={styles.wingsrightOuter}>
            <div className={styles.wingsrightInner}>
              <p className={styles.wingRightTitle}>
                For new business applications
              </p>
              <p className={styles.wingsrightpara}>
                New businesses planning to establish their presence on Al Reem
                Island are required to apply for a commercial licence from ADGM
                Free Zone rather than the Abu Dhabi Department of Economic
                Development (ADDED).
              </p>
            </div>
          </div>
          <div className={styles.wingsrightInner}>
            <p className={styles.wingRightTitle}>
              For existing business applications
            </p>
            <p className={styles.wingsrightpara}>
              Existing businesses in Al Reem Island can continue operations without
              ADGM requirements until December 31, 2024.  Non-financial and
              retail businesses can benefit from a fee waiver by completing
              their transition before October 31, 2024
            </p>
          </div>
        </div>
        <a href="https://b32xcmv9byo.typeform.com/to/P1bIZyFG">
          <div className={styles.mobwingsonly}>
            <button
              className={styles.settingbtn}
              // onClick={() => setAppoint(true)}
            >
              <span>Start Your Assessment</span>
            </button>
          </div>
        </a>
        {appoint && (
          <div className={styles.appointwrapper}>
            {" "}
            <Appointment appoint={appoint} setAppoint={setAppoint} />
          </div>
        )}
      </div>
    </Container>
  );
}

export default AdgmWings;
